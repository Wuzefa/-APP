$(function(){
		//添加audio元素 点击是播放音乐 再点击不播放 图片旋转和不旋转
		var audioDom = document.createElement("audio");
		audioDom.src ="/mp3/yy.mp3";
		
		//判断歌曲是否播放
	$(".a_mp3").click(function(){		
		if(audioDom.paused){
			audioDom.play();
		}else{
			audioDom.pause();
		}
		$(".a_mp3").toggleClass("rotateM");
	});
	
 	var w = $(".a_img").width();
 	var h = $(".a_img").height();
 	var w2 = w +20;
 	var h2 = h +20;
 	
 	$(".a_img").hover(function(){
 		$(this).stop().animate({
 			height:h2,width:w2
 		},500);
 	},function(){
 		$(this).stop().animate({
 			height:h,width:w
 		},500);
 	});
 	
 	//点击立即报名 跳转新的页面
 	$(".a_pay").click(function(){
 		$(".a_study").show();
 		$(".a_text").hide();
 		$(".a_suc").hide();
 	});
 	
 	$(".suc").click(function(){
 		
 		var name =$("#name").val();
 		$(".spanName").html(name);
 		
 		$(".a_study").hide();
 		$(".a_text").hide();
 		$(".a_suc").show();
 	});

 	
 	$(".back").click(function(){
 		$(".a_study").hide();
 		$(".a_text").show();
 		$(".a_suc").hide();
 	});
 	
});

