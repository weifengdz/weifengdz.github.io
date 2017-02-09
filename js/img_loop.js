//专题轮播图JS
var t = n = 0, count;
$(function(){
count=$("#lb_banner_list a").length;
$("#lb_banner_list a:not(:first-child)").hide();
$("#lb_banner_info").text($("#lb_banner_list a:first-child").find("img").attr('alt'));
$("#lb_banner_info").click(function(){window.open($("#lb_banner_list a:first-child").attr('href'), "_blank")});
$("#lb_banner li").click(function() {
var i = $(this).text() - 1;//获取Li元素内的值，即1，2，3，4
n = i;
if (i >= count) return;
$("#lb_banner_info").text($("#lb_banner_list a").eq(i).find("img").attr('alt'));
$("#lb_banner_info").unbind().click(function(){window.open($("#lb_banner_list a").eq(i).attr('href'), "_blank")})
$("#lb_banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
document.getElementById("lb_banner").style.background="";
$(this).toggleClass("on");
$(this).siblings().removeAttr("class");
});
t = setInterval("showAuto()", 4000);
$("#lb_banner").hover(function(){ clearInterval(t)}, function(){t = setInterval("showAuto()", 4000);});
})

function showAuto()
{
n = n >=(count - 1) ? 0 : ++n;
$("#lb_banner li").eq(n).trigger('click');
}
</script>
<script type="text/javascript">
$(function(){
 $("img.lazy").lazyload({
threshold : 100, //提前加载
skip_invisible:false, //加载不可见图像
effect : "fadeIn" //自定义显示效果
 });
});
</script>
<script type="text/javascript" language="javascript">
    function Tb2(d, t, p, c) {
        for (var i = 1; i <= t; i++) {
            $_2(p + '_t_' + i).className = c + '_2';
            Dh(p + '_c_' + i);
            if (d == i) {
                $_2(p + '_t_' + i).className = c + '_1';
                Ds(p + '_c_' + i);
            }
        }
    }
    function SetHome(obj) {
        var url = window.location.href;
        try { obj.style.behavior = 'url(#default#homepage)'; obj.setHomePage(url); }
        catch (e) {
            if (window.netscape) {
                try { netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); }
                catch (e) { alert("此操作被浏览器拒绝！您可以换成IE浏览器再设置为首页"); }
                var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                prefs.setCharPref('browser.startup.homepage', url);
            }
        }
    }
    //search setting
    function selecttab(obj, moudleid) {
        for (var i = 1; i <= 5; i++)
            $_2("select_" + i).className = "";
        if (obj != null)
            obj.className = "select_a";
        $_2("destoon_moduleid").value = moudleid;
        searchid = moudleid;
        setKW();
    }
    //search model
    function setSearchType(obj, moudleid) {
        Dh("other");
        for (var i = 1; i < 5; i++)
            $_2("select_" + i).className = "";//其他tab
        $_2("select_5").innerHTML = obj.innerHTML;
        $_2("select_5").className = "more_select_ceren";//当前tag
        $_2("destoon_moduleid").value = moudleid;
        var aother = document.getElementsByName("aother");
        for (var i = 0; i < aother.length; i++)
            aother[i].className = "";
        obj.className = "more_ceren";//当前栏目
        searchid = moudleid;
        setKW();
    }
    //tese
    $(function () {
        $('#slides').slides({
            preload: true,
            preloadImage: 'images/loading.gif',
            play: 100000000,
            pause: 500,
            hoverPause: true,
            animationStart: function () {
                $('.caption').animate({
                    bottom: -35
                }, 100);
            },
            animationComplete: function (current) { }
        });
    });
    var tese_old;
    function Tb3(tab) {
        if (tab == 2 && tese_old != 2) {
            $('.next').click()
            $("ts_2").style.color = "red";
            $("ts_1").style.color = "black";
            tese_old = 2
        } else if (tab == 1 && tese_old != 1) {
            $('.prev').click();
            $("ts_1").style.color = "red";
            $("ts_2").style.color = "black";
            tese_old = 1
        }
    }
    function startTS() {
        $('.next').click()
    }
    function tsOver() {
        clearTimeout(ts_timer);
    }
    function tsOut() {
        ts_timer = setInterval("startTS()", 8000);
    }
    tsOut();
</script>
<!--广告flash随机-->
    <script type="text/javascript">
        jQuery(document).ready(function () {
            ad_switc.Init(".ads");
        });
        var ad_switc = {
            s:10000,
            Init: function (sls) {
                var ads = jQuery(sls);
                if (ads) {
                    for (var i = 0; i < ads.length; i++) {
                        var adli = ads[i].children; childcount = adli.length, num = ad_switc.GetRandom(i, childcount), currObj = jQuery(adli[num]);
                        currObj.show();
                        ad_switc.Switching(adli, childcount);
                    }
                }
            },
            Switching: function ($obj, len) {
                var c = 0;
                if (len > 0) {
                    setInterval(function () {
                        if (len == c)
                            c = 1;
                        else
                            c += 1;
                        jQuery($obj).hide().eq(c-1).show();
                    }, ad_switc.s);
                }
            },
            GetRandom: function (n, l) {
                var random = 0;
                var lastrandom = get_cookie("random" + n);
                if (lastrandom) {
                    random = parseInt(lastrandom);
                    if (random < (l || n) - 1)
                        random = random + 1;
                    else
                        random = 0;
                }
                else {
                    random = Math.floor(Math.random() * n);
                }
                set_cookie("random" + n, random, 1);
                return random;
            }
        };
