
$(function(){

	$("#top-title").css({opacity:'0.0'}).animate({opacity:'1'},5000);
	// $("#top-sentence").animate({opacity:'1'},fadeSpeed);
	//$(window).scroll(function(){
		//$("#top-sentence").css({opacity:'0.0'}).animate({opacity:'1'},fadeSpeed)
	//});
    });
	// $("#top-btn").hover(
	// 	function(){
	// 		$(this).css('background-color','#24d')

	// 	},
	
var scrollFadein = $('.js-scrollFadein');
$(window).on('scroll load', function() {

    var scrollTop = $(window).scrollTop();
    scrollFadein.each(function(i, elm) {
        var targetPos = $(this).offset().top;
        if (scrollTop > targetPos - $(window).height() + 100 ) {
            $(this).animate({ opacity: 1 }, 500);
        }
    });
});