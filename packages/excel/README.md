# Rxhui Excel Component

一个基于 Lit 和 Luckysheet 的 Excel 查看组件。

## 功能特点

- 支持在线查看 Excel 文件
- 支持多工作表（Sheet）切换
- 保持 Excel 原始格式和样式
- 轻量级，无工具栏，专注于数据展示

## 使用方法

### 1. 安装依赖

```bash
npm install @rxhui/excel
```

### 2. 在项目中使用

```html
<!-- 在 HTML 中使用 -->
<rxhui-excel file-url="path/to/your/excel/file.xlsx"></rxhui-excel>
```

```typescript
// 在 TypeScript 中使用
import '@rxhui/excel';

// 组件会自动加载并显示 Excel 文件内容
```

### 3. 属性说明

| 属性名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| file-url | string | 是 | Excel 文件的 URL 地址 |

### 4. 注意事项

- 组件会自动处理 Excel 文件的加载和渲染
- 默认显示中文界面
- 禁用了复制功能
- 隐藏了工具栏和信息栏
- 支持工作表切换，但禁用了添加新工作表的功能
- 禁用了添加行和返回顶部功能
- 隐藏了公式栏

### 5. 示例

```html
<!-- 基本使用 -->
<rxhui-excel file-url="https://example.com/data.xlsx"></rxhui-excel>

<!-- 本地文件 -->
<rxhui-excel file-url="/assets/files/report.xlsx"></rxhui-excel>
```

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 依赖项

- Lit
- Luckysheet
- XLSX

## 许可证

MIT 