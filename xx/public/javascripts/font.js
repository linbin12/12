function setRem() {
	// ui设计图的宽度
    var uiW = 750,
        // 视口宽度
        winW = document.documentElement.clientWidth;
    // 比率
    ratio = winW / uiW;
    // 设置字体大小
    document.documentElement.style.fontSize = ratio * 100 + "px";
}
// 调用方法
setRem();