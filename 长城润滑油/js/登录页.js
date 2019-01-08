var validation = {
			checkedMobile: function(sMobile){
			var mobile_tag = (/^1[23456789]\d{9}$/.test(sMobile))
			return mobile_tag;
		},
		checkPw: function(pw){
			var pw_tag = (/^[a-zA-z0-9]{6,12}$/.test(pw));
			return pw_tag;
			}
	}
function subform(obj){
	//用户名
	if( obj.email.value === "" ){
		$("#userN").show();
		return false;
	}else{
		$("#userN").hide();	
	}
	//密码
	if( obj.pass.value === "" ){
		$("#passW").show();
		return false;
	}else{
		$("#passW").hide();	
	}
	return true;
}
// JavaScript Document
$(function(){
	//登录页输入账户、密码
	$("#userN,#passW").focus(function(){
		  $(this).siblings("p").show();	  
	}).blur(function(){
		 if ($(this).val() == '') {
			$(this).siblings("p").show();
		 }
		 if ($(this).val() != '') {
			$(this).siblings("p").hide();
		 }
	});	
	//点击登录按钮,对账户和密码进行验证功能
	$('.in03').submit(function(event) {
		if( $('#userN').val() === "" ){
			$("#email_p").show();
			return false;
		}
		if( $('#passW').val() === "" ){
			$("#pass_p").show();
			return false;
		}
		if(validation.checkPhone($('#userN').val()) == false){
			$("#email_p").html('您输入的账户不正确,请重新输入').show();
			return false;
		}
		if(validation.checkPass($('#passW').val()) == false){
			$("#pass_p").html('您输入的密码不正确,请重新输入').show();
			return false;
		}
		setTimeout(function(){
			location.href='index.html'
		},1000);
	
});
});	

$(function(){	
	var flag = false;
    $('.i01').click(function(){
        if(flag == false){
          $('.i01').addClass('i02');
          flag =true;
        }else if( flag == true){
          $('.i01').removeClass('i02');
          flag =false;
        }
    });
});