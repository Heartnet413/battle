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

