# RXHUI Components

一个现代化的 Web Components 组件库，提供了一系列高质量、可复用的 UI 组件。基于 Web Components 标准开发，可以在任何框架中使用。

## 📚 文档

访问我们的 [在线文档和组件展示](https://wsf1992.github.io/rxhui-components/) 来了解更多详情。

## ✨ 特性

- 🎨 现代化的设计风格
- 📦 框架无关的 Web Components
- 🛡 使用 TypeScript 开发，提供完整的类型定义
- 📱 支持响应式设计
- 🎯 高度可定制化的主题
- 🔄 与任何前端框架兼容

## 🔨 安装

```bash
npm install rxhui-web-components
# 或者
yarn add rxhui-web-components
```

## 🚀 快速开始

```html
<!-- 使用 ES Module 方式引入 -->
<script type="module">
  import { RxhuiDragger } from 'rxhui-web-components/dragger';
  // 或者引入特定组件
  import 'rxhui-web-components/excel';
</script>

<!-- 在 HTML 中使用组件 -->
<rxhui-dragger>
  <div slot="left">
    <!-- 左侧面板内容 -->
  </div>
  <div slot="right">
    <!-- 右侧面板内容 -->
  </div>
</rxhui-dragger>

<!-- Excel 组件示例 -->
<rxhui-excel file-url="your-excel-file-url"></rxhui-excel>
```

## 🔗 链接

- [组件文档](https://wsf1992.github.io/rxhui-components/)
- [更新日志](./CHANGELOG.md)
- [贡献指南](./CONTRIBUTING.md)

## �� 许可证

MIT License
