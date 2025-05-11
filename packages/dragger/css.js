import { css } from 'lit'

export const draggerStyles = css`
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
`