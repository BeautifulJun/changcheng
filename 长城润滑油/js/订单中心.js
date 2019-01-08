$(function(){
	$('#in02').click(function(){
//		alert(1);
		$(this).val("");
	}).blur(function(){
		$(this).val("输入商品名称或订单号进行搜索")
	});
	});