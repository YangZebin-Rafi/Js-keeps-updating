    class Manager {
        constructor(data) {
            this.data = data;
            this.root = null;
        }
        init() {
            this.renderUI();
            this.eventHandler();
        }
        renderUI() {
            this.root = document.createElement("div");
            this.root.classList.add("site-header");
            let titleTemp = this.data.titles.map((ele, index) => `<li class=${index==0?"current":""}>${ele}</li>
                `).join("");

            let titleHtml = `<div class="container-title">
                    <ul class="container-title-list">${titleTemp}</ul>
                </div>`;

            let bodyTemp = this.data.list.map((ele, index) => {
                let liTemp = ele.map(item => {
                    return ` 
                        <li>
                            <img src=${item.src} alt="">
                            <div class="name">${item.title}</div>
                            <div class="price">${item.price}</div>
                        </li>`;
                }).join("");

                return `<ul class="container-body-list ${index==0?" active":""}">
                            <div class="line"></div>${liTemp}
                        </ul>`
            }).join("");
            let bodyHtml = `<div class="container-body">${bodyTemp}</div>`;

            this.root.innerHTML = titleHtml + bodyHtml;
            document.body.appendChild(this.root);
        }
        eventHandler() {
            /* 给分类添加鼠标移入事件，当事件触发的时候设置当前标签的选中状态 + 切换UL */
            let _titles = this.root.querySelector(".container-title-list").children;
            let _ul = this.root.querySelectorAll(".container-body-list");

            for (let i = 0; i < _titles.length; i++) {
                _titles[i].onmouseenter = function() {
                    Array.from(_titles).forEach(ele => ele.classList.remove("current"));
                    this.classList.add("current");

                    Array.from(_ul).forEach(ele => ele.classList.remove("active"));
                    _ul[i].classList.add("active");
                }
            }
        }
    }