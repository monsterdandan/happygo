	/*function $i(id){
        return document.getElementById(id);
};	

	$i("tel_enter").onclick=function(){
		 $i("encroll_form1").style.display="block";
		 $i("encroll_form2").style.display="none";
	}	
	$i("name_enter").onclick=function(){
		 $i("encroll_form2").style.display="block";
		 $i("encroll_form1").style.display="none";
	}*/

var aside_img=$(".aside_img")[0];
var down_app=$(".down_app")[0];
aside_img.onmouseover=function(){
	down_app.style.display="block";
}	
aside_img.onmouseout=function(){
	down_app.style.display="none";
}

	
$("#register").click(function(){
	$.ajax({
		url:"../php/checkUser.php",
		async:true,
		data:{
			userName:$("#userName").val(),
			userPass:$("#psw_one").val(),
			userTel:$("#phoneNum").val()
		},
		type:"post",
		success:function(data){
			if(data=="1"){
				//保存cookie
			var date=new Date();
			date.setDate(date.getDate()+7);			
			//保存cookie
			document.cookie = "userName="+encodeURIComponent($("#userName").val())+";expires="+date.toGMTString();

			location.href="../index.html";
			}else{
				alert("亲，用户名或者密码错误，登录失败，请想好再输！");
			}
		}		
	});	
});
