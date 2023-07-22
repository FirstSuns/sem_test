$(window).on('load', function () {
  $('.interior-content').on('click', function(e){
  return false;
});
  $('.interior-content a').on('click', function(e){
  var href = $(this).attr('href');
    window.location.href = href;
});
$('.full-screen-video-banner img,.full-screen-video-banner .content').on('click', function(){
  console.log('testt');
  $(this).parents('.full-screen-video-banner').find('figure').hide();
  $(this).parents('.full-screen-video-banner').find('video').show();
  $(this).parents('.full-screen-video-banner').find('iframe').show();
  var src = $(this).parents('.full-screen-video-banner').find('iframe').attr('src');
  $(this).parents('.full-screen-video-banner').find('iframe').attr('src',src+'&autoplay=1');
  $('.full-screen-video-banner .content').hide();
});
  
});
