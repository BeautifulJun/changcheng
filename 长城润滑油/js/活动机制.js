//活动机制/下单流程/质保机制/服务中心、切换JS
//function tabSwitch(){
//	$(obj).first().show();
//	$(objTab).first().addClass("procMecha_afirst");
//	$(objTab).click(function(){//鼠标点击
//		$(this).addClass("procMecha_afirst").siblings().removeClass("procMecha_afirst");
//		var name=$(this).attr("name");
//		if($(obj).has(name)){
//			$(obj).hide();
//			$(obj+"."+name).show();	
//		};
//	});
//};
////活动机制/下单流程/质保机制/服务中心、切换JS
//$(function(){	
//	tabSwitch(".procMecha_rCon",".procMecha_lul li");
//});
$(function(){
	$('.box div:first').show();
	$('.canner1_1 ul li:first').addClass("picture");
	$('.canner1_1 li').click(function(){
		var _index = $(this).index();
		$(this).addClass("picture").siblings().removeClass("picture");
		$('.box .canner1_2').eq($(this).index()).addClass('xianshi').siblings().removeClass('xianshi');
		
	});

})
