// hoverの処理
$('.left').hover(
  function() {
    $(this).find('.west-sentence').fadeIn();
  },
  function(){
	  $(this).find('.west-sentence').fadeOut();
  }
);
  
$('.right').hover(
  function() {  
    $(this).find('.east-sentence').fadeIn();
  },
  function(){
  	 $(this).find('.east-sentence').fadeOut();
  }
);


var round = 1;
// ボタんクリック
$('.btn').click(function(){
  if (round==1) {

    $('.drink').find('.box.left').animate({
      'left': '-50vw'
    }, 2000);

    $('.drink').find('.box.right').animate({
      'right': '-50vw'
    }, 2000);

    $('.cup').fadeIn(2000);

    setTimeout(function() {
      $('.drink').hide();
    }, 2000);

    

  } else if(round==2) {

    $('.cup').find('.box.left').animate({
      'left': '-50vw'
    }, 2000);

    $('.cup').find('.box.right').animate({
      'right': '-50vw'
    }, 2000);

    $('.hair').fadeIn(2000);

    setTimeout(function() {
      $('.cup').hide();
    }, 2000);

    

  } else if (round==3) {

    $('.hair').find('.box.left').animate({
      'left': '-50vw'
    }, 2000);

    $('.hair').find('.box.right').animate({
      'right': '-50vw'
    }, 2000);

    $('.cake').fadeIn(2000);

    setTimeout(function() {
      $('.hair').hide();
    }, 2000);

    

  } else if(round==4) {
    $('.cake').find('.box.left').animate({
      'left': '-50vw'
    }, 2000);

    $('.cake').find('.box.right').animate({
      'right': '-50vw'
    }, 2000);

    setTimeout(function() {
      $('.cake').hide();
    }, 2000);

  }

  round++;
});

