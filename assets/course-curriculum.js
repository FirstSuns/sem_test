$(document).ready(function(){
    $(".start-link").click(function(e){
      e.preventDefault();
      var data_id = $(this).attr('data-id');
      $('#'+data_id).addClass("open");
      $('body').addClass('video-open');
      var src = $('#'+data_id).find('iframe').attr('src');
  $('#'+data_id).find('iframe').attr('src',src+'&autoplay=1');
    });
  
    $(".course-curriculum-close").click(function(e){
      e.preventDefault();
      var data_id = $(this).attr('data-id');
     $(this).parent('.course-curriculum-section-video').removeClass("open");
      $(".course-curriculum-section-video").removeClass("open");
      $('body').removeClass('video-open');
       var src = $('#'+data_id).find('iframe').attr('src');
  $('#'+data_id).find('iframe').attr('src',src);
    });
  function pauseVideo() {
            $('.video-main iframe').get(0).pause();
        }
  });