	function checkReg(type,value){
		switch(type){
			case "phone" : if((/^1[34578]\d{9}$/g).test(value)){
				return true;
			}else{
				return false;
			};break;
			case "password" : if((/^[a-zA-Z]\w{6,16}$/g).test(value)){
				return true;
			}else{
				return false;
			};break;
			case "userName" :if((/^[a-zA-Z]\w{6,20}$/g).test(value)){
				return true;
			}else{
				return false;
			};break;
			case "email" :if((/^\w+@\w+(\.\w+)+$/).test(value)){
				return true;
			}else{
				return false;
			}
		}
	}

	//验证
	let arr=[0,0,0,0,0,0,0];
	//用户名正则验证
	$("#userName").focus(function(){
		$("#userNametest").html("请输入用户名,用户名为6-20位字母、数字或符号组合");
			$("#userNametest")[0].style.color="#999";
		$("#userName")[0].style.background="";
	})
	$("#userName")[0].onchange=function(){
		if(!checkReg("userName",$("#userName")[0].value)){
			$("#userNametest").html("用户名为6-20位字母、数字或符号组合，请重新输入!");
			$("#userNametest")[0].style.color="#F11E63";
		}else{
			isOk=true;
			$("#userNametest").html("");
			$("#userNametest")[0].style.color="#55A532";
			$("#userName")[0].style.background="url(../images/encroll/sign.png) no-repeat right"
		}
	}
	
	//邮箱正则验证
	$("#userEmail").focus(function(){
		$("#emailtest").html("如：******@**.com/cn");
		$("#emailtest")[0].style.color="#999";	
		$("#userEmail")[0].style.background="";
		
	})
	$("#userEmail")[0].onchange=function(){
		if(!checkReg("email",$("#userEmail")[0].value)){
			$("#emailtest").html("邮箱格式错误，如：******@**.com/cn!");
			$("#emailtest")[0].style.color="#F11E63";			
		
		}else{
			isOk=true;
			$("#emailtest").html("");
			$("#userEmail")[0].style.background="url(../images/encroll/sign.png) no-repeat right"
		}
	}

		//电话号码正则验证
	$("#phoneNum").focus(function(){
		$("#teltest").html("请输入11位手机号码");
		$("#teltest")[0].style.color="#999";	
		$("#phoneNum")[0].style.background="";
		
	})
	$("#phoneNum")[0].onchange=function(){
		if(!checkReg("phone",$("#phoneNum")[0].value)){
			console.log(checkReg("phone",$("#phoneNum")[0].value))
			$("#teltest").html("请输入11位手机号码");
			$("#teltest")[0].style.color="#F11E63";			
		
		}else{
			isOk=true;
			$("#teltest").html("");
			$("#phoneNum")[0].style.background="url(../images/encroll/sign.png) no-repeat right"
		}
	}
	
	//密码正则验证
	$("#psw_one").focus(function(){
		$("#pswtest").html("请输入您的密码,您的密码为6-16字母、数字或符号组合");
		$("#pswtest")[0].style.color="#999";	
		$("#psw_one")[0].style.background="";
		
	})
	$("#psw_one")[0].onchange=function(){
		if(!checkReg("password",$("#psw_one")[0].value)){
			console.log(checkReg("password",$("#psw_one")[0].value))
			$("#pswtest").html("输入有误，密码为6-16字母、数字或符号组合");
			$("#pswtest")[0].style.color="#F11E63";			
		
		}else{
			isOk=true;
			$("#pswtest").html("");
			$("#psw_one")[0].style.background="url(../images/encroll/sign.png) no-repeat right"
		}
	}
	//密码再次验证
	$("#psw_two").focus(function(){
		$("#pswtest2").html("请再次输入密码");
		$("#pswtest2")[0].style.color="#999";	
		$("#psw_two")[0].style.background="";
		
	})
	
	$("#psw_two")[0].onchange=function(){
		if($("#psw_two")[0].value!=$("#psw_one")[0].value){
			$("#pswtest2").html("两次密码输入不一致");
			$("#pswtest2")[0].style.color="#F11E63";						
		}else{
			isOk=true;
			$("#pswtest2").html("");
			$("#psw_two")[0].style.background="url(../images/encroll/sign.png) no-repeat right"
			
		}
	}
	
		//验证码正则验证
		$("#getcode")[0].onclick=function(){
		var str="";
		var num;
		while(true){
			num=parseInt(Math.random()*123);
			if(num>=65 && num<=90){
				str+=String.fromCharCode(num);
			}
			if(num>=97 && num<=122){
				str+=String.fromCharCode(num);
			}
			if(num<=9 && num>=0){
				str+=num.toString();
			}
			if(str.length>=4){
				break;
			}
		}
		$("#yanzheng")[0].innerHTML=str;
	}
		
	$("#V_code").focus(function(){
		$("#codetest2").html("请再次输入密码");
		$("#codetest2")[0].style.color="#999";	
		$("#V_code")[0].style.background="";
		
	})

	$("#V_code")[0].onchange=function(){
		if($("#V_code")[0].value!=$("#yanzheng")[0].innerHTML){
			$("#codetest2").html("验证码输入有误");
			$("#codetest2")[0].style.color="#F11E63";
		}else{
			isOk=true;
			$("#codetest2").html("");
			$("#V_code")[0].style.background="url(../images/encroll/sign.png) no-repeat right"			
		}
	}
	

	/*$("form").submit(function(){
		if($$("form input").val()==""){
			return false;
		}
	})*/

$("#enter").click(function(){
	if(isOk){
	$.ajax({
		url:"../php/encroll.php",
		async:true,
		data:{
			userName:$("#userName").val(),
			userPass:$("#psw_one").val(),
			userTel:$("#phoneNum").val(),
			userEmail:$("#userEmail").val()
		},
		type:"post",
		success:function(data){
			console.log(data)
			if(data=="1"){
				location.href="success.html";
			}else{
				alert("重新注册");
			}
		}		
	});	
	}else{
		let inps=$(".inputs");
		for(let i=0;i<inps.length;i++){	
			inps[i].style.boxShadow="2px 0px 2px rgba(255,0,0,.5),0px 2px 2px rgba(255,0,0,.5),0px -2px 2px rgba(255,0,0,.5),-2px 0px 2px rgba(255,0,0,.5)"
		}
	}
});



