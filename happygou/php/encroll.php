<?php
	//字符编码使用utf-8；
	header("Content-type: text/html; charset=utf-8");

	//1、接收客户端的输入的数据
	$name = $_POST['userName'];//$_POST:针对post请求方法。
	$pass = $_POST['userPass'];
	$userPhone = $_POST['userTel'];
	$userEmail = $_POST['userEmail'];

	//2、保存到数据库
	//1)、连接数据库
	$con = mysql_connect("localhost","root","123456");
	if(!$con){
		//die("连接失败".mysql.error());
		echo "注册失败:服务器连接有问题".mysql_error();
	}else{
		//2)、执行SQL语句
		mysql_select_db("h1703",$con);
		$str="insert into usersInfo(username,userpass,usertel,useremail) values('".$name."','".$pass."','".$userPhone."','".$userEmail."')";
		$count =mysql_query($str,$con);
		echo $count;
		//3)、关闭数据库
		mysql_close($con);
				//3、响应
		
	}	
?>