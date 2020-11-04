    var Manager = function(data) {
        this.data = data;
        this.root = null;
    }

    Manager.prototype = {
        constructor: Manager,
        init: function() {
            this.renderUI();
            this.addClickEventHandler();
            this.addMouseenterEventHandler();
        },
        renderUI: function() {
            this.root = document.createElement("div");
            this.root.className = "box";
            var tpl = this.data.types.map(function(item, index) {
                return `<li class=${index==0 ? "active":"" }>${item}</li>`
            }).join("");
            var htmlA = `
                    <h1>${this.data.title}</h1>
                    <div class="tab">
                      <ul class="tab-list">${tpl}</ul>
                    </div>`;

            var htmlB = this.data.data.map(function(item, index) {
                var tpl = item.map(function(ele, i) {
                    return `
                            <li class=${i==0?"current":""}>
                              <p><span>${ele.index + 1}</span>${ele.name}</p>
                              <div class="content">
                                <img src=${ele.src}>
                                <p>${ele.detail}</p>
                              </div>
                            </li>
                            `
                }).join("");
                return ` <ul class="list ${index == 0 ? " cur":""}">${tpl}</ul>`;
            }).join("");

            this.root.innerHTML = htmlA + htmlB;
            document.body.appendChild(this.root);
        },
        addClickEventHandler() {
            /* 点击切换：给标签添加点击事件，单击事件发送的时候设置当前标签的选中状态(排他)，设置列表切换 */
            var tabs = this.root.querySelector(".tab-list").children;
            var lists = this.root.querySelectorAll(".list");
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].index = i;
                tabs[i].onclick = function() {
                    for (var k = 0; k < tabs.length; k++) {
                        tabs[k].classList.remove("active");
                        lists[k].classList.remove("cur");
                    }
                    this.classList.add("active");
                    lists[this.index].classList.add("cur");
                }
            }
        },
        addMouseenterEventHandler() {
            /* 思路：给列表中所有的li标签都添加鼠标移入事件，当鼠标移入的时候设置状态 */
            var lists = this.root.querySelectorAll(".list");
            var lis = [];
            for (var i = 0; i < lists.length; i++) {
                lis = lis.concat(Array.from(lists[i].children));
            }

            /* 设置样式(排他) */
            for (var k = 0; k < lis.length; k++) {
                lis[k].onmouseenter = function() {
                    for (var j = 0; j < lis.length; j++) {
                        lis[j].classList.remove("current");
                    }
                    this.classList.add("current");
                }
            }
        }
    }