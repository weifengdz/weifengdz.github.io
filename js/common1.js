//网站通用JS
//创建于2015-10-8  by 十二少
//=========================================//
$(function(){

	
	
//============检测网站通用头部用户登录状态======================	
if ($("#destoon_member").length > 0){ 
	$.ajax( {  
				url:'http://www.tpy888.cn/api/ajax/user.php',// 跳转到 action  
				type:'post',  
				cache:false,  
				dataType:'text',  
				success:function(data) {  //返回数据
					$("#destoon_member").html(data);
				 },  
				error : function() {  
					//$("#destoon_member").html("服务器繁忙，加载出错！");  
				 } 		
	});
} 


//============通用头部JS====================================
$(".rt_box_b").hover(function(){
      var index = $(".tjg").index(this);
      $(".tjg").eq(index).show();
      $(".ewm_box").eq(index).show();
   },function(){
    $(".tjg").hide();
    $(".ewm_box").hide();
});

//微信号不存在时，长度变小
if ($(".rt_box_e").length == 0){ 
	$(".top_right").css("width","455px");
}

$(".rt_box_e").hover(function(){
      var index = $(".tjg_e").index(this);
      $(".tjg_e").eq(index).show();
      $(".rt_box_e .ewm_box").eq(index).show();
   },function(){
    $(".tjg_e").hide();
    $(".rt_box_e .ewm_box").hide();
});

$(".rt_box_c").hover(function(){
      var index = $("tjg_a").index(this);
      $(".tjg_a").eq(index).show();
      $(".ewm_box_a").eq(index).show();
   },function(){
    $(".tjg_a").hide();
    $(".ewm_box_a").hide();
});

$(".rt_box_d").hover(function(){
      var index = $("tjg_b").index(this);
      $(".tjg_b").eq(index).show();
      $(".ewm_box_b").eq(index).show();
   },function(){
    $(".tjg_b").hide();
    $(".ewm_box_b").hide();
});

//============通用头部搜索==========================
if ($("#common_search_box").length > 0){
	
	//alert("a");
	//移动显示选项菜单效果
	$("#common_search_box #search_where").hover(
		function(){$("#common_search_box #search_box_menu").css("display","block");},
		function(){$("#common_search_box #search_box_menu").css("display","none");}
	);
	$("#common_search_box #search_box_menu").hover(
		function(){$("#common_search_box #search_box_menu").css("display","block");},
		function(){$("#common_search_box #search_box_menu").css("display","none");}
	);
	
	//点击搜索选项菜单效果
	$("#common_search_box #search_box_menu li").click(function(){
		$("#common_search_box #search_where").text($(this).text());
		$("#common_search_box #search_box_menu").css("display","none");	
	});
	
	//点击进行搜索
	$(".search-btn").click(function(){
		var $where=$("#common_search_box #search_where").text();
		var $kw=$("#common_search_box #keyword").val().replace(/[~',!<>@#$%^&*()-+_=:]/g, "");
		if (!$kw){
			alert("请输入搜索内容");
			return false;
		}
		//alert($kw);
		
		switch ($where) {
                    case ("产品"):
						window.location.href="http://s.tpy888.cn/search.php?kw="+$kw+"&flag=sell";
                        break;
                    case ("企业"):
						window.location.href="http://s.tpy888.cn/search.php?kw="+$kw+"&flag=qiye";
                        break;
                    case ("资讯"):
						window.location.href="http://s.tpy888.cn/search.php?kw="+$kw+"&flag=news";
                        break;
					case ("求购"):
						location.href="http://www.tpy888.cn/buy/search.php?kw="+$kw;
                        break;
                    default:
					alert("浏览器不支持，请更换浏览器再重试！");
       }
	});
	
	//解发回车提交搜索事件
	$('#common_search_box #keyword').keydown(function(e){ 
		if(e.keyCode==13){ 
			$('.search-btn').click();
		} 
	}); 
	
}


//==============黄金广告位切换效果========================
$(".div_img").hover(
  function () {
    $(this).find("ul").animate({'left':-180+'px'});
  },
  function () {
   $(this).find("ul").animate({'left':0+'px'});
  }

);





















});

