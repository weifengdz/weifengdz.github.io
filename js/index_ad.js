$(function () {
    var sWidth = $("#focus_box").width(); //获取焦点图的宽度（显示面积）
    var len = $("#focus_box ul li").length; //获取焦点图个数
    var index_ad = 0;
    var picTimer_ad;

    //以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
    var btn = "<div class='btnBg'></div><div class='btn'>";
    for (var i = 0; i < len; i++) {
        btn += "<span></span>";
    }
    btn += "</div><div class='preNext pre'></div><div class='preNext next-a'></div>";
    $("#focus_box").append(btn);
    $("#focus_box .btnBg").css("opacity", 0.5);

    //为小按钮添加鼠标滑入事件，以显示相应的内容
    $("#focus_box .btn span").css("opacity", 0.4).mouseover(function () {
        index_ad = $("#focus_box .btn span").index(this);
        showPics(index_ad);
    }).eq(0).trigger("mouseover");

    //上一页、下一页按钮透明度处理
    $("#focus_box .preNext").css("opacity", 0.2).hover(function () {
        $(this).stop(true, false).animate({ "opacity": "0.5" }, 300);
    }, function () {
        $(this).stop(true, false).animate({ "opacity": "0.2" }, 300);
    });

    //上一页按钮
    $("#focus_box .pre").click(function () {
        index_ad -= 1;
        if (index_ad == -1) { index_ad = len - 1; }
        showPics(index_ad);
    });

    //下一页按钮
    $("#focus_box .next-a").click(function () {
        index_ad += 1;
        if (index_ad == len) { index_ad = 0; }
        showPics(index_ad);
    });

    //本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
    $("#focus_box ul").css("width", sWidth * (len));

    //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
    $("#focus_box").hover(function () {
        clearInterval(picTimer_ad);
    }, function () {
        picTimer_ad = setInterval(function () {
            showPics(index_ad);
            index_ad++;
            if (index_ad == len) { index_ad = 0; }
        }, 4000); //此4000代表自动播放的间隔，单位：毫秒
    }).trigger("mouseleave");

    //显示图片函数，根据接收的index值显示相应的内容
    function showPics(index) { //普通切换
        var nowLeft = -index * sWidth; //根据index值计算ul元素的left值
        $("#focus_box ul").stop(true, false).animate({ "left": nowLeft }, 300); //通过animate()调整ul元素滚动到计算出的position
        //$("#focus_box .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
        $("#focus_box .btn span").stop(true, false).animate({ "opacity": "0.4" }, 300).eq(index).stop(true, false).animate({ "opacity": "1" }, 300); //为当前的按钮切换到选中的效果
    }

});
