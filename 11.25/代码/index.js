//当点击div的标签的时候，设置标签的文字为蓝色
// 001-先通过JavaScript代码来获取标签
// document.getElementsByTagName("div");  获取页面中所有的div标签
var oDiv = document.getElementsByTagName("div")[0];

// 002-给标签添加点击事件
oDiv.onclick = function() {
    oDiv.style.color = "blue";
}