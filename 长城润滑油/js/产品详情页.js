//	//返回顶部JS
	var $backToTopTxt = "", $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body"))
		.text($backToTopTxt).attr("title", $backToTopTxt).click(function() {
			$("html, body").animate({ scrollTop: 0 }, 120);
	}), $backToTopFun = function() {
		var st = $(document).scrollTop(), winh = $(window).height();
		(st > 0)? $backToTopEle.show(): $backToTopEle.hide();
		//IE6下的定位
		if (!window.XMLHttpRequest) {
			$backToTopEle.css("top", st + winh - 166);
		}
	};
	$(window).bind("scroll", $backToTopFun);
	$(function() { $backToTopFun(); });
//详细页选中商品、数量、类型JS
function speciColour( xz ){
	if( $("#xzXg"+xz).hasClass("tb-selected") ){
		$("#xzXg"+xz).removeClass("tb-selected");	
	}else{
		$("#xzXg"+xz).addClass("tb-selected").siblings("li").removeClass("tb-selected");
	}
}

//详细页产品加减JS
var maxNum = 999;//最大数字限制
function boutton(type,id){
   if(type==1){
		//减
		var v = $("#digital"+id).val();
		v = parseInt(v);
		if( true === isNaN(v) ){
			alert("数量有误");
			return false;
		}
		if( v <= 1 ){
			return false;
		}
		if( v === 1 ){
			return false;
		}
		v--;
		$("#digital"+id).val(v);
		if( v === 1 ){
			//this.disabled = "true";//添加disabled属性
			$('#but_decr'+id).attr("disabled","disabled");//减、添加disabled属性
		}
		if( v < maxNum ){
			$('#but_incr'+id).removeAttr("disabled");//加、移除disabled属性
		}
	}else{
		    //加
			var v = $("#digital"+id).val();
			v = parseInt(v);
			if( true === isNaN(v) ){
				alert("数量有误");
				return false;
			}
			if( v > maxNum ){
				return false;
			}
			v++;
			$("#digital"+id).val(v);
			if( v > 1 ){
				$('#but_decr'+id).removeAttr("disabled");//减、移除disabled属性
			}
			if( v === maxNum ){
				$('#but_incr'+id).attr("disabled","disabled");//加、添加disabled属性
			}
	}
}
//详细页产品加减当产品值为空、或者直接输入0时JS
function xiaoJiFen(id){
	var name = $("#digital"+id).val();
	if( name.length==0 ){
		$("#digital"+id).val(1);
	}
	var v = $("#digital"+id).val();//产品数量
		v = parseInt(v);
	if( v === 0 ){
		$("#digital"+id).val(1);
		$('#but_decr'+id).attr("disabled","disabled");//减、添加disabled属性
	}
	if( v === 1 ){
		$('#but_decr'+id).attr("disabled","disabled");//减、添加disabled属性
	}
	if( v > 1 ){
		$('#but_decr'+id).removeAttr("disabled");//减、移除disabled属性
	}
	if( v < maxNum ){
		$('#but_incr'+id).removeAttr("disabled");//加、移除disabled属性
	}
	if( v === maxNum ){
		$('#but_incr'+id).attr("disabled","disabled");//加、添加disabled属性
	}
}
//请选择类型、属性JS
function joinRu(){
	if( $("#tb-thumbA li").hasClass("tb-selected")==false ){
		$("#leiXingP_b").show();
		$("#leiXingP_c").hide();
		$(".cartGwc").attr("href","javascript:void(0)");
	}else if( $("#tb-thumbB li").hasClass("tb-selected")==false ){
		$("#leiXingP_c").show();
		$("#leiXingP_b").hide();
		$(".orderDg").attr("href","javascript:void(0)");
	}else{
		$("#leiXingP_b").hide();
		$("#leiXingP_c").hide();
		$(".cartGwc").attr("href","#");
		$(".orderDg").attr("href","#");	
	}
}
//鼠标经过预览图片函数
function preview(img){
	$("#preview .jqzoom img").attr("src",$(img).attr("src"));
	$("#preview .jqzoom img").attr("jqimg",$(img).attr("bimg"));
}
$(function(){
	$('.goodsThe li').click(function(){
		var wei = $(this).index();
		$(this).addClass('xxCurrent').siblings().removeClass('xxCurrent');
		$('.liangtu div').eq(wei).show().siblings().hide();
	})
})