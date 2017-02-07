function Print(i) {if(isIE) {window.print();} else {var i = i ? i : 'content'; var w = window.open('','',''); w.opener = null; w.document.write('<div style="width:630px;">'+$(i).innerHTML+'</div>'); w.window.print();}}
function addFav(t) {document.write('<a href="'+window.location.href+'" title="'+document.title+'" rel="sidebar" onclick="window.external.addFavorite(this.href, this.title);return false;">'+t+'</a>');}
function Album(id, s) {
	for(var i=0; i<3; i++) {$('t_'+i).className = i==id ? 'ab_on' : 'ab_im';}
	$('abm').innerHTML = '<img src="'+s+'" onload="if(this.width>240){this.width=240;}" onclick="PAlbum(this);" onmouseover="SAlbum(this.src);" onmouseout="HAlbum();" id="DIMG"/>';
}
function SAlbum(s) {
	if(s.indexOf('nopic240.gif') != -1) return;
	s = s.substring(0, s.length-8-ext(s).length);
	$('imgshow').innerHTML = '<img src="'+s+'" onload="if(this.width<240){HAlbum();}else if(this.width>630){this.width=630;}"/>';
	Ds('imgshow');
}
//wanghui 2010-11-30
//添加产品大图alt
//function PAlbum(o) {if(o.src.indexOf('nopic240.gif')==-1) View(o.src);}
function PAlbum(o) {if(o.src.indexOf('nopic240.gif')==-1) View(o.src + '&title=' + o.alt);}
//wanghui 2010-11-30
function HAlbum() {Dh('imgshow');}
function Dsearch() {
//2011-12-15 wanghui
if(searchid==5 || searchid==4)
	$_2('destoon_kw').value = $_2('destoon_kw').value.toLowerCase();
	$_2('destoon_kw').value = $_2('destoon_kw').value.replace('-', ' ');
//2011-12-15 wanghui
	if($_2('destoon_kw').value.length < 1 || $('destoon_kw').value == L['keyword_message']) {
		$_2('destoon_kw').value = '';
		window.setTimeout(function(){$_2('destoon_kw').value = L['keyword_message'];}, 500);
		return false;
	}
	
	if($_2('destoon_kw').value=="请输入关键词"){
		return false;
	}	
    
}
function View(s) {window.open(DTPath+'extend/view.php?img='+s);}
function setModule(n, i) {
	$('destoon_moduleid').value = i;
	$('destoon_search_m').href = DTPath+'search.php?moduleid='+i;
	$('destoon_select').value = n;
	Dh('search_module');
	searchid = i;
	setKW();
}
function setKW() {makeRequest('action=keyword&mid='+searchid, AJPath, '_setKW');}
function _setKW() {if(xmlHttp.readyState==4 && xmlHttp.status==200) {if(xmlHttp.responseText) $_2('search_word').innerHTML = '<strong>'+L['popular_search_terms']+'</strong> ' + xmlHttp.responseText;}}
function setTip(w) {Dh('search_tips');
//2011-12-15 wanghui
if(searchid==5)
	w = w.toLowerCase();	
//2011-12-15 wanghui
$_2('destoon_kw').value = w; $_2('destoon_search').submit();}
var tip_word = '';
function STip(w) {
	if(w.length < 2) {$_2('search_tips').innerHTML = ''; Dh('search_tips'); return;}
	if(w == tip_word) {return;} else {tip_word = w;}
	makeRequest('action=tipword&mid='+searchid+'&word='+w, AJPath, '_STip');
}
function _STip() {
	if(xmlHttp.readyState==4 && xmlHttp.status==200) {
		if(xmlHttp.responseText) {
			Ds('search_tips'); $_2('search_tips').innerHTML = xmlHttp.responseText + '<label onclick="Dh(\'search_tips\');">'+L['search_tips_close']+'&nbsp;&nbsp;</label>';
		} else {
			$_2('search_tips').innerHTML = ''; Dh('search_tips');
		}
	}
}
function SCTip(k) {
	var o = $_2('search_tips');
	if(o.style.display == 'none') {
		if(o.innerHTML != '') Ds('search_tips');
	} else {
		if(k == 13) {

		//2011-11-28 wanghui 产品栏目关键词后转小写再搜索
		var s_kw=$_2("destoon_kw");
		if(s_kw != null && searchid==5)
			s_kw.value = s_kw.value.toLowerCase();
		//2011-11-28 wanghui

		$_2('destoon_search').submit(); return;}
		$_2('destoon_kw').blur();
		var d = o.getElementsByTagName('div'); var l = d.length; var n, p; var c = w = -2;
		for(var i=0; i<l; i++) {if(d[i].className == 'search_t_div_2') c = i;}
		if(c == -2) {
			n = 0; p = l-1;
		} else if(c == 0) {
			n = 1; p = -1;
		} else if(c == l-1) {
			n = -1; p = l-2; 
		} else {
			n = c+1; p = c-1;
		}
		w = k == 38 ? p : n;
		if(c >= 0) d[c].className = 'search_t_div_1';
		if(w >= 0) d[w].className = 'search_t_div_2';
		if(w >= 0) {var r = d[w].innerHTML.split('>'); $_2('destoon_kw').value = r[2];} else {$_2('destoon_kw').value = tip_word;}
	}
}
function setFModule(id) {
	var name = $_2('foot_search_m_'+id).innerHTML;
	$_2('foot_moduleid').value = id;
	var ss = $_2('foot_search_m').getElementsByTagName('span');
	for(var i=0;i<ss.length;i++) {if(ss[i].id == 'foot_search_m_'+id) {ss[i].className = 'f_b';} else {ss[i].className = '';}}
}
function Fsearch() {
	if($_2('foot_kw').value.length < 1 || $_2('foot_kw').value == L['keyword_message']) {
		$_2('foot_kw').value = ''; window.setTimeout(function(){$_2('foot_kw').value = L['keyword_message'];}, 500); return false;
	}
}

/* 2011-03-16 wanghui
修改原因:_不能使用
源码为：value.match(/^[a-z0-9@\.]{3,}$/))*/
function user_login() {
	if(!$_2('user_name').value.match(/^[a-z0-9_@\.]{3,}$/)) {$_2('user_name').focus(); return false;}
	if($_2('user_pass').value == 'password' || $_2('user_pass').value.length < 4) {$_2('user_pass').focus(); return false;}
}

if(typeof validate_user_login=="undefined"){
	function validate_user_login(){
		var msg="";
		if($_2('user_name').value==""){
			window.alert("用户名不能为空");
			return false;
		}
		if($_2('user_pass').value==""){
			window.alert("密码不能为空");
			return false;
		}
		
		if(!$_2('user_name').value.match(/^[a-z0-9_@\.]{3,}$/)){
			$_2('user_name').focus();
			lert("用户名错误");
			return false;
		}
		if($_2('user_pass').value.length < 4) {
			$_2('user_pass').focus(); 
			alert("密码长度过短");
			return false;
		}
	}
}


function player(u, w, h, p, a) {
	var w = w ? w : 480;
	var h = h ? h : 400;
	var e = t = c = '';
	if(p == 0) {
		e = 'swf';
	} else if(p == 1) {
		e = 'wma';
	} else if(p == 2) {
		e = 'rm';
	} else {
		e = ext(u);
	}
	if(e == 'rm' || e == 'rmvb' || e == 'ram') {
		t = 'audio/x-pn-realaudio-extend';
	} else if(e == 'wma' || e == 'wmv') {
		t = 'application/x-mplayer2';
		c = 'controls="imagewindow,controlpanel,statusbar"';
	} else {
		if(u.indexOf('.flv')>0 && u.indexOf('?')==-1) u = DTPath+'file/flash/flvplayer.swf?vcastr_file='+u+'&BufferTime=3&IsAutoPlay='+(a ? '1' : '0');
		t = 'application/x-shockwave-flash';
		c = 'quality="high" extendspage="http://get.adobe.com/flashplayer/" allowfullscreen="true"';//wmode="transparent"
	}
	return '<embed src="'+u+'" width="'+w+'" height="'+h+'" type="'+t+'" autostart="'+(a ? 'true' : 'false')+'" '+c+'></embed>';
}
function show_comment(u, m, i) {document.write('<iframe src="'+u+'comment.php?mid='+m+'&itemid='+i+'" name="destoon_comment" id="des'+'toon_comment" style="width:99%;height:0px;" scrolling="no" frameborder="0"></iframe>');}
function show_answer(u, i) {document.write('<iframe src="'+u+'answer.php?itemid='+i+'" name="destoon_answer" id="des'+'toon_answer" style="width:100%;height:0px;" scrolling="no" frameborder="0"></iframe>');}
var sell_n = 0;
function sell_tip(o, i) {
	if(o.checked) {sell_n++; $('item_'+i).style.backgroundColor='#F1F6FC';} else {$('item_'+i).style.backgroundColor='#FFFFFF'; sell_n--;}
	if(sell_n < 0) sell_n = 0;
	if(sell_n > 1) {
		var aTag = o; var leftpos = toppos = 0;
		do {aTag = aTag.offsetParent; leftpos	+= aTag.offsetLeft; toppos += aTag.offsetTop;
		} while(aTag.offsetParent != null);
		var X = o.offsetLeft + leftpos - 10;
		var Y = o.offsetTop + toppos - 70;
		$('sell_tip').style.left = X + 'px';
		$('sell_tip').style.top = Y + 'px';
		o.checked ? Ds('sell_tip') : Dh('sell_tip');
	} else {
		Dh('sell_tip');
	}
}
function img_tip(o, i) {
	if(i) {
		if(i.indexOf('nopic.gif') == -1 && i.indexOf('.thumb.') != -1) {
			var s = i.split('.thumb.'); var aTag = o; var leftpos = toppos = 0;
			do {aTag = aTag.offsetParent; leftpos	+= aTag.offsetLeft; toppos += aTag.offsetTop;
			} while(aTag.offsetParent != null);
			var X = o.offsetLeft + leftpos + 90;
			var Y = o.offsetTop + toppos - 20;
			$('img_tip').style.left = X + 'px';
			$('img_tip').style.top = Y + 'px';
			Ds('img_tip');
			Inner('img_tip', '<img src="'+s[0]+'" onload="if(this.width<200) {Dh(\'img_tip\');}else if(this.width>300){this.width=300;}$(\'img_tip\').style.width=this.width+\'px\';"/>')
		}
	} else {
		Dh('img_tip');
	}
}
/*2011-05-31 wanghui */
function isShow(){
	if($_2("divSearch").style.display=="none"){
		document.getElementById("divSearch").style.display="";
		$_2("spSearch").innerHTML="隐藏搜索";
		$_2("ismore").value="yes";
	}
	else{
		document.getElementById("divSearch").style.display="none";
		$_2("spSearch").innerHTML="高级搜索";
		$_2("ismore").value="no";
	}
}
function GaoJi(){
	if($_2("divSearch") !=null){
		if($_2("divSearch").style.display =="")
			$_2("spSearch").innerHTML="隐藏搜索";
	}
}
//class获取对象
function getElementsByClassName(className,tagName){
	var ele=[],all=document.getElementsByTagName(tagName||"*");
	for(var i=0;i<all.length;i++){
		if(all[i].className==className){
			ele[ele.length]=all[i];
			all[i].innerHTML =FXcode() + all[i].innerHTML; 				
			break;
		}
	}
}
//分享代码
function FXcode(){
	var msg = "<div id=\"bdshare\" class=\"bdshare_t bds_tools get-codes-bdshare\">";
	msg += "	<span class=\"bds_more\">分享到：<\/span>";
	msg += "	<a class=\"bds_qzone\"><\/a>";
	msg += "	<a class=\"bds_tqq\"><\/a>";
	msg += "	<a class=\"bds_renren\"><\/a>";
	msg += "	<a class=\"bds_t163\"><\/a>";
	msg += "	<a class=\"shareCount\"><\/a>";
	msg += "	<\/div>";
	//msg += "<br/><br/>";
	document.writeln("<script type=\"text\/javascript\" id=\"bdshare_js\" data=\"type=tools&amp;uid=0\" ><\/script>");
	document.writeln("<script type=\"text\/javascript\" id=\"bdshell_js\"><\/script>");
    document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math.ceil(new Date()/3600000);
	return msg;
}
//function FXcode(){
//	var msg = "<div id=\"ckepop\"  style='margin-left:100px;'>";
//	msg += "<div id=\"bdshare\" class=\"bdshare_t bds_tools_32 get-codes-bdshare\">";
//	msg += "    <a class=\"bds_qzone\"><\/a>";
//	msg += "    <a class=\"bds_tsina\"><\/a>";
//	msg += "    <a class=\"bds_tqq\"><\/a>";
//	msg += "    <a class=\"bds_renren\"><\/a>";
//	msg += "    <span class=\"bds_more\">更多<\/span>";
//	msg += "	<a class=\"shareCount\"><\/a>";
//	msg += "<\/div>";
//	msg += "<br/><br/><\/div>";
//	document.writeln("<script type=\"text\/javascript\" id=\"bdshare_js\" data=\"type=tools&amp;uid=6453249\" ><\/script>");
//    var u = "http:\/\/share.baidu.com\/static\/js\/shell_v2.js?cdnversion=" + new Date().getHours();
//    document.writeln("<script type=\"text\/javascript\" id=\"bdshell_js\" src=\"" + u + "\"><\/script>");	
//	return msg;
//}
//function FXcode(){
//	var msg = "<div id=\"ckepop\"  style='margin-left:100px;'>";
//	msg += "<div id=\"bdshare\" class=\"bdshare_t bds_tools get-codes-bdshare\">";
//	msg += "    <span class=\"bds_more\">分享到：<\/span>";
//    msg += "    <a class=\"bds_qzone\"><\/a>";
//	msg += "    <a class=\"bds_tsina\"><\/a>";
//	msg += "    <a class=\"bds_tqq\"><\/a>";
//	msg += "    <a class=\"bds_renren\"><\/a>";	
//	msg += "	<a class=\"shareCount\"><\/a>";
//	msg += "<\/div>";
//	msg += "<br/><br/><\/div>";
//	document.writeln("<script type=\"text\/javascript\" id=\"bdshare_js\" data=\"type=tools&amp;uid=6453249\" ><\/script>");
//    var u = "http:\/\/share.baidu.com\/static\/js\/shell_v2.js?cdnversion=" + new Date().getHours();
//    document.writeln("<script type=\"text\/javascript\" id=\"bdshell_js\" src=\"" + u + "\"><\/script>");	
//	return msg;
//}

//2011-12-28 wanghui
var arr_hj= new Array();
//2011-12-28 wanghui