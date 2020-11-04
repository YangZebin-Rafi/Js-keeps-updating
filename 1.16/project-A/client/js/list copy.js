$(() => {

    /* 读取Cookie数据检查登录状态 */
    let username = Cookie.getItem("user_name");
    let userID = Cookie.getItem("user_id");
    if (username) {
        $(".login-status").text(`当前用户：${username}`);
        getCartData();
        /* 页面加载完就应该获取购物车中商品的数量信息 */
        getCartGoodsCount();
    }

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
              <li class="item" data-goods-id=${item.goods_id}>
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

        /* 处理页码的选中状态 */
        $("#page").children("a").eq(index - 1).addClass("active").siblings().removeClass("active");
    }


    /* 注销账户的功能 */
    $(".off").click(function() {
        console.log("+++");

        /* 清空用户名和密码 */
        username = "";
        userID = "";

        Cookie.removeItem("user_id");
        Cookie.removeItem("user_name");
        console.log("over");

        /* 重新刷新当前页面 */
        window.location.reload();
    });


    /* ************* */
    /* 点击购物车标签的时候显示 */
    $(".tab-cart-tip-warp-box").click(function() {
        $(".sn-sidebar-contents").toggleClass("sn-sidebar-contents-show");
        if ($(".sn-sidebar-contents").hasClass("sn-sidebar-contents-show")) {
            $(".sn-sidebar-contents").slideDown();
        } else {
            $(".sn-sidebar-contents").slideUp();
        }
    })

    /* ************* */
    /* 商品加入购物车事件 */
    $(".box-list").on("click", ".addCart", function() {
        /* 1.检查当前用户的登录状态 */
        if (!username || !userID) {
            window.location.href = "./login.html";
        } else {
            /* 2.如果用户当前已经登录，那么就发请求把当前商品加入到购物车中。 */
            /* cart.php?type=add&goods_id=xxx&&user_id=xxx */
            let currentGoodsID = $(this).parents(".item").data("goods-id");
            $.ajax({
                type: "get",
                url: "../../server/cart.php",
                data: `type=add&goods_id=${currentGoodsID}&user_id=${userID}`,
                dataType: "json",
                success: function(response) {
                    /* 加入成功之后：更新购物车数量 */
                    if (response.status == "success") {
                        alert("加入成功");
                        getCartGoodsCount();
                        getCartData();
                    }
                }
            });
        }
    })

    function getCartGoodsCount() {
        $.ajax({
            type: "get",
            url: "../../server/cart.php",
            data: `type=getCount&user_id=${userID}`,
            dataType: "json",
            success: function(response) {
                console.log('11111');

                /* 加入成功之后：更新购物车数量 */
                if (response.status == "success") {
                    console.log("+++", $(".J_cart_total_num")[0]);
                    $(".J_cart_total_num").text(response.count);
                }
            }
        });
    }

    function getCartData() {
        /* 接口：cart.php?type=get&user_id=xxx*/
        $.ajax({
            type: "get",
            url: "../../server/cart.php",
            data: `type=get&user_id=${userID}`,
            dataType: "json",
            success: function(data) {
                console.log(data);
                /* 整理前[{商品},{商品},{}] */
                /* 需要对数据进行处理(把数据按照店铺名称来整理) */
                /* 整理后[{店铺},{店铺},{}] */
                let storeNames = [];
                let storeData = [];
                data.forEach(ele => {
                    if (!storeNames.includes(ele.storeName)) storeNames.push(ele.storeName);
                });

                storeNames.forEach(ele => {
                    storeData.push({ "storeName": ele, "goods": [] })
                });

                data.forEach(ele => {
                    let currentStoreName = ele.storeName;
                    storeData.forEach(item => {
                        if (item.storeName == currentStoreName) {
                            item.goods.push(ele);
                        }
                    })
                });
                cartRenderUI(storeData);
            }
        });
    }
    /* 侧边栏购物车数据内容渲染 */
    function cartRenderUI(_data) {
        console.log(_data);

        /* 创建标签 */
        let html = _data.map(ele => {

            let tpl = ele.goods.map(ele => {
                return `
                <dd class="g-cart-td" data-item-id=${ele.goods_id}>
                    <div class="g-cart-item">
                        <div class="g-cart-close">
                            <a class="g-cart-del-handle" href="javascript:;" title="删除" name="public0_none_cblgwc_shancsp" exdata="100000076466987852944953"></a>
                        </div>
                        <div class="g-cart-checkbox l">
                            <input type="checkbox" class="sn-sidebar-minicart-one-goods" name="public0_none_cblgwc_danxuan">
                        </div>
                        <div class="g-cart-td-images l">
                            <a target="_blank" title=${ele.title} name="public0_none_cblgwc_shangptp">
                                <img src=${ele.src}>
                            </a>
                        </div>
                        <div class="g-cart-td-msg">
                            <p>
                                <a target="_blank" name="public0_none_cblgwc_shangpmc">${ele.title}</a>
                            </p>
                            <div class="clearfix">
                                <span class="price r">¥${ele.price}</span>
                                <div class="g-cart-cout l ">
                                    <a href="javascript:;" class="g-cart-cout-btnl g-cart-cout-btnl-disabled" name="public0_none_cblgwc_shulzj"></a>
                                    <input type="text" maxlength="2" value=${ele.num} class="g-cart-cout-input" name="public0_none_cblgwc_shulsr">
                                    <a href="javascript:;" class="g-cart-cout-btnr " name="public0_none_cblgwc_shuljs"></a>
                                </div>
                                <div class="g-cart-cout-text l">${ele.num}</div>
                            </div>
                        </div>
                    </div>
                </dd>`
            }).join("");
            return `
        <dl class="g-cart-store ">
                <dt class="g-cart-store-title clearfix">
                <div class="store-info clearfix">
                    <input class="sn-sidebar-minicart-sn-store" type="checkbox"
                        name="public0_none_cblgwc_quanx01" id="J_cart_checked_store_all">
                    <label for="J_cart_checked_store_all_01">${ele.storeName}</label>
                </div>
            </dt>
            ${tpl}
       </dl>
        `
        }).join("");

        /* 设置标签 */

        $("#snCartList").html(html);
    }

    /* 复选框点击事件的处理 */
    $("#snCartList").on("click", ".sn-sidebar-minicart-sn-store", function() {
        /* 设置让该店铺下面的所有商品的勾选状态同步 */
        let all = $(this).parents(".g-cart-store-title").nextAll(".g-cart-td").find("input[type='checkbox']");
        console.log($(this).is(":checked"));
        console.log(all[0]);

        all.prop("checked", $(this).is(":checked"));
        computedTotal();
    })

    /* 全选标签的点击事件处理 */
    $("#J_cart_checked_all").on("click", function() {
        $("#snCartList").find("input[type='checkbox']").prop("checked", $(this).is(":checked"));
        computedTotal();
    })

    /* 每个复选框的点击事件 */
    $("#snCartList").on("click", ".g-cart-td", function() {
        /* 当前复选框的选中状态发生变化的时候，对应商店复选框的状态也应该调整(如果该店铺下面所有商品都全部勾选的时候那么当前店铺应该被动勾选) */
        let arr = $(this).parents(".g-cart-store").find(".g-cart-td").toArray();
        console.log(arr);

        let flag = arr.every(function(ele) {
            return $(ele).find("input[type='checkbox']").prop("checked") == true;
        })

        $(this).parents(".g-cart-store").find(".sn-sidebar-minicart-sn-store").prop("checked", flag);

        computedTotal();
    });

    /* 删除标签的事件处理 */
    /* 逻辑：通过事件委托的方式给当前标签添加点击事件，当点击该标签的时候获取当前商品的id并发送网络请求给服务器同步，请求成功后重新渲染 */
    // g-cart-del-handle
    $("#snCartList").on("click", ".g-cart-del-handle", function() {
        let currentGoodsID = $(this).parents(".g-cart-td").data("item-id");
        $.ajax({
            type: "get",
            url: "../../server/cart.php",
            data: `type=delete&goods_id=${currentGoodsID}&user_id=${userID}`,
            dataType: "json",
            success: function(response) {
                if (response.status == "success") {
                    /* 重新加载和渲染这部分 */
                    getCartData();
                }
            }
        });
    });


    function computedTotal() {
        let totalPrice = 0;
        let totalCount = 0;

        $(".g-cart-td").each(function() {
            let currentNum = $(this).find(".g-cart-cout-text").text() * 1;
            let currentPrice = $(this).find(".price").text().slice(1) * 1;
            console.log(currentNum, currentPrice);

            let flag = $(this).find("input[type='checkbox']").prop("checked");
            if (flag) {
                totalPrice += currentNum * currentPrice;
                totalCount += currentNum;
            }
        });

        $("#totalPrice").text(totalPrice + "元");
        $("#totalCount").text(totalCount);
    }
})