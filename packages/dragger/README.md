# RxhuiDragger 组件

RxhuiDragger 是一个可拖拽分割面板组件，允许用户通过拖拽分隔线来调整左右两个面板的宽度。

## 特性

- 支持左右面板宽度拖拽调整
- 支持最小宽度限制
- 支持最大宽度限制（百分比）
- 支持单页面模式
- 响应式设计，自动适应窗口大小变化

## 安装

```bash
npm install rxhui-web-components
```

## 使用方法

```html
<rxhui-dragger>
  <div slot="left">
    <!-- 左侧面板内容 -->
  </div>
  <div slot="right">
    <!-- 右侧面板内容 -->
  </div>
</rxhui-dragger>
```

## 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| singlePage | Boolean | false | 是否启用单页面模式。在单页面模式下，左侧面板最大宽度为容器宽度 |

## 插槽

| 插槽名 | 说明 |
|--------|------|
| left | 左侧面板内容 |
| right | 右侧面板内容 |

## 样式

组件使用 CSS 自定义属性（CSS Custom Properties）来支持样式定制：

```css
rxhui-dragger {
  --divider-width: 4px;          /* 分隔线宽度 */
  --divider-color: #e0e0e0;      /* 分隔线颜色 */
  --divider-hover-color: #2196f3; /* 分隔线悬停颜色 */
}
```

## 示例

### 基础用法

```html
<rxhui-dragger>
  <div slot="left">
    <h2>左侧面板</h2>
    <p>这是左侧面板的内容</p>
  </div>
  <div slot="right">
    <h2>右侧面板</h2>
    <p>这是右侧面板的内容</p>
  </div>
</rxhui-dragger>
```

### 单页面模式

```html
<rxhui-dragger single-page>
  <div slot="left">
    <h2>导航菜单</h2>
    <ul>
      <li>菜单项 1</li>
      <li>菜单项 2</li>
    </ul>
  </div>
  <div slot="right">
    <h2>主要内容</h2>
    <p>这是主要内容区域</p>
  </div>
</rxhui-dragger>
```

## 注意事项

1. 组件默认设置了最小宽度为 100px
2. 在非单页面模式下，最大宽度默认为容器宽度的 80%
3. 组件会自动处理窗口大小变化，确保面板宽度始终在合理范围内
4. 拖拽时会自动禁用文本选择，防止干扰拖拽操作

## 浏览器支持

- Chrome
- Firefox
- Safari
- Edge

## 技术实现

该组件基于 Web Components 和 Lit 库开发，使用 TypeScript 编写，确保类型安全和良好的开发体验。 