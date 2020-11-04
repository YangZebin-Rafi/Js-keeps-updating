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

            var html = `
                 <ul>
                     <li data-index="0" class="">关注</li>
                     <li data-index="1" class="">新闻</li>
                     <li data-index="2" class="">本地</li>
                     <li data-index="3" class="active">体育</li>
                 </ul>
                 <div class="tab-content">关注+</div>
                 <div class="tab-content">新闻+</div>
                 <div class="tab-content">本地+</div>
                 <div class="tab-content current">体育+</div>
                `;
            this.root.innerHTML = html;
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
                var index = target.dataset.index;

                /* 003-设置当前标签为选中状态 */
                for (var i = 0, len = lis.length; i < len; i++) {
                    lis[i].classList.remove("active");
                    items[i].classList.remove("current");
                }
                target.classList.add("active"); /* 004-切换显示对应的内容 */
                items[index].classList.add("current");
            }
        }
    };