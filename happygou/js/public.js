function $i(id){
        return document.getElementById(id);
 };	

window.onload=function(){
				//招商菜单显示
	var business_li=$(".business_li")[0];
	var business_box=$(".business_box")[0];
	business_li.onmouseover=function(){
		business_box.style.display="block";
	}	
	business_li.onmouseout=function(){
		business_box.style.display="none";
	}


	//鼠标移入下载app显示二维码
	var last=$(".last")[0];
	var serve_box=$(".serve_box")[0];
	last.onmouseover=function(){
		serve_box.style.display="block";
	}
	last.onmouseout=function(){
		serve_box.style.display="none";
	}	

	//客服中心菜单显示
	var down_load=$(".down_load")[0];
	var icon_top=$(".icon_top")[0];
	down_load.onmouseover=function(){
		icon_top.style.display="block";
	}
	down_load.onmouseout=function(){
		icon_top.style.display="none";
	}

	//侧边栏

	//账号菜单
	var Identify=$(".Identify")[0];
	var text_enroll=$(".text_enroll")[0];

	Identify.onmouseover=function(){

		Identify.style.backgroundImage="url(../images/index/icon_list.png)";
		Identify.style.backgroundPosition="-237px 0px";
		text_enroll.style.display="block";
	}	
	Identify.onmouseout=function(){
		Identify.style.backgroundImage="";
		text_enroll.style.display="none";
	}	

	//二维码显示
	var QRcode_aside=$(".QRcode_aside")[0];
	var bigcode=$(".bigcode")[0];

	QRcode_aside.onmouseover=function(){
		QRcode_aside.style.backgroundImage="url(../images/index/icon_list.png)";
		QRcode_aside.style.backgroundPosition="-237px -57px";
		bigcode.style.display="block";
	}	
	QRcode_aside.onmouseout=function(){
		QRcode_aside.style.backgroundImage="";
		bigcode.style.display="none";
	}	

	//客服菜单显示
	var Service_aside=$(".Service_aside")[0];
	var aside_nav=$(".aside_nav")[0];

	Service_aside.onmouseover=function(){
		Service_aside.style.backgroundImage="url(../images/index/icon_list.png)";
		Service_aside.style.backgroundPosition="-237px 0px";
		aside_nav.style.display="block";
	}	
	Service_aside.onmouseout=function(){
		Service_aside.style.backgroundImage="";
		aside_nav.style.display="none";
	}

	//返回顶部
	let   scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	$(".return_top").click(function(){
 		 $("body").animate({ 
   		 "scrollTop":0+"px"
  		}, 1000 );
	});

}





