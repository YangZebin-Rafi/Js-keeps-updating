$(() => {

    /* 当页面加载完我们就应该检查用户的登录状态 */
    let user_name = Cookie.getItem("user_name");
    let user_id = Cookie.getItem("user_id");
    if (user_name && user_id) {
        $(".login-status").text("当前用户: " + user_name);
        getCartGoodsNumber();
        getCartData();
    }

    /* 注销的功能 */
    $(".off").click(function() {
        /* 删除本地存储的账户信息 */
        Cookie.removeItem("user_name");
        Cookie.removeItem("user_id");

        /* 重新刷新整个页面 */
        window.location.reload();

    })

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
    /* 逻辑：给标签添加事件，点击的时候先检查登录的状态，如果当前用户没有登录那么就跳转到登录页面去登录，如果已经登录了那么就直接加入 */
    $(".box-list").on("click", ".addCart", function() {
        /* 1.没有登录 */

        if (!user_name || !user_id) {
            window.location.href = "./login.html";
        }
        /* 2.已经登录 */
        else {
            let goods_id = $(this).parents(".item").data("goods-id");
            $.ajax({
                type: "get",
                url: "../../server/cart.php",
                data: `type=add&goods_id=${goods_id}&user_id=${user_id}`,
                dataType: "json",
                success: function(response) {
                    if (response.status == "success") {
                        alert("加入成功");
                        getCartData();
                        getCartGoodsNumber();
                    }
                }
            });
        }

    })


    /* *********** */
    /* 封装函数获取购物车中商品的数量 */
    function getCartGoodsNumber() {
        $.ajax({
            type: "get",
            url: "../../server/cart.php",
            data: `type=getCount&user_id=${user_id}`,
            dataType: "json",
            success: function(response) {
                if (response.status == "success") {
                    $(".J_cart_total_num").text(response.count)
                }
            }
        });
    }

    /* ********** */
    /* 封装渲染购物车的函数 */
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

    /* ************ */
    /* 封装函数来获取购物车中所有的商品信息 */
    function getCartData() {
        console.log("+++++");

        /* 1.发请求获取最新的数据 */
        /* 2.请求成功了，渲染UI */
        /* 接口：cart.php?type=get&user_id=xxx*/
        $.ajax({
            type: "get",
            url: "../../server/cart.php",
            data: `type=get&user_id=${user_id}`,
            dataType: "json",
            success: function(data) {
                console.log(1, data);
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
                console.log(2, storeData);
                cartRenderUI(storeData);
            }
        });
    }

    /* 实现删除功能 */
    /* 1.获取goods_id */
    /* 2.发送网络请求 */
    /* 3.请求成功重新刷新购物车 */
    // g-cart-del-handle
    $("#snCartList").on("click", ".g-cart-del-handle", function() {
        console.log("22222");

        let goods_id = $(this).parents(".g-cart-td").data("item-id");
        $.ajax({
            type: "get",
            url: "../../server/cart.php",
            data: `type=delete&user_id=${user_id}&goods_id=${goods_id}`,
            dataType: "json",
            success: function(data) {
                if (data.status == "success") {
                    getCartData();
                    getCartGoodsNumber();
                }

            }
        });
    })

    /* 更新数量 */
    $("#snCartList").on("click", ".g-cart-cout-btnl", function() {
        console.log("left");
        /* 先获取输入框中的数据+1 */
        let num = $(this).next().prop("value") * 1;
        if (num == 1) {
            $(this).addClass("g-cart-cout-btnl-disabled");
            return;
        }
        /* 发送网络请求同步数据库 */
        updateData(this, num - 1);
    })


    $("#snCartList").on("click", ".g-cart-cout-btnr", function() {
        console.log();
        /* 先获取输入框中的数据+1 */
        let num = $(this).prev().prop("value") * 1;
        // $(this).prev().val(num + 1);

        /* 发送网络请求同步数据库 */
        updateData(this, num + 1);

    })

    function updateData(ele, count) {
        let goods_id = $(ele).parents(".g-cart-td").data("item-id");
        $.ajax({
            type: "get",
            url: "../../server/cart.php",
            data: `type=update&user_id=${user_id}&goods_id=${goods_id}&count=${count}`,
            dataType: "json",
            success: function(data) {
                if (data.status == "success") {
                    $(ele).parent().children("input").val(count);
                    $(ele).parent().next().text(count);
                    getCartGoodsNumber();
                    computedTotalCountAndTotalPrice();
                }
            }
        });
    }


    /* ************* */
    /* 商店勾选：当商店复选框状态变化的时候，该店铺下面所有的商品状态同步。 */
    $("#snCartList").on("click", ".sn-sidebar-minicart-sn-store", function() {
        // console.log(this);
        let all = $(this).parents(".g-cart-store").find(".g-cart-td").find("input[type='checkbox']");
        let isCheck = $(this).is(":checked");

        all.prop("checked", isCheck);
        computedTotalCountAndTotalPrice();

    })

    /* 全选|反选 */
    $("#J_cart_checked_all").click(function() {
        /* 设置让购物车中所有的复选框状态跟当前标签的状态吧保持一致。 */
        let isCheck = $(this).is(":checked");
        $("#snCartList").find("input[type='checkbox']").prop("checked", isCheck);
        computedTotalCountAndTotalPrice();
    })

    /* 被动技能 */
    /* 逻辑：当某个具体的商品勾选状态改变的时候，应该检查当前店铺中是否所有的商品都有被勾选 */
    /* 如果成立，那么就把把店铺勾上，否则就去掉 */
    // sn-sidebar-minicart-one-goods
    $("#snCartList").on("click", ".sn-sidebar-minicart-one-goods", function() {
        // 检查当前店铺中是否所有的商品都有被勾选
        let all = $(this).parents(".g-cart-store").find(".sn-sidebar-minicart-one-goods");

        /* 如果每个都被选中，那么返回的就是true */
        let flag = all.toArray().every(function(ele) {
            return $(ele).is(":checked") == true;
        });

        // console.log(all.length, flag);
        $(this).parents(".g-cart-store").find(".sn-sidebar-minicart-sn-store").prop("checked", flag);
        computedTotalCountAndTotalPrice();
    });


    /* 封装提供一个函数(计算总数量和总价格) */
    /* 逻辑：先获取所有商品标签，遍历这些标签，每循环一次就检查当前标签是否被勾选如果被勾选那么就累加数量和价格 */
    function computedTotalCountAndTotalPrice() {
        let totalCount = 0;
        let totalPrice = 0;
        $("#snCartList").find(".g-cart-td").each(function() {
            let isCheck = $(this).find("input[type='checkbox']").is(":checked");
            if (isCheck) {
                let currentNum = $(this).find(".g-cart-cout-text").text() * 1;
                let currentPrice = $(this).find(".price").text().slice(1) * 1;

                totalCount += currentNum;
                totalPrice += currentNum * currentPrice;
            }
        })
        $("#totalCount").text(totalCount);
        $("#totalPrice").text(totalPrice + "元");
    }

})