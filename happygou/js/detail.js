	var showImgs=$(".show_img")[0].children;

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
	}
	