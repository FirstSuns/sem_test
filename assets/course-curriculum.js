$(document).ready(function(){
    $(".start-link").click(function(e){
      e.preventDefault();
     // var data_v = $(this).attr('data-video');
       var data_id = $(this).attr('data-id');
       $('#'+data_id).addClass("open");
      //var src = $('#'+data_id).find('iframe').attr('src');
 // $('#'+data_id).find('iframe').attr('src',src+'&autoplay=1');
      
      $('.course-curriculum-section-video iframe').attr('src',data_v+'&autoplay=1');
      $('body').addClass('video-open');
      $('.course-curriculum-section-video').addClass('open');
    });
  
    $(".course-curriculum-close").click(function(e){
      e.preventDefault();
       var data_id = $(this).attr('data-id');
      $(this).parent('.course-curriculum-section-video').removeClass("open");
  //      var src = $('#'+data_id).find('iframe').attr('src');
  // $('#'+data_id).find('iframe').attr('src',src);
      $(".course-curriculum-section-video").removeClass("open");
      $('body').removeClass('video-open');
      //$('.course-curriculum-section-video iframe').attr('src','');
    });
  function pauseVideo() {
            $('.video-main iframe').get(0).pause();
        }
  });