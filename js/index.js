
$(function(){

	$("#top-title").css({opacity:'0.0'}).animate({opacity:'1'},3000);
	// $("#top-sentence").animate({opacity:'1'},fadeSpeed);
	$(window).scroll(function(){
		$("#top-sentence").css({opacity:'0.0'}).animate({opacity:'1'},fadeSpeed)
	});
    });
	// $("#top-btn").hover(
	// 	function(){
	// 		$(this).css('background-color','#24d')

	// 	},
	
