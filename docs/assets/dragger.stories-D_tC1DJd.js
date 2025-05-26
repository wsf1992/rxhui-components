import{f as z,u as O,i as L,a as R,x as M}from"./lit-element-KFNN4zkg.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=e=>(i,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(e,i)}):customElements.define(e,i)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:z},$=(e=T,i,t)=>{const{kind:r,metadata:n}=t;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(t.name,e),r==="accessor"){const{name:a}=t;return{set(o){const w=i.get.call(this);i.set.call(this,o),this.requestUpdate(a,w,e)},init(o){return o!==void 0&&this.C(a,void 0,e,o),o}}}if(r==="setter"){const{name:a}=t;return function(o){const w=this[a];i.call(this,o),this.requestUpdate(a,w,e)}}throw Error("Unsupported decorator location: "+r)};function q(e){return(i,t)=>typeof t=="object"?$(e,i,t):((r,n,s)=>{const a=n.hasOwnProperty(s);return n.constructor.createProperty(s,r),a?Object.getOwnPropertyDescriptor(n,s):void 0})(e,i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=(e,i,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(e,i,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(e,i){return(t,r,n)=>{const s=a=>{var o;return((o=a.renderRoot)==null?void 0:o.querySelector(e))??null};return U(t,r,{get(){return s(this)}})}}const j=L`
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
`;var A=Object.defineProperty,B=Object.getOwnPropertyDescriptor,C=e=>{throw TypeError(e)},d=(e,i,t,r)=>{for(var n=r>1?void 0:r?B(i,t):i,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(r?a(i,t,n):a(n))||n);return r&&n&&A(i,t,n),n},S=(e,i,t)=>i.has(e)||C("Cannot "+t),c=(e,i,t)=>(S(e,i,"read from private field"),t?t.call(e):i.get(e)),h=(e,i,t)=>i.has(e)?C("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(e):i.set(e,t),g=(e,i,t,r)=>(S(e,i,"write to private field"),i.set(e,t),t),f,v,m,P,y;let l=class extends R{constructor(){super(...arguments),this.isDragging=!1,this.startX=0,this.startWidth=0,this.minWidth=100,this.maxWidthPercent=.8,h(this,f,!1),h(this,v),h(this,m),h(this,P),h(this,y),this.getMaxWidth=()=>this.singlePage?this.container.clientWidth:this.container.clientWidth*this.maxWidthPercent,this._startDrag=e=>{this.isDragging=!0,this.startX=e.clientX,this.startWidth=this.leftPanel.offsetWidth,e.preventDefault(),document.body.style.cursor="col-resize",document.body.style.userSelect="none",document.addEventListener("mousemove",this.onDrag),document.addEventListener("mouseup",this.stopDrag)},this.onDrag=e=>{if(!this.isDragging)return;const t=e.clientX-this.startX;let r=this.startWidth+t;r=Math.max(this.minWidth,r),r=Math.min(this.getMaxWidth(),r),this.leftPanel.style.width=r+"px",e.preventDefault()},this.stopDrag=()=>{this.isDragging&&(this.isDragging=!1,document.body.style.cursor="",document.body.style.userSelect="",document.removeEventListener("mousemove",this.onDrag),document.removeEventListener("mouseup",this.stopDrag))},this._handleResize=()=>{this.leftPanel.offsetWidth>this.getMaxWidth()&&(this.leftPanel.style.width=this.getMaxWidth()+"px")}}get singlePage(){return c(this,f)}set singlePage(e){g(this,f,e)}get divider(){return c(this,v)}set divider(e){g(this,v,e)}get leftPanel(){return c(this,m)}set leftPanel(e){g(this,m,e)}get rightPanel(){return c(this,P)}set rightPanel(e){g(this,P,e)}get container(){return c(this,y)}set container(e){g(this,y,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleResize),setTimeout(()=>{this.divider.addEventListener("mousedown",this._startDrag)},1e3)}disconnectedCallback(){super.disconnectedCallback(),this.divider.removeEventListener("mousedown",this._startDrag),window.removeEventListener("resize",this._handleResize)}render(){return M`
            <div class="container ${this.singlePage?"single-page":""}">
                <div class="panel left-panel" id="leftPanel">
                <slot name="left"></slot>
                </div>
                <div class="divider" id="divider"></div>
                <div class="panel right-panel" id="rightPanel">
                <slot name="right"></slot>
                </div>
            </div>
            `}};f=new WeakMap;v=new WeakMap;m=new WeakMap;P=new WeakMap;y=new WeakMap;l.styles=[j];d([q({type:Boolean,attribute:"single-page"})],l.prototype,"singlePage",1);d([x("#divider")],l.prototype,"divider",1);d([x("#leftPanel")],l.prototype,"leftPanel",1);d([x("#rightPanel")],l.prototype,"rightPanel",1);d([x(".container")],l.prototype,"container",1);l=d([X("rxhui-dragger")],l);const I={title:"Components/RxhuiDragger",component:"rxhui-dragger",tags:["autodocs"],argTypes:{singlePage:{control:"boolean",description:"是否启用单页面模式",defaultValue:!1}},render:e=>M`
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
  `},p={args:{singlePage:!1}},u={args:{singlePage:!0}};var _,b,D;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    singlePage: false
  }
}`,...(D=(b=p.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var W,k,E;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    singlePage: true
  }
}`,...(E=(k=u.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const V=["Default","SinglePage"];export{p as Default,u as SinglePage,V as __namedExportsOrder,I as default};
