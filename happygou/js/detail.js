	/*var showImgs=$(".show_img")[0].children;

	var smallImgs=$(".listimg")[0].getElementsByTagName("img");
	for(let i=0;i<smallImgs.length;i++){
		smallImgs[i].onmouseover=function(){
			showImgs[i].className="bigimg";
			showImgs[i].style.zIndex="3";
			smallImgs[i].className="smallimg";
		}
		smallImgs[i].onmouseout=function(){
			showImgs[i].className="";
			showImgs[i].style.zIndex="0";
			smallImgs[i].className="";
		}
	}*/
	
	
	//页面加载查看是否存在cookie
	let userName=getCookieValue("userName");
	if(userName){
		$(".loginBox").html("<a href='../index.html'>"+userName+"中午好！</a><a href='' class='exit'>退出</a>");
		$(".exit")[0].onclick=function(){
			removeCookie("userName");
		}
	}
	
	
	//商品数量加减按钮
	let num=parseInt($(".counts").val());
		//console.log(parseInt($(".counts").val()));
		$(".jian").click(function(){
			if(num>1){num=num-1;}
			$(".counts").val(num);
		})
		$(".add").click(function(){
			num=num+1;
			$(".counts").val(num);
		});
	
	
	//从列表页取得的id，拆分，根据goodsid从后台取数据
	let str=location.href;
	let str1=str.split("?")
	console.log(str1);
	let goodsId=str1[1];
	console.log(goodsId);
	$.ajax({
		url:"../php/getGoodsInfo.php",
		async:true,
		type:"get",
		data:{goodsId:goodsId},
		success:function(data){
			let obj=JSON.parse(data);
			$(".show_img")[0].style.backgroundImage="url("+obj.beiyong4+")";
			$(".show_img")[0].style.backgroundSize="380px 380px";
			$(".show_img").bigMirror({
				mirrorWidth:150,
				mirrorHeight:150,
				multiple:3,
				direction:"右",
				bigImgPath:obj.beiyong7	
			});
			$(".one").html(obj.goodsName);
			$(".two").html(obj.goodsDesc);
			$(".three b").html(obj.goodsPrice);
			$(".three del").html("￥"+obj.beiyong1);
		},
	});
	
	
	//点击加入购物车添加商品
	$(".add_cart").click(function(){
		let userName=getCookieValue("userName");	
		$.ajax({
			url:"../php/addShoppingCart.php",
			async:true,
			type:"get",
			data:{
				vipName:userName,
				goodsId:goodsId,
				goodsCount:$(".counts").val()
			},
			success:function(data){
				if(data==1){
					alert("添加成功");
				}else{
					alert("添加失败");
				}
			}
		})
	})

