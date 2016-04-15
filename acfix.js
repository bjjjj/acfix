//ver 0.1 2016-4-14
var acfix_ver = 0.1;
(function() {
 	if (!document.domain) {
 		alert("如果你看到这个提示，那么可能你的浏览器太辣鸡，换个浏览器吧（Firefox、Chrome、IE11等）");
 		return
 	}
 	if (document.domain.toLowerCase().indexOf("acfun.tv") < 0 && document.domain.toLowerCase().indexOf("acfun.tudou.com") < 0) {
 		alert("进AcFun再说...");
 		return
 	}
 	$.info("AcFix: 欢迎使用 AcFix Js-ver：" + acfix_ver);
 	var b = $("a.active.primary").data("from");
 	window._getPlayer = function() {
 		return document.getElementById("ACFlashPlayer-re") ? document.getElementById("ACFlashPlayer-re") : (document.getElementById("not-ACFlashPlayer-re") ? document.getElementById("not-ACFlashPlayer-re") : document.getElementById("area-player"));
 	};
 	window.c = function(d, e) {
 		player = _getPlayer();
 		if (player.id == 'area-player') {
 			$(player).html('<div class="inner ui-draggable"><iframe id="ACFlashPlayer-re" ></iframe></div>');
 			player = document.getElementById("ACFlashPlayer-re");
 		};
 		player.outerHTML = '<object style="visibility:visible;width:100%;height:100%" id="not-ACFlashPlayer-re" data="' + d + '" src="' + d + '" allowscriptaccess="always" allowfullscreen="true" allowfullscreeninteractive="true" type="application/x-shockwave-flash"><param value="true" name="allowFullscreenInteractive"><param value="true" name="allowfullscreen"><param value="always" name="allowscriptaccess"><param value="' + e + '" name="flashvars"><param name=movie value="' + d + '"></object>'
 	};
 	if (!document.getElementById("video-download")  && b != "pps") {
 		$("#txt-title-view").append('<span id="video-download"><a class="btn primary" href="http://www.talkshowcn.com/page/acfun_danmu.html?vid='+$("a.active.primary").data("vid")+'&p='+(location.href.match(/_(\d+)/)?location.href.match(/_(\d+)/)[1]:"1")+'" title="视频下载" style="float:none;color:#fff;margin-left:8px;" target="_blank"><i class="icon icon-download"></i>详细信息</a></span>')
 	}
 	if (b == "youku2") {
 		b = "youku"
 	}
 	if (b == "qq2") {
 		b = "qq"
 	}
 	if (b == "zhuzhan") {
 		b = "ac"
 	}
 	sourceList = {
 		"sina": "新浪视频",
 		"youku": "优酷网",
 		"tudou": "土豆网",
 		"qq": "腾讯视频",
 		"pps": "PPS.tv",
 		"ku6": "酷六网",
 		"letv": "乐视云",
 		"letv2": "乐视网",
 		"sohu": "搜狐视频",
 		"iqiyi": "爱奇艺",
 		"56": "56网",
 		"pptv": "PPTV",
		"ac": "缺B乐"
 	};
	if(typeof(sourceList[b]) == "undefined"){
		$.ajax({
			url: "http://www.acfun.tv/video/getVideo.aspx?id="+$("a.active.primary").data("vid"),
			async: false,
			success:function(data){
				$("a.active.primary").data("from",data.sourceType);
				$("a.active.primary").data("sid",data.sourceId);
				b = data.sourceType;
			}
		});
	};
	if(b != 'ac' && b != 'letv' /*&& b != 'iqiyi' && b != 'pps'*/){
		if(b=='iqiyi'){
			//c("http://iqiyid.jd-app.com/acparse/AcPlayer20141212.swf", "oldcs=1&host=http://www.talkshowcn.com&vid=" + $("a.active.primary").data("vid") + "|" + b + "|" + $("a.active.primary").data("sid"));
		}else{
		c("http://static.skydust.net/private/acfun/AcPlayer201412121_D.swf", "oldcs=1&host=http://www.talkshowcn.com&vid=" + $("a.active.primary").data("vid") + "|" + b + "|" + $("a.active.primary").data("sid"));
		}
		$.info("视频源类型：" + sourceList[b]);
		$("#video-download").append('<a class="btn primary" onclick="$(_getPlayer()).prop(\'outerHTML\',$(_getPlayer()).prop(\'outerHTML\').replace(/acfun.tv/,\'talkshowcn.com\'))" style="float:none;color:#fff;margin-left:8px;" target="_blank"><i class="icon icon-refresh"></i>刷新</a>');
	}else{
	    $.info("视频源类型：" + sourceList[b] + ";不会进行任何处理");
	}
	$("#video-download").append('<a class="btn primary"  onclick="window.location.reload(true)" )" style="float:none;color:#fff;margin-left:8px;" target="_blank"><i class="icon icon-refresh"></i>强制刷新网页</a>');
 	window.setCookie = function(d, f) {
 		var e = 365;
 		var g = new Date();
 		g.setTime(g.getTime() + e * 24 * 60 * 60 * 1000);
 		document.cookie = d + "=" + escape(f) + ";expires=" + g.toGMTString()
 	};

 	function a(e) {
 		var d, f = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
 		if (d = document.cookie.match(f)) {
 			return unescape(d[2])
 		} else {
 			return null
 		}
 	}
 })();
