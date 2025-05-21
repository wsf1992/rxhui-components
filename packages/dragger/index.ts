import { LitElement, html } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { draggerStyles } from './css.js'
/**
 * An dragger element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('rxhui-dragger')
export class RxhuiDragger extends LitElement {

    private isDragging = false;
    private startX = 0;
    private startWidth = 0;
    private minWidth = 100; // 最小宽度
    private maxWidthPercent = 0.8; // 最大宽度百分比


    @property({ type: Boolean })
    accessor singlePage = false


    @query('#divider')
    accessor divider!: HTMLElement;

    @query('#leftPanel')
    accessor leftPanel!: HTMLElement;

    @query('#rightPanel')
    accessor rightPanel!: HTMLElement;

    @query('.container')
    accessor container!: HTMLElement;


    // 计算最大允许宽度
    private getMaxWidth = () => {
        if (this.singlePage) return this.container.clientWidth;
        return this.container.clientWidth * this.maxWidthPercent;
    }

    // 开始拖拽
    private _startDrag = (e: MouseEvent) => {
        this.isDragging = true;
        this.startX = e.clientX;
        this.startWidth = this.leftPanel.offsetWidth;

        // 防止文本选中和拖拽图片等默认行为
        e.preventDefault();

        // 设置全局光标样式
        document.body.style.cursor = "col-resize";
        document.body.style.userSelect = "none";

        // 添加事件监听
        document.addEventListener("mousemove", this.onDrag);
        document.addEventListener("mouseup", this.stopDrag);
    }

    // 拖拽中
    private onDrag = (e: MouseEvent) => {
        if (!this.isDragging) return;
        const clientX = e.clientX;
        const dx = clientX - this.startX;
        let newWidth = this.startWidth + dx;

        // 应用宽度限制
        newWidth = Math.max(this.minWidth, newWidth);
        newWidth = Math.min(this.getMaxWidth(), newWidth);
        // 更新面板宽度
        this.leftPanel.style.width = newWidth + "px";

        // 防止内容选中
        e.preventDefault();
    }

    // 停止拖拽
    private stopDrag = () => {
        if (!this.isDragging) return;

        this.isDragging = false;

        // 恢复光标和选择
        document.body.style.cursor = "";
        document.body.style.userSelect = "";

        // 移除事件监听
        document.removeEventListener("mousemove", this.onDrag);
        document.removeEventListener("mouseup", this.stopDrag);
    }

    // 窗口大小变化时调整最大宽度
    private _handleResize = () => {
        if (this.leftPanel.offsetWidth > this.getMaxWidth()) {
            this.leftPanel.style.width = this.getMaxWidth() + "px";
        }
    }


    connectedCallback(): void {
        super.connectedCallback();
        window.addEventListener("resize", this._handleResize);
        setTimeout(() => {
            this.divider.addEventListener("mousedown", this._startDrag);
        }, 1000)
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        this.divider.removeEventListener("mousedown", this._startDrag);
        window.removeEventListener("resize", this._handleResize);
    }

    render() {
        return html`
            <div class="container ${this.singlePage ? 'single-page' : ''}">
                <div class="panel left-panel" id="leftPanel">
                <slot name="left"></slot>
                </div>
                <div class="divider" id="divider"></div>
                <div class="panel right-panel" id="rightPanel">
                <slot name="right"></slot>
                </div>
            </div>
            `
    }


    static styles = [draggerStyles]

}

// Add this to ensure proper type definitions
declare global {
    interface HTMLElementTagNameMap {
        'rxhui-dragger': RxhuiDragger
    }
}
