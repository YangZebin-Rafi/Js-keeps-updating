class Manager {
    constructor(data) {
        this.data = data;
        this.root = null;
    }
    init() {
        this.renderUI();
        this.mouseenterHandler();
    }
    renderUI() {
        let tpl = this.data.types.map((ele, index) => `<li class=${index==0?"active":""}>${ele}</li>`).join("");
        let tpl2 = this.data.data.map((ele, index) => {
            let li = ele.map(ele => {
                return `<li class="list-item">
                           <img src=${ele.src}>
                           <h3 class="title">${ele.title}</h3>
                           <p class="desc">精选原生竹浆，健康环保</p>
                           <p class="price">
                               <span>${ele.price}</span>
                           </p>
                     </li>`;
            }).join("");

            return `<ul class="list ${index == 0 ? "current":""}">${li}</ul>`;
        }).join("");

        let html = `
                <div class="box">
                    <div class="box-header">
                        <h2 class="title">${this.data.title}</h2>
                        <ul class="box-header-list">
                        ${tpl}
                        </ul>
                    </div>
                    <div class="box-content">
                        <div class="left">
                            <li><img src=${this.data.srcA} alt=""></li>
                            <li><img src=${this.data.srcB} alt=""></li>
                        </div>
                        <div class="right">
                            ${tpl2}
                        </div>
                    </div>
                </div>
        `
        this.root = $(html);
        $("body").append(this.root);
    }
    mouseenterHandler() {
        let self = this;
        this.root.find(".box-header-list li").mouseenter(function() {
            $(this).addClass("active").siblings().removeClass("active");
            let index = $(this).index();

            self.root.find(".list").eq(index).addClass("current").siblings().removeClass("current");
        })
    }
}