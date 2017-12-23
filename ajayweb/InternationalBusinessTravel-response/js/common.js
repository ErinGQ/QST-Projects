$(function(){
	
	//首页
	$('figure img').hover(function () {
	  	$(this).siblings().find('.type').stop(true,true).animate({"left":0},300);
	},function (){
		$(this).siblings().find('.type').stop(true,true).animate({"left":-90},300);
	});
	
	
	//关于我们
	$('figure img').hover(function () {
	  	$(this).siblings('figcaption').stop(true,true).animate({"bottom":0},300);
	},function (){
		$(this).siblings('figcaption').stop(true,true).animate({"bottom":-23},300);
	});
})