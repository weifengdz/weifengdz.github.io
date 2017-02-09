$(function(){
 $("img.lazy").lazyload({
threshold : 100, //提前加载
skip_invisible:false, //加载不可见图像
effect : "fadeIn" //自定义显示效果
 });
});
