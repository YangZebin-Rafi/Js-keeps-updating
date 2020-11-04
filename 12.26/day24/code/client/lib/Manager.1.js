class Manager {
    constructor(data) {
        this.data = data;
        this.root = null;
        this.sliderBoxItemWidth = 700;
        this.index = 0;
        this.timer = null;
    }
    init() {
        this.renderUI();
        this.setEleStyle();
        this.autoPlayer();
        this.eventMouseHandler();
    }
    renderUI() {
        this.root = document.createElement("div");
        this.root.classList.add("slider");
        let tpl1 = this.data.map((ele, index) => `<li class="slider-box-item">${index + 1}</li>`).join("");
        let html1 = `<ul class="slider-box">${tpl1}</ul>`;
        let html2 = `<div class="slider-control"><span class="prev">&lt;</span> <span class="next">&gt;</span></div>`;
        let tpl2 = this.data.map((ele, index) => `<li class="slider-nav-item">${index + 1}</li>`).join("");
        let html3 = `<ol class="slider-nav">${tpl2}</ol>`;
        this.root.innerHTML = html1 + html2 + html3;
        document.body.appendChild(this.root);
    }
    getRandomColor() {
        let r = parseInt(Math.random() * 256);
        let g = parseInt(Math.random() * 256);
        let b = parseInt(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }
    setEleStyle() {
        let lis = this.root.querySelectorAll(".slider-box-item");
        Array.from(lis).forEach(ele => ele.style.background = this.getRandomColor());
    }
    autoPlayer() {
        /* 核心：定时器 + 设置ul标签的样式(left) */
        let ul = this.root.querySelector(".slider-box");
        this.timer = setInterval(() => {
            this.index++;
            if (this.index == 6) {
                this.index = 0;
            }
            ul.style.left = -this.index * this.sliderBoxItemWidth + "px";
        }, 2000);
    }
    eventMouseHandler() {
        /* 思路：获取标签，给标签添加鼠标移入事件，当鼠标移入的时候停止定时器，当鼠标离开的时候要重新恢复 */
        this.root.onmouseenter = () => clearInterval(this.timer);
        this.root.onmouseleave = () => this.autoPlayer();
    }
}