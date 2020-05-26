import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

/********************* 下面是移动端需要打开的 *********************/
// 设置rem
const resizeHandler = () => {
    let width = document.body.clientWidth || document.documentElement.clientWidth;
    let height = document.body.clientHeight || document.documentElement.clientHeight;
    document.documentElement.style.fontSize = Math.min(width, height) / 25 + "px";

    if (width < height && width > 600) {
        // 证明该设备为平板
        document.documentElement.style.fontSize = '28px';
    }
};
window.addEventListener("resize", resizeHandler);
resizeHandler();
