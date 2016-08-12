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


// フェードインアニメーション
function fadeinAnime () {
  $('.now').fadeOut(1000);
  $('.next').slideDown(1000);
}

// ボタんクリック
$('.btn').click(function(){
  // アニメーしょん
  fadeinAnime();

  // クラスの付け替え（現在地の変更）
  // ここでクラスの付け替え
  $('.now').removeClass('now');
  $('.next').addClass('now');
  $('.next').removeClass('next');
});


