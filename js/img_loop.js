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
