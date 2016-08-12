$('.left').hover(function() {
  
  
  $(this).find('.west-sentence').fadeIn();

},

function(){
	 $(this).find('.west-sentence').fadeOut();
});
  
$('.right').hover(function() {
  
  $(this).find('.east-sentence').fadeIn();

},

function(){
	 $(this).find('.east-sentence ').fadeOut();
});

$('.btnleft').click(function(){
    //console.log('btnleftをクリックした');
    $('.box').fadeOut(1000);
    //$('.right').animate({
    	//'top': '100vh'
    //}, 1500);
});


$('.btnleft').click(function(){
    $('.next').slideDown(1000);
});

$('.btnright').click(function(){
    //console.log('btnleftをクリックした');
    $('.box').fadeOut(1000);
    //$('.right').animate({
      //'top': '100vh'
    //}, 1500);
});


$('.btnright').click(function(){
    $('.next').slideDown(1000);
});












