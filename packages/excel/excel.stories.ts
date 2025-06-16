import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';

// 引入必要的 CSS
import './dist/css/luckysheet.css';
import './dist/plugins/css/pluginsCss.css';
import './dist/plugins/plugins.css';
import './dist/assets/iconfont/iconfont.css';

const meta: Meta = {
  title: 'Components/Excel',
  component: 'rxhui-excel',
  tags: ['autodocs'],
  argTypes: {
    fileUrl: {
      control: 'text',
      description: 'Excel 文件的 URL 地址',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    container: {
      control: 'text',
      description: 'Luckysheet 容器的 ID',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'luckysheet2323' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# Excel 组件

一个基于 Lit 和 Luckysheet 的 Excel 查看组件，用于在线查看 Excel 文件。

## 功能特点

- 支持在线查看 Excel 文件
- 支持多工作表（Sheet）切换
- 保持 Excel 原始格式和样式
- 轻量级，无工具栏，专注于数据展示

## 使用方法

### 1. 引入必要的 CSS 文件

在使用组件之前，需要先引入以下 CSS 文件：

\`\`\`html
<link rel="stylesheet" href="./packages/excel/dist/css/luckysheet.css">
<link rel="stylesheet" href="./packages/excel/dist/plugins/css/pluginsCss.css">
<link rel="stylesheet" href="./packages/excel/dist/plugins/plugins.css">
<link rel="stylesheet" href="./packages/excel/dist/assets/iconfont/iconfont.css">
\`\`\`

### 2. 使用组件

组件需要在默认插槽中设置一个 div 元素，该元素的 id 要与 container 属性值一致，并且必须设置宽度和高度：

\`\`\`html
<rxhui-excel file-url="path/to/your/excel/file.xlsx" container="luckysheetContainer">
  <div id="luckysheetContainer" style="width: 100%; height: 600px;"></div>
</rxhui-excel>
\`\`\`

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| file-url | string | '' | Excel 文件的 URL 地址 |
| container | string | 'luckysheet' | Luckysheet 容器的 ID |

## 注意事项

- 组件会自动处理 Excel 文件的加载和渲染
- 默认显示中文界面
- 禁用了复制功能
- 隐藏了工具栏和信息栏
- 支持工作表切换，但禁用了添加新工作表的功能
- 禁用了添加行和返回顶部功能
- 隐藏了公式栏
- 必须引入所需的 CSS 文件，否则组件样式将无法正常显示
- 必须在默认插槽中设置一个 div 元素，其 id 要与 container 属性值一致，否则组件将无法正常渲染
- 容器元素必须设置宽度和高度，否则 Excel 表格将无法正常显示
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// 基本使用示例
export const Basic: Story = {
  args: {
    fileUrl: '',
    container: "luckysheet333",
  },
  render: (args) => html`
    <div style="width: 100%; height: 600px;">
      <rxhui-excel file-url=${args.fileUrl} container=${args.container}>
        <div id=${args.container} style="width: 100%; height: 100%;"></div>
      </rxhui-excel>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: '基本使用示例，通过 file-url 属性指定 Excel 文件地址，通过 container 属性指定容器 ID。',
      },
    },
  },
}; 