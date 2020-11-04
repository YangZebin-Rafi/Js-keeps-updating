    /* 001-提供构造函数 */
    function Manager(data) {
        this.root = null;
        this.data = data;
    }

    /* 002-设置原型对象 */
    Manager.prototype = {
        init: function() {
            /* 核心业务逻辑 */
            this.renderUI()
            this.insertView()
            this.addEventHandler()
        },
        renderUI: function() {
            this.root = document.createElement("div");
            this.root.className = "tabItem";

            /* 
           <li data-index="0" class="active">关注</li>
           <li data-index="1" class="">新闻</li>
           <li data-index="2" class="">本地</li>
           <li data-index="3" class="">体育</li>
            */
            var liTpl = this.data.tabTitles.map(function(item, index) {
                return ` <li data-index=${index} class=${index == 0 ? "active":""}>${item}</li>`
            }).join("");

            /* 
            <div class="tab-content current">关注+</div>
            <div class="tab-content">新闻+</div>
            <div class="tab-content">本地+</div>
            <div class="tab-content">体育+</div>
            */
            var divTpl = this.data.tabContents.map(function(item, index) {
                return `<div class='tab-content ${index == 0 ? "current":""}'>${item}</div>`
            }).join("");

            this.root.innerHTML = `<ul>${liTpl}</ul>${divTpl}`;
            /* 设置颜色 */
            var lis = this.root.querySelectorAll("li");
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.border = `1px solid ${this.data.color}`;
            }

        },
        insertView: function() {
            document.body.appendChild(this.root);
        },
        addEventHandler: function() {
            var ul = this.root.querySelector("ul");
            var items = this.root.querySelectorAll(".tab-content");
            var lis = ul.children;

            /* 002-给指定添加点击事件 */
            ul.onclick = function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName == "LI") {
                    var index = target.dataset.index;

                    /* 003-设置当前标签为选中状态 */
                    for (var i = 0, len = lis.length; i < len; i++) {
                        lis[i].classList.remove("active");
                        items[i].classList.remove("current");
                    }

                    /* 004-切换显示对应的内容 */
                    target.classList.add("active");
                    items[index].classList.add("current");
                }
            }
        }
    };