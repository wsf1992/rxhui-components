import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

// 导入 JS
// @ts-ignore
import pluginJs from './dist/plugins/js/plugin.js?raw'
// @ts-ignore
import luckysheetJs from './dist/luckysheet.umd.js?raw'

import * as XLSX from 'xlsx';

// 添加 Luckysheet 类型声明
declare global {
    interface Window {
        luckysheet: {
            create: (options: any) => any;
            destroy: () => void;
            getSheetData: () => any;
            getSheet: () => any;
            getConfig: () => any;
            setConfig: (config: any) => void;
            updataSheet: (data: any[]) => void;
            transToCellData: (data: any[]) => any;
        };
        jQuery: any;
    }
}

@customElement('rxhui-excel')
export class RxhuiExcel extends LitElement {
    @property({ type: String, attribute: 'file-url' })
    accessor fileUrl = ''

    @property({ type: String, attribute: 'container' })
    accessor luckysheetContainer = 'luckysheet'

    static styles = css`
        :host {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
        }


    `;

    private _loadScript(content: string) {
        const script = document.createElement('script')
        script.textContent = content
        document.body.appendChild(script)
    }

    _initLuckysheet = async () => {
        try {
            console.log('this.luckysheetContainer', this.luckysheetContainer)
            window.luckysheet.create({
                container: this.luckysheetContainer,
                data: [
                    { "name": "Sheet1", color: "", "status": "1", "order": "0", "data": [], "config": {}, "index": 0 }
                ],
                lang: 'zh',
                allowCopy: false,
                showtoolbar: false,
                showinfobar: false,
                showsheetbar: true,
                showsheetbarConfig: {
                    add: false,
                    // menu: false,
                    // sheet: false,
                },
                showstatisticBar: false,
                enableAddRow: false,
                enableAddBackTop: false,
                sheetFormulaBar: false
            })
        } catch (error) {
            console.error('Error initializing Luckysheet:', error)
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback()
        // 销毁 luckysheet 实例
        if (window.luckysheet) {
            try {
                window.luckysheet.destroy()
            } catch (error) {
                console.error('Error destroying Luckysheet:', error)
            }
        }
    }

    async firstUpdated() {
        // 加载依赖
        this._loadScript(pluginJs)
        this._loadScript(luckysheetJs)

        // 等待一下确保脚本加载完成
        await new Promise(resolve => setTimeout(resolve, 1000))


        this._fetchDatafromUrl()
    }

    private _fetchDatafromUrl = async () => {
        if (this.fileUrl) {
            try {
                const response = await fetch(this.fileUrl)
                const arrayBuffer = await response.arrayBuffer()
                const workbook = XLSX.read(arrayBuffer, { type: 'array' })

                console.log('workbook', workbook)
                // 转换为 luckysheet 需要的格式

                // { "name": "Sheet1", color: "", "status": "1", "order": "0", "data": [], "config": {}, "index":0 }

                const data = workbook.SheetNames.map((sheetName, index) => {
                    const worksheet = workbook.Sheets[sheetName]
                    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false }) as any[][]

                    // 确保数据至少有100行26列
                    const rows = jsonData?.length || 84
                    const cols = jsonData?.[0]?.length || 60

                    // 创建空数据数组
                    const emptyData = Array(84).fill(null).map(() => Array(60).fill(null))

                    // 合并实际数据和空数据
                    const mergedData = emptyData.map((row, i) => {
                        if (i < rows) {
                            return row.map((cell, j) => {
                                return j < cols ? (jsonData[i]?.[j] || null) : null
                            })
                        }
                        return row
                    })

                    return {
                        name: sheetName,
                        color: '',
                        status: 1,
                        order: index,
                        data: mergedData,
                        config: {},
                        index: index
                    }
                })

                console.log('data', data)
                console.log('this.luckysheetContainer', this.luckysheetContainer)

                window.luckysheet.create({
                    container: this.luckysheetContainer,
                    data: data,
                    lang: 'zh',
                    allowCopy: false,
                    showtoolbar: false,
                    showinfobar: false,
                    showsheetbar: true,
                    showsheetbarConfig: {
                        add: false
                    },
                    showstatisticBar: false,
                    enableAddRow: false,
                    enableAddBackTop: false,
                    sheetFormulaBar: false
                })
            } catch (error) {
                console.error('Error loading Excel file:', error)
            }
        } else {
            this._initLuckysheet()
        }
    }


    render() {
        return html`
            <slot>
                <div id=${this.luckysheetContainer}></div>
            </slot>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'rxhui-excel': RxhuiExcel
    }
}
