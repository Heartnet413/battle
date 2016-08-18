$(function(){
	$('html,body').animate({scrollTop:0 },'1')
})

$(function(){
	$('.btn').click(function(){
		var a = $(".btn").index(this);
		var p = $(".page2").eq(a).offset().top - 380;
		$('html,body').animate({scrollTop : p} , 'slow');
	});

	setTimeout(function(){
		$(".btn").fadeIn(2000);
	},3000);
})
