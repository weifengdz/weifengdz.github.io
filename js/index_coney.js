window.onload = function(){
	hoverFunc('.nav_tab:eq(0)', 'h_left','nav_0');
	hoverFunc('.nav_tab:eq(1)', 'h_1', '.nav_1');
	hoverFunc('.nav_tab:eq(2)', 'h_2', '.nav_2');
	hoverFunc('.nav_tab:eq(3)', 'h_3', '.nav_3');
	hoverFunc('.nav_tab:eq(4)', 'h_4', '.nav_4');
	hoverFunc('.nav_tab:eq(5)', 'h_right', '.nav_5');
	hoverFunc('.nav_a', 'nav_color');
}
function hoverFunc(select, css, div) {
	var Ispeed =200;
	$(select).hover(function() {
		$(this).addClass(css);
		if(div){
			if(!$(div).is(':animated')){
				$(div).slideDown(Ispeed);
			}
		}
	}, function() {
		$(this).removeClass(css);
		if(div){
			$(div).slideUp(Ispeed);
		}
	})
}
function setUrl(iUrl,iTarget) {
if(!iUrl||!iTarget) alert('\u672C\u4EE3\u7801\u753197\u7AD9\u957F\u7F51\u6536\u96C6\u5E76\u7F16\u8F91\u6574\u7406;')
else window.open(iUrl,iTarget);
}