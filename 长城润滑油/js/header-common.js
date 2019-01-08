$(function(){
	$('#in01').click(function(){
//		alert(1);
		$(this).val("");
	}).blur(function(){
		$(this).val("请输入关键字")
	});
	
	
	$('.d01').mouseover(function(){
		$('.u02').css('display','block');
	}).mouseout(function(){
		$('.u02').css('display','none');
	});	
});