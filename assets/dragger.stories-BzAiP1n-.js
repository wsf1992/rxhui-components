import{i as z,a as C,x as E}from"./lit-element-KFNN4zkg.js";import{n as L,t as R}from"./property-CpGFVDLJ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(e,t){return(i,r,a)=>{const o=l=>{var y;return((y=l.renderRoot)==null?void 0:y.querySelector(e))??null};return X(i,r,{get(){return o(this)}})}}const O=z`
 .container {
    display: flex;
    height: 100%;
    width: 100%;
  }
  
  .container #leftPanel{
    width: 50%;
  }

  .container #rightPanel{
    display: block;
  }
  .container #divider{
    display: block;
  }

  .container.single-page #leftPanel{
    width: 100% !important;
  }

  .container.single-page #rightPanel{
    display: none;
  }

  .container.single-page #divider{
    display: none;
  }
  

  .panel {
    overflow: auto;
    box-sizing: border-box;
    height: 100%;
  }

  .left-panel {
    background-color: #f5f5f5;
    min-width: 100px;
     /* max-width: calc(100% - 100px); */
  }

  .right-panel {
    background-color: #e9e9e9;
    flex: 1;
  }

  .divider {
    width: 10px;
    background-color: #ddd;
    cursor: col-resize;
    position: relative;
    z-index: 10;
  }

  .divider:hover {
    background-color: #ccc;
  }

  .divider::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 2px;
    right: 2px;
    background-color: #aaa;
  }
`;var $=Object.defineProperty,T=Object.getOwnPropertyDescriptor,M=e=>{throw TypeError(e)},s=(e,t,i,r)=>{for(var a=r>1?void 0:r?T(t,i):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(a=(r?l(t,i,a):l(a))||a);return r&&a&&$(t,i,a),a},S=(e,t,i)=>t.has(e)||M("Cannot "+i),d=(e,t,i)=>(S(e,t,"read from private field"),i?i.call(e):t.get(e)),g=(e,t,i)=>t.has(e)?M("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),h=(e,t,i,r)=>(S(e,t,"write to private field"),t.set(e,i),i),u,v,f,m,P;let n=class extends C{constructor(){super(...arguments),this.isDragging=!1,this.startX=0,this.startWidth=0,this.minWidth=100,this.maxWidthPercent=.8,g(this,u,!1),g(this,v),g(this,f),g(this,m),g(this,P),this.getMaxWidth=()=>this.singlePage?this.container.clientWidth:this.container.clientWidth*this.maxWidthPercent,this._startDrag=e=>{this.isDragging=!0,this.startX=e.clientX,this.startWidth=this.leftPanel.offsetWidth,e.preventDefault(),document.body.style.cursor="col-resize",document.body.style.userSelect="none",document.addEventListener("mousemove",this.onDrag),document.addEventListener("mouseup",this.stopDrag)},this.onDrag=e=>{if(!this.isDragging)return;const i=e.clientX-this.startX;let r=this.startWidth+i;r=Math.max(this.minWidth,r),r=Math.min(this.getMaxWidth(),r),this.leftPanel.style.width=r+"px",e.preventDefault()},this.stopDrag=()=>{this.isDragging&&(this.isDragging=!1,document.body.style.cursor="",document.body.style.userSelect="",document.removeEventListener("mousemove",this.onDrag),document.removeEventListener("mouseup",this.stopDrag))},this._handleResize=()=>{this.leftPanel.offsetWidth>this.getMaxWidth()&&(this.leftPanel.style.width=this.getMaxWidth()+"px")}}get singlePage(){return d(this,u)}set singlePage(e){h(this,u,e)}get divider(){return d(this,v)}set divider(e){h(this,v,e)}get leftPanel(){return d(this,f)}set leftPanel(e){h(this,f,e)}get rightPanel(){return d(this,m)}set rightPanel(e){h(this,m,e)}get container(){return d(this,P)}set container(e){h(this,P,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleResize),setTimeout(()=>{this.divider.addEventListener("mousedown",this._startDrag)},1e3)}disconnectedCallback(){super.disconnectedCallback(),this.divider.removeEventListener("mousedown",this._startDrag),window.removeEventListener("resize",this._handleResize)}render(){return E`
            <div class="container ${this.singlePage?"single-page":""}">
                <div class="panel left-panel" id="leftPanel">
                <slot name="left"></slot>
                </div>
                <div class="divider" id="divider"></div>
                <div class="panel right-panel" id="rightPanel">
                <slot name="right"></slot>
                </div>
            </div>
            `}};u=new WeakMap;v=new WeakMap;f=new WeakMap;m=new WeakMap;P=new WeakMap;n.styles=[O];s([L({type:Boolean,attribute:"single-page"})],n.prototype,"singlePage",1);s([x("#divider")],n.prototype,"divider",1);s([x("#leftPanel")],n.prototype,"leftPanel",1);s([x("#rightPanel")],n.prototype,"rightPanel",1);s([x(".container")],n.prototype,"container",1);n=s([R("rxhui-dragger")],n);const B={title:"Components/RxhuiDragger",component:"rxhui-dragger",tags:["autodocs"],argTypes:{singlePage:{control:"boolean",description:"是否启用单页面模式",defaultValue:!1}},render:e=>E`
    <rxhui-dragger ?single-page=${e.singlePage}>
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
  `},c={args:{singlePage:!1}},p={args:{singlePage:!0}};var _,w,D;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    singlePage: false
  }
}`,...(D=(w=c.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var W,b,k;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    singlePage: true
  }
}`,...(k=(b=p.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const G=["Default","SinglePage"];export{c as Default,p as SinglePage,G as __namedExportsOrder,B as default};
