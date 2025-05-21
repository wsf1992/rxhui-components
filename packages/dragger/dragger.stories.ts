import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';

const meta = {
  title: 'Components/RxhuiDragger',
  component: 'rxhui-dragger',
  tags: ['autodocs'],
  argTypes: {
    singlePage: {
      control: 'boolean',
      description: '是否启用单页面模式',
      defaultValue: false,
    },
  },
  render: (args) => html`
    <rxhui-dragger ?single-page=${args.singlePage}>
      <div slot="left" style="padding: 20px;">
        <h2>左侧面板</h2>
        <p>这是左侧面板的内容</p>
        <p>你可以通过拖拽中间的分隔线来调整左右面板的宽度</p>
      </div>
      <div slot="right" style="padding: 20px;">
        <h2>右侧面板</h2>
        <p>这是右侧面板的内容</p>
        <p>右侧面板会自动填充剩余空间</p>
      </div>
    </rxhui-dragger>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    singlePage: false,
  },
};

export const SinglePage: Story = {
  args: {
    singlePage: true,
  },
}; 