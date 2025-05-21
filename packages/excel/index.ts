import { LitElement, html, css, unsafeCSS } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import Spreadsheet from "x-data-spreadsheet";
import * as XLSX from 'xlsx';
// 如何引入 css 文件
// import { excelSheet } from './xspreadsheet.js'

// console.log('xspreadcss', xspreadcss)

@customElement('rxhui-excel')
export class RxhuiExcel extends LitElement {

    @property({ type: String, attribute: 'file-url' })
    accessor fileUrl = ''

    willUpdate(changedProperties: Map<string, any>) {
        console.log('changedProperties', changedProperties)
        if (changedProperties.has('fileUrl')) {
            this._fetchDatafromUrl()
        }
    }

    // connectedCallback() {
    //     super.connectedCallback()
    //     // 使用 setTimeout 确保在属性初始化后执行
    //     setTimeout(() => {
    //         console.log('connectedCallback', this.fileUrl)
    //         if (this.fileUrl) {
    //             this._fetchDatafromUrl()
    //         }
    //     }, 100)
    // }

    @query('#x-spreadsheet')
    accessor xSpreadsheet!: HTMLElement

    private _fetchDatafromUrl = async () => {
        console.log('_fetchDatafromUrl', this.fileUrl)
        if (!this.fileUrl) return
        // if(!this.xSpreadsheet) return setTimeout(() => this._fetchDatafromUrl(), 300)

        try {
            const response = await fetch(this.fileUrl);
            const arrayBuffer = await response.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });
            console.log('workbook', workbook)

            // 转换为 x-data-spreadsheet 需要的格式
            const data = workbook.SheetNames.map(sheetName => {
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false });
                return {
                    name: sheetName,
                    rows: jsonData.reduce((map, row, i) => {
                        map[i] = {
                            cells: row.reduce((colMap, column, j) => {
                                colMap[j] = { text: column }
                                return colMap
                            }, {})
                        }
                        return map
                    }, {})
                };
            });
            console.log('转换为 x-data-spreadsheet 需要的格式', data, this.xSpreadsheet)

            const s = new Spreadsheet(this.xSpreadsheet, { mode: 'edit'})
                .loadData({ sheets: data })
                .change(data => {
                    console.log('spreadsheet changed:', data);
                });
            // s.validate()
        } catch (error) {
            console.error('Error loading Excel file:', error);
        }
    }

    render() {
        return html`
            <div id="x-spreadsheet"></div>
        `
    }

    // static styles = [excelSheet]

}

declare global {
    interface HTMLElementTagNameMap {
        'rxhui-excel': RxhuiExcel
    }
}
