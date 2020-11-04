$(() => {

    let type = "default";
    $.ajax({
        type: "get",
        url: "../../server/getPage.php",
        dataType: "json",
        success: function(response) {
            let count = response.count;
            let html = "";
            for (let i = 0; i < count; i++) {
                html += ` <a href="javascript:;">${i+1}</a>`;
            }
            $("#page").html(html);

            getDataWithPage(1, type);
        }
    });

    /* 页面点击事件 */
    $("#page").on("click", "a", function() {
        let index = $(this).index();
        getDataWithPage(index + 1, type);
    })

    /* 排序功能 */
    $(".btn-class").on("click", "span", function() {
        // console.log($(this).data("type"));
        type = $(this).data("type");
        getDataWithPage(1, type);
    })



    function getDataWithPage(index, type) {
        $.ajax({
            type: "get",
            url: "../../server/server.php",
            data: `page=${index}&type=${type}`,
            dataType: "json",
            success: function(response) {
                renderUI(response, index)
            }
        });
    }

    /* 数据渲染 */
    function renderUI(_data, index) {
        let html = _data.map((item) => {
            return `
              <li class="item">
                      <div class="item-box">
                          <img src=${item.src}>
                          <div class="price ">￥ ${item.price}</div>
                          <div class="title ">${item.title.substr(0,10)}</div>
                          <div class="dis ">${item.disCount}</div>
                          <div class="storeName ">${item.storeName}</div>
                      </div>
                      <div class="addCart">加入购物车</div>
                </li>`

        }).join("");
        $(".box-list").html(html);
        console.log(html);
        
        /* 处理页码的选中状态 */
        $("#page").children("a").eq(index - 1).addClass("active").siblings().removeClass("active");

    }
})