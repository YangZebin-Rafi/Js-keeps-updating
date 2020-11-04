class Slider {
    constructor(data) {
        this.data = data;
        this.root = null;
        this.index = 0;
    }
    init() {
        this.renderUI();
        this.clickHandler();
    }
    renderUI() {
        let tmp = this.data.map(ele => {
            return `<li class="slider-list-item">
                        <img src=${ele.src}>
                        <h3 class="title">${ele.title}</h3>
                        <p class="desc">${ele.desc}</p>
                        <p class="price">
                            <span>${ele.priceA}</span>元
                            <del>${ele.priceB}</del>
                        </p>
                    </li>`
        }).join("");

        let html = `
            <div class="slider">
                <div class="swiper-controls"><span class="prev"> &lt;</span> <span class="next">&gt;</span></div>
                <ul class="slider-list" style="left: 0px;">${tmp}</ul>
            </div>`;
        this.root = $(html);
        $(".right").append(this.root);
    }
    clickHandler() {
        this.root.find(".next").click(() => {
            this.index++;
            console.log(this.index);
            if (this.index >= 5) {
                this.index = 4;
                return;
            }
            // $(".slider-list").css("left", -(this.index) * 250 * 4)
            $(".slider-list").animate({ "left": -(this.index) * 250 * 4 }, 1000)
        })

        this.root.find(".prev").click(() => {
            this.index--;
            if (this.index <= -1) {
                this.index = 0;
                return;
            }
            // $(".slider-list").css("left", -(this.index) * 250 * 4)
            $(".slider-list").animate({ "left": -(this.index) * 250 * 4 }, 1000)
        })
    }
}