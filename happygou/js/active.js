	let timer=null;
	let ord=0;//记录当前图片的序号
	function changeImg(){
		let imgs=$("#imgbox img");
		let lis=$("#changeimg li");
		ord++;
		if(ord>2){
			ord=1;
		}
		//让当前的图片显示出来
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.opacity=0;
		}
		imgs[ord-1].style.opacity=1;
		//改变按钮的颜色
		for(let i=0;i<lis.length;i++){
			lis[i].style.backgroundColor="#fff";
		}
		lis[ord-1].style.backgroundColor="#333";
	}

	//左边
	function changeLeft(){
		let imgs=$("#imgbox img");
		let lis=$("#changeimg li");
		ord--;
		if(ord<1){
			ord=2;
		}
		//让当前的图片显示出来
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.opacity=0;
		}
		imgs[ord-1].style.opacity=1;
		//改变小圆圈的颜色
		for(let i=0;i<lis.length;i++){
			lis[i].style.backgroundColor="#333";
		}
		lis[ord-1].style.backgroundColor="#fff";
	}


	//让图片变化
	function startChange(){
		timer=setInterval(changeImg,3000);
	}

	//停止图片变化
	function stopChange(){
		clearInterval(timer);
	}


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

	//hot
	/*setInterval(function(){
		let top=parseInt($(".hot_sp")[0].style.top)
		if(top==0){
			$(".hot_sp")[0].style.top="-3px";
		}else{
			$(".hot_sp")[0].style.top="0px";
		}
	},300)*/
	

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


//轮播图
		startChange();
		let imgs=$("#imgbox img");
		let lis=$("#changeimg li");
		//点击小圆圈跳到相应的图片
		for(let i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){
				ord=this.index;
				for(let j=0;j<lis.length;j++){
					lis[j].style.backgroundColor="#333";
					imgs[j].style.opacity=0;
				}
				lis[this.index].style.backgroundColor="#fff";
				imgs[this.index].style.opacity=1;	
			}
		}


		//今日直播效果
	var liveArr=$(".showgoods");
	var liveimgArr=$(".liveimg");
	for(let i=0;i<liveArr.length;i++){
		liveArr[i].onmouseover=function(){
			liveArr[i].style.border="2px solid #c41f3a";
			liveimgArr[i].style.transform="scale(1.1)";
			liveimgArr[i].style.transition="all 0.6s"
		}
		liveArr[i].onmouseout=function(){
			liveArr[i].style.borderColor="#333";
			liveimgArr[i].style.transform=""
		}
	}

			//向左向右按钮效果
		$(".livebox").hover(
	  		function () {
	    		$(".live_btn")[0].style.display="block";
	  		},
	  		function () {
	    		$(".live_btn")[0].style.display="none";
	  		}
		);
		for(let i=0;i<$(".showgoods").length;i++){
			$(".showgoods")[i].style.left=189*i+"px";
		}
		let todayArr=$(".live_today").children();
		$(".live_next").click(function(){
			
			for(let i=0;i<todayArr.length;i++){
				todayArr[i].style.left=(-189*(5-i))+"px";
				todayArr[i].style.transition="left 1s";
			}
		})
		$(".live_prev").click(function(){
			for(let i=0;i<todayArr.length;i++){
				todayArr[i].style.left=189*i+"px";
				todayArr[i].style.transition="left 1s";
			}
		})
		let yesterdayArr=$(".live_hidden").children();
		$(".live_next").click(function(){
			
			for(let i=0;i<todayArr.length;i++){
				yesterdayArr[i].style.left=(-189*(5-i))+"px";
				yesterdayArr[i].style.transition="left 1s";
			}
		})
		$(".live_prev").click(function(){
			for(let i=0;i<todayArr.length;i++){
				yesterdayArr[i].style.left=189*i+"px";
				yesterdayArr[i].style.transition="left 1s";
			}
		})
		$(".yesterday").click(function(){
			$(".live_hidden")[0].style.display="block";
			$(".live_today")[0].style.display="none";
			for(let i=0;i<todayArr.length;i++){
				yesterdayArr[i].style.left=189*i+"px";
				yesterdayArr[i].style.transition="left 1s";
			}
		})
		$(".today").click(function(){
			$(".live_hidden")[0].style.display="none";
			$(".live_today")[0].style.display="block";
			for(let i=0;i<todayArr.length;i++){
				yesterdayArr[i].style.left=189*i+"px";
				yesterdayArr[i].style.transition="left 1s";
			}
		})

		//提示窗口
		$("#djck").click(function(){
				$("#new_window")[0].style.display="block";
		})
		$("#ts_close").click(function(){
				$("#new_window")[0].style.display="none";
		})

		//活动栏购物车显示
		for(let i=0;i<$(".allfloor").length;i++){
			$(".allfloor")[i].onmouseenter=function(){
				$(".gosee")[i].style.display="block";
			}
		}
		for(let i=0;i<$(".allfloor").length;i++){
			$(".allfloor")[i].onmouseleave=function(){
				$(".gosee")[i].style.display="none";
			}
		}
}
