
window.addEventListener('load', async () => {
  let video = document.querySelector('video[muted][autoplay]');
  try {
    await video.play();
  } catch (err) {
    video.controls = true;
  }
});

$(window).on('load', function () {
   $('.bnr_video').trigger('click')
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
 // $('.full-screen-video-banner .content').hide();
});
  $('.full-screen-video-banner img,.full-screen-video-banner .content').trigger('click');
  $('.full-screen-video-banner').find('figure').hide();
  $('.full-screen-video-banner').find('video').show();
  $('.full-screen-video-banner').find('iframe').show();
  var src = $('.full-screen-video-banner').find('iframe').attr('src');
  $('.full-screen-video-banner').find('iframe').attr('src',src+'&autoplay=1');
  $('.full-screen-video-banner .content').hide();
});
