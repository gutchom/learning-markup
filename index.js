(function ($) {
  /** ページトップ処理 **/
  // スクロールした場合
  $(window).scroll(function() {
    // スクロール位置が200を超えた場合
    if ($(this).scrollTop() > 200) {
      $('#pagetop').fadeIn();
    } else {
      // ページトップへをフェードアウト
      $('#pagetop').fadeOut();
    }
  });

  // ページトップクリック
  $('#pagetop').click(function() {
    // ページトップへスクロール
    $('html, body').animate({
      scrollTop: 0
    }, 300);
    return false;
  });
})(jQuery);
