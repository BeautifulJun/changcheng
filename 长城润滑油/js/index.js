$(function(){
	$('#in01').click(function(){
//		alert(1);
		$(this).val("");
	}).blur(function(){
		$(this).val("请输入关键字")
	});
	});