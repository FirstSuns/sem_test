// $(window).on('load', function(){
//   setTimeout(function(){
// var slide_h = $('.full-screen-video-banner').innerHeight() + 40;
// var slide_h_1 = slide_h + $('#text-fade-content .banner-block:nth-child(1)').innerHeight() + 200;
// var slide_h_2 = slide_h_1 + $('#text-fade-content .banner-block:nth-child(2)').innerHeight() + 400;
// var slide_h_3 = slide_h_2 + $('#text-fade-content .banner-block:nth-child(3)').innerHeight() + 550;
// $(window).scroll(function () {
//   console.log(slide_h,slide_h_1,slide_h_2,slide_h_3)
//   $('#text-fade-content .banner-block:nth-child(1)').css('opacity', 0 + $(window).scrollTop() / slide_h);
//   $('#text-fade-content .banner-block:nth-child(2)').css('opacity', 0 + $(window).scrollTop() / slide_h_1);
//   $('#text-fade-content .banner-block:nth-child(3)').css('opacity', 0 + $(window).scrollTop() / slide_h_2);
//   $('#text-fade-content .banner-block:nth-child(4)').css('opacity', 0 + $(window).scrollTop() / slide_h_3);
// })
//     }, 100)
//   })

// $(window).on('load', function(){
//   var slide_h = $('.full-screen-video-banner').innerHeight();
//   var slide_h_1 = slide_h + $('#text-fade-content').innerHeight() / 4;
//   var slide_h_2 = slide_h_1 + slide_h_1;
//   var slide_h_3 = slide_h_1 + slide_h_1 + slide_h_1;
//   var slide_h_4 = slide_h_1 + slide_h_1 + slide_h_1 + slide_h_1;
//   console.log(slide_h,slide_h_1,slide_h_2,slide_h_3,slide_h_4);
//   $('#text-fade-content').css({"top":slide_h});
//   var slide_h_m = slide_h - 50;
// $(window).scroll(function(){
// if($(this).scrollTop()<=slide_h_m){
//   $('#text-fade-content').addClass('active');
//   }else if($(this).scrollTop()>=slide_h_m && $(this).scrollTop()<=slide_h_1){
//   $('#text-fade-content').addClass('active-1');
// }
//   else if($(this).scrollTop()>=slide_h_1 && $(this).scrollTop()<=slide_h_2){
//   $('#text-fade-content').addClass('active-2');
// }else if($(this).scrollTop()>=slide_h_2 && $(this).scrollTop()<=slide_h_3){
//   $('#text-fade-content').addClass('active-3');
// }else if($(this).scrollTop()>=slide_h_3 && $(this).scrollTop()<=slide_h_4){
//   $('#text-fade-content').addClass('active-4');
// }
  
// });
// });




$(window).on('load', function(){
      setTimeout(function(){
        var bannerBlocks = document.querySelectorAll('.banner-block')
    var blockCount = bannerBlocks.length;
        var w_width_1 = $('#text-fade-top').height() / 4;
        var wid_l = w_width_1 / 2;

      var inner_h = $('#text-fade-top').offset().top - 200;
        var inr_h = $('.full-screen-video-banner').innerHeight() / 2;
        var i_h = $('#text-fade-top').innerHeight()+inr_h+300;
        

          var w_width_m = w_width_1+inner_h-wid_l;

          var w_width_2 = w_width_1+w_width_1+inner_h;
          var w_width_3 = w_width_1+w_width_1+w_width_1+inner_h;
          var w_width_4 = w_width_1+w_width_1+w_width_1+w_width_1+inner_h - wid_l;
          var w_width_5 = w_width_1+w_width_1+w_width_1+w_width_1+w_width_1+inner_h - w_width_1;


          $(window).scroll(function(){
          if($(this).scrollTop()<=inr_h){
            $('#text-fade-container .banner-block').html('');
            $('#text-fade-container').removeClass('active');
            $('#text-fade-container').removeClass('active-1');
            $('#text-fade-container').removeClass('active-2');
            $('#text-fade-container').removeClass('active-3');
          }else if($(this).scrollTop()>=inner_h && $(this).scrollTop()<=w_width_m){
              var htm = $('#hidden-content .banner-block:nth-child(1)').html();
            if($('#text-fade-container').hasClass('active')){
              
            }else{
              $('#text-fade-container .banner-block').html(htm);
            $('#text-fade-container').addClass('active');
            }
            }else if($(this).scrollTop()>=w_width_m && $(this).scrollTop()<=w_width_2){
            var htm = $('#hidden-content .banner-block:nth-child(2)').html()
            if($('#text-fade-container').hasClass('active-1')){
              
            }else{
              $('#text-fade-container .banner-block').html(htm);
              $('#text-fade-container').addClass('active-1');
            }
            }else if($(this).scrollTop()>=w_width_2 && $(this).scrollTop()<=w_width_3){
              var htm = $('#hidden-content .banner-block:nth-child(3)').html()
            if($('#text-fade-container').hasClass('active-2')){
              
            }else{
              $('#text-fade-container .banner-block').html(htm);
              $('#text-fade-container').addClass('active-2');
            }
            }else if($(this).scrollTop()>=w_width_3 && $(this).scrollTop()<=w_width_4){
              var htm = $('#hidden-content .banner-block:nth-child(4)').html()
            if($('#text-fade-container').hasClass('active-3')){
              
            }else{
              $('#text-fade-container .banner-block').html(htm);
              $('#text-fade-container').addClass('active-3');
            }
            }else if($(this).scrollTop()>=w_width_4 && $(this).scrollTop()<=i_h){
              var htm = $('#hidden-content .banner-block:nth-child(5)').html()
            
              $('#text-fade-container .banner-block').html('');
            $('#text-fade-container').removeClass('active');
            $('#text-fade-container').removeClass('active-1');
            $('#text-fade-container').removeClass('active-2');
            $('#text-fade-container').removeClass('active-3');
             
            }
          });
              },10);
        })


  $(window).resize(function(){
setTimeout(function(){
        var bannerBlocks = document.querySelectorAll('.banner-block')
    var blockCount = bannerBlocks.length;
        var w_width_1 = $('#text-fade-top').height() / 4;
        var wid_l = w_width_1 / 2;

      var inner_h = $('#text-fade-top').offset().top - 200;
        var inr_h = $('.full-screen-video-banner').innerHeight() / 2;
        var i_h = $('#text-fade-top').innerHeight()+inr_h+300;
        

          var w_width_m = w_width_1+inner_h-wid_l;

          var w_width_2 = w_width_1+w_width_1+inner_h;
          var w_width_3 = w_width_1+w_width_1+w_width_1+inner_h;
          var w_width_4 = w_width_1+w_width_1+w_width_1+w_width_1+inner_h - wid_l;
          var w_width_5 = w_width_1+w_width_1+w_width_1+w_width_1+w_width_1+inner_h - w_width_1;


          $(window).scroll(function(){
          if($(this).scrollTop()<=inr_h){
            $('#text-fade-container .banner-block').html('');
            $('#text-fade-container').removeClass('active');
            $('#text-fade-container').removeClass('active-1');
            $('#text-fade-container').removeClass('active-2');
            $('#text-fade-container').removeClass('active-3');
          }else if($(this).scrollTop()>=inner_h && $(this).scrollTop()<=w_width_m){
              var htm = $('#hidden-content .banner-block:nth-child(1)').html();
            if($('#text-fade-container').hasClass('active')){
              
            }else{
              $('#text-fade-container .banner-block').html(htm);
            $('#text-fade-container').addClass('active');
            }
            }else if($(this).scrollTop()>=w_width_m && $(this).scrollTop()<=w_width_2){
            var htm = $('#hidden-content .banner-block:nth-child(2)').html()
            if($('#text-fade-container').hasClass('active-1')){
              
            }else{
              $('#text-fade-container .banner-block').html(htm);
              $('#text-fade-container').addClass('active-1');
            }
            }else if($(this).scrollTop()>=w_width_2 && $(this).scrollTop()<=w_width_3){
              var htm = $('#hidden-content .banner-block:nth-child(3)').html()
            if($('#text-fade-container').hasClass('active-2')){
              
            }else{
              $('#text-fade-container .banner-block').html(htm);
              $('#text-fade-container').addClass('active-2');
            }
            }else if($(this).scrollTop()>=w_width_3 && $(this).scrollTop()<=w_width_4){
              var htm = $('#hidden-content .banner-block:nth-child(4)').html()
            if($('#text-fade-container').hasClass('active-3')){
              
            }else{
              $('#text-fade-container .banner-block').html(htm);
              $('#text-fade-container').addClass('active-3');
            }
            }else if($(this).scrollTop()>=w_width_4 && $(this).scrollTop()<=i_h){
              var htm = $('#hidden-content .banner-block:nth-child(5)').html()
            
              $('#text-fade-container .banner-block').html('');
            $('#text-fade-container').removeClass('active');
            $('#text-fade-container').removeClass('active-1');
            $('#text-fade-container').removeClass('active-2');
            $('#text-fade-container').removeClass('active-3');
             
            }
          });
              },10);

  });
  

// $(window).on('load', function(){
//       setTimeout(function(){
//         var bannerBlocks = document.querySelectorAll('.banner-block')
//     var blockCount = bannerBlocks.length;
//         var w_width_1 = $('#text-fade-top').height() / 4;
//         var wid_l = w_width_1 / 2;

//       var inner_h = $('#text-fade-top').offset().top - 200;
//         var inr_h = $('.full-screen-video-banner').innerHeight() / 2;
//         var i_h = $('#text-fade-top').innerHeight()+inr_h+300;
//           // var w_width_1 = $('#text-fade-top').height() / blockCount;
//           // var w_width_m = w_width_1+inner_h;
//           // var w_width_2 = w_width_1+w_width_1+inner_h;
//           // var w_width_3 = w_width_1+w_width_1+w_width_1+inner_h;
//           // var w_width_4 = w_width_1+w_width_1+w_width_1+w_width_1+inner_h - 100;
//           // var w_width_5 = w_width_1+w_width_1+w_width_1+w_width_1+w_width_1+inner_h - 200;



//           var w_width_m = w_width_1+inner_h-wid_l;

//           var w_width_2 = w_width_1+w_width_1+inner_h;
//           var w_width_3 = w_width_1+w_width_1+w_width_1+inner_h;
//           var w_width_4 = w_width_1+w_width_1+w_width_1+w_width_1+inner_h - wid_l;
//           var w_width_5 = w_width_1+w_width_1+w_width_1+w_width_1+w_width_1+inner_h - w_width_1;


//           $(window).scroll(function(){
//           if($(this).scrollTop()<=inr_h){
//            // $('#text-fade-container .banner-block').html('');
//             $('#text-fade-container .banner-block').removeClass('active');
//             $('#text-fade-container .banner-block').removeClass('active-5');
//             $('#text-fade-container .banner-block').removeClass('active-1');
//             $('#text-fade-container .banner-block').removeClass('active-2');
//             $('#text-fade-container .banner-block').removeClass('active-3');
//             $('#text-fade-container .banner-block').removeClass('active-4');
//           }else if($(this).scrollTop()>=inner_h && $(this).scrollTop()<=w_width_m){
//             $('#text-fade-container .banner-block').removeClass('active');
//             $('#text-fade-container .banner-block').removeClass('active-5');
//             $('#text-fade-container .banner-block').removeClass('active-2');
//             $('#text-fade-container .banner-block').removeClass('active-3');
//             $('#text-fade-container .banner-block').removeClass('active-4');
//               var htm = $('#hidden-content .banner-block:nth-child(1)').html()
//            //   $('#text-fade-container .banner-block').html(htm);
//             $('.banner-block').css({"opacity":"0","visibility":"hidden"});
//             //$('.banner-block:nth-child(1)').css({"opacity":"1","visibility":"visible"});
//               $('.banner-block:nth-child(2)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(3)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(4)').css({"opacity":"0","visibility":"hidden"});
//             $('#text-fade-container .banner-block').removeClass('active');
//             $('#text-fade-container .banner-block').removeClass('active-5');
//             $('#text-fade-container .banner-block').removeClass('active-2');
//             $('#text-fade-container .banner-block').removeClass('active-3');
//             $('#text-fade-container .banner-block').removeClass('active-4');
//             setTimeout(function(){
//               $('#text-fade-container .banner-block:nth-child(1)').css({"opacity":"1","visibility":"visible"});
//           }, 1500)
//             setTimeout(function(){
//             $('#text-fade-container .banner-block').addClass('active-1');
//               }, 3000)
//             }else if($(this).scrollTop()>=w_width_m && $(this).scrollTop()<=w_width_2){
//             var htm = $('#hidden-content .banner-block:nth-child(2)').html()
//               //$('#text-fade-container .banner-block').html(htm);
//             $('.banner-block').css({"opacity":"0","visibility":"hidden"});
//           //  $('.banner-block:nth-child(2)').css({"opacity":"1","visibility":"visible"});
//               $('.banner-block:nth-child(1)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(3)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(4)').css({"opacity":"0","visibility":"hidden"});
//             $('#text-fade-container .banner-block').removeClass('active');
//             $('#text-fade-container .banner-block').removeClass('active-1');
//             $('#text-fade-container .banner-block').removeClass('active-5');
//             $('#text-fade-container .banner-block').removeClass('active-3');
//             $('#text-fade-container .banner-block').removeClass('active-4');
              
//             setTimeout(function(){
//               $('#text-fade-container .banner-block:nth-child(2)').css({"opacity":"1","visibility":"visible"});
//             }, 1500)
//             setTimeout(function(){
//             $('#text-fade-container .banner-block').addClass('active-2');
//               }, 3000)
//             }else if($(this).scrollTop()>=w_width_2 && $(this).scrollTop()<=w_width_3){
//               var htm = $('#hidden-content .banner-block:nth-child(3)').html()
//               //$('#text-fade-container .banner-block').html(htm);
//             $('.banner-block').css({"opacity":"0","visibility":"hidden"});
//             //$('.banner-block:nth-child(3)').css({"opacity":"1","visibility":"visible"});
//               $('.banner-block:nth-child(2)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(1)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(4)').css({"opacity":"0","visibility":"hidden"});
//             $('#text-fade-container .banner-block').removeClass('active');
//             $('#text-fade-container .banner-block').removeClass('active-1');
//             $('#text-fade-container .banner-block').removeClass('active-2');
//             $('#text-fade-container .banner-block').removeClass('active-5');
//             $('#text-fade-container .banner-block').removeClass('active-4');
//             setTimeout(function(){
              
//               $('#text-fade-container .banner-block:nth-child(3)').css({"opacity":"1","visibility":"visible"});
//             }, 1500)
//             setTimeout(function(){
//             $('#text-fade-container .banner-block').addClass('active-3');
//               }, 3000)
//             }else if($(this).scrollTop()>=w_width_3 && $(this).scrollTop()<=w_width_4){
//             $('.banner-block').css({"opacity":"0","visibility":"hidden"});
//            // $('.banner-block:nth-child(4)').css({"opacity":"1","visibility":"visible"});
//               $('.banner-block:nth-child(2)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(3)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(1)').css({"opacity":"0","visibility":"hidden"});
//             $('#text-fade-container .banner-block').removeClass('active');
//             $('#text-fade-container .banner-block').removeClass('active-1');
//             $('#text-fade-container .banner-block').removeClass('active-2');
//             $('#text-fade-container .banner-block').removeClass('active-3');
//             $('#text-fade-container .banner-block').removeClass('active-5');
//               var htm = $('#hidden-content .banner-block:nth-child(4)').html()
//             //  $('#text-fade-container .banner-block').html(htm);
            
//             setTimeout(function(){
              
//               $('#text-fade-container .banner-block:nth-child(4)').css({"opacity":"1","visibility":"visible"});
//             }, 1500)
//             setTimeout(function(){
//             $('#text-fade-container .banner-block').addClass('active-4');
//               }, 3000)
//             }else if($(this).scrollTop()>=w_width_4 && $(this).scrollTop()<=i_h){
//             $('.banner-block').css({"opacity":"0","visibility":"hidden"});
//             $('.banner-block:nth-child(1)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(2)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(3)').css({"opacity":"0","visibility":"hidden"});
//            //   $('.banner-block:nth-child(4)').css({"opacity":"1","visibility":"visible"});
//             $('#text-fade-container .banner-block').removeClass('active');
//             $('#text-fade-container .banner-block').removeClass('active-1');
//             $('#text-fade-container .banner-block').removeClass('active-2');
//             $('#text-fade-container .banner-block').removeClass('active-3');
//             $('#text-fade-container .banner-block').removeClass('active-4');
//               var htm = $('#hidden-content .banner-block:nth-child(5)').html()
//               //$('#text-fade-container .banner-block').html('');
            
//             setTimeout(function(){
//               $('#text-fade-container .banner-block:nth-child(4)').css({"opacity":"1","visibility":"visible"});
              
//             }, 1500)
//             setTimeout(function(){
//             $('#text-fade-container .banner-block').addClass('active-5');
//               }, 3000)
//             }
//           });
//               },10)
//         })

//       $(window).resize(function(){
//         setTimeout(function(){
//         var bannerBlocks = document.querySelectorAll('.banner-block')
//     var blockCount = bannerBlocks.length;
//         var w_width_1 = $('#text-fade-top').height() / 4;
//         var wid_l = w_width_1 / 2

//       var inner_h = $('#text-fade-top').offset().top - 200;
//         var inr_h = $('.full-screen-video-banner').innerHeight() / 2;
//         var i_h = $('#text-fade-top').innerHeight()+inr_h+300;
//           // var w_width_1 = $('#text-fade-top').height() / blockCount;
//           // var w_width_m = w_width_1+inner_h;
//           // var w_width_2 = w_width_1+w_width_1+inner_h;
//           // var w_width_3 = w_width_1+w_width_1+w_width_1+inner_h;
//           // var w_width_4 = w_width_1+w_width_1+w_width_1+w_width_1+inner_h - 100;
//           // var w_width_5 = w_width_1+w_width_1+w_width_1+w_width_1+w_width_1+inner_h - 200;



//           var w_width_m = w_width_1+inner_h-wid_l;

//           var w_width_2 = w_width_1+w_width_1+inner_h;
//           var w_width_3 = w_width_1+w_width_1+w_width_1+inner_h;
//           var w_width_4 = w_width_1+w_width_1+w_width_1+w_width_1+inner_h - wid_l;
//           var w_width_5 = w_width_1+w_width_1+w_width_1+w_width_1+w_width_1+inner_h - w_width_1;


//           $(window).scroll(function(){
//           if($(this).scrollTop()<=inr_h){
//             $('#text-fade-container .banner-block').html('');
//             $('#text-fade-container .banner-block').removeClass('active');
//             $('#text-fade-container .banner-block').removeClass('active-5');
//             $('#text-fade-container .banner-block').removeClass('active-1');
//             $('#text-fade-container .banner-block').removeClass('active-2');
//             $('#text-fade-container .banner-block').removeClass('active-3');
//             $('#text-fade-container .banner-block').removeClass('active-4');
//           }else if($(this).scrollTop()>=inner_h && $(this).scrollTop()<=w_width_m){
//               var htm = $('#hidden-content .banner-block:nth-child(1)').html()
//               $('#text-fade-container .banner-block').html(htm);
//               $('.banner-block:nth-child(1)').css({"opacity":"1","visibility":"visible"});
//               $('.banner-block:nth-child(2)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(3)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(4)').css({"opacity":"0","visibility":"hidden"});
//             $('#text-fade-container .banner-block').removeClass('active');
//             $('#text-fade-container .banner-block').removeClass('active-5');
//             $('#text-fade-container .banner-block').removeClass('active-2');
//             $('#text-fade-container .banner-block').removeClass('active-3');
//             $('#text-fade-container .banner-block').removeClass('active-4');
          
//             setTimeout(function(){
//             $('#text-fade-container .banner-block').addClass('active-1');
//               }, 1000)
//             }else if($(this).scrollTop()>=w_width_m && $(this).scrollTop()<=w_width_2){
//               var htm = $('#hidden-content .banner-block:nth-child(2)').html()
//               $('#text-fade-container .banner-block').html(htm);
//               $('.banner-block:nth-child(2)').css({"opacity":"1","visibility":"visible"});
//               $('.banner-block:nth-child(1)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(3)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(4)').css({"opacity":"0","visibility":"hidden"});
//             $('#text-fade-container .banner-block').removeClass('active');
//             $('#text-fade-container .banner-block').removeClass('active-1');
//             $('#text-fade-container .banner-block').removeClass('active-5');
//             $('#text-fade-container .banner-block').removeClass('active-3');
//             $('#text-fade-container .banner-block').removeClass('active-4');
//             setTimeout(function(){
//             $('#text-fade-container .banner-block').addClass('active-2');
//               }, 1000)
//             }else if($(this).scrollTop()>=w_width_2 && $(this).scrollTop()<=w_width_3){
//               var htm = $('#hidden-content .banner-block:nth-child(3)').html()
//               $('#text-fade-container .banner-block').html(htm);
//               $('.banner-block:nth-child(3)').css({"opacity":"1","visibility":"visible"});
//               $('.banner-block:nth-child(2)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(1)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(4)').css({"opacity":"0","visibility":"hidden"});
//             $('#text-fade-container .banner-block').removeClass('active');
//             $('#text-fade-container .banner-block').removeClass('active-1');
//             $('#text-fade-container .banner-block').removeClass('active-2');
//             $('#text-fade-container .banner-block').removeClass('active-5');
//             $('#text-fade-container .banner-block').removeClass('active-4');
//             setTimeout(function(){
//             $('#text-fade-container .banner-block').addClass('active-3');
//               }, 1000)
//             }else if($(this).scrollTop()>=w_width_3 && $(this).scrollTop()<=w_width_4){
//               var htm = $('#hidden-content .banner-block:nth-child(4)').html()
//               $('#text-fade-container .banner-block').html(htm);
//               $('.banner-block:nth-child(4)').css({"opacity":"1","visibility":"visible"});
//               $('.banner-block:nth-child(2)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(3)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(1)').css({"opacity":"0","visibility":"hidden"});
//             $('#text-fade-container .banner-block').removeClass('active');
//             $('#text-fade-container .banner-block').removeClass('active-1');
//             $('#text-fade-container .banner-block').removeClass('active-2');
//             $('#text-fade-container .banner-block').removeClass('active-3');
//             $('#text-fade-container .banner-block').removeClass('active-5');
//             setTimeout(function(){
//             $('#text-fade-container .banner-block').addClass('active-4');
//               }, 1000)
//             }else if($(this).scrollTop()>=w_width_4 && $(this).scrollTop()<=i_h){
//               var htm = $('#hidden-content .banner-block:nth-child(5)').html()
//               $('#text-fade-container .banner-block').html('');
//               $('.banner-block:nth-child(1)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(2)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(3)').css({"opacity":"0","visibility":"hidden"});
//               $('.banner-block:nth-child(4)').css({"opacity":"1","visibility":"visible"});
//             $('#text-fade-container .banner-block').removeClass('active');
//             $('#text-fade-container .banner-block').removeClass('active-1');
//             $('#text-fade-container .banner-block').removeClass('active-2');
//             $('#text-fade-container .banner-block').removeClass('active-3');
//             $('#text-fade-container .banner-block').removeClass('active-4');
//             setTimeout(function(){
//             $('#text-fade-container .banner-block').addClass('active-5');
//               }, 1000)
//             }
//           });
//               },10)
//       })


  <!------ Fixed Layout ------->
  function debounce(e, t, n) {
    var a;
    return function () {
      var r = this,
        i = arguments,
        o = function () {
          a = null, n || e.apply(r, i)
        },
        s = n && !a;
      clearTimeout(a), a = setTimeout(o, t || 200), s && e.apply(r, i)
    }
  }

  const texts = [' ']

  const stepSize = window.innerHeight

  function setText(contentTag, text) {
    contentTag.innerHTML = text
  }

  function getIndex(distance, stepSize) {
    return parseInt(distance / stepSize)
  }

  function getText(texts, index) {
    return texts[index] ? texts[index] : ' '
  }

  function changeText(contentTag, stepSize, texts) {
      const distance = window.scrollY
      const index = getIndex(distance, stepSize)
      const text = getText(texts, index)
      const bannerTop = document.getElementById('text-fade-top').getBoundingClientRect().top
      setText(contentTag, text)
  }

  function setInittext(contentTag, texts) {
    const text = getText(texts, 0)
    setText(contentTag, text)
  }

  window.onload = function() {
    var container = document.getElementById('text-fade-container')
    var contentTag = document.getElementById('text-fade-content')
    var bannerBlocks = document.querySelectorAll('.banner-block')
    var blockCount = (bannerBlocks.length + -2) * 100
    container.style.height = blockCount + 'vh'
    console.log('container.style.height = blockCount',container.style.height = blockCount + 'vh')
    var bannerBlocks = document.getElementsByClassName('banner-block');
    for (var i = 0; i < bannerBlocks.length; i++) {
      var element = bannerBlocks[i];
     // texts.push(element.outerHTML);
    }
    console.log(texts); // Output the 'texts' array to the console
  //  window.addEventListener('scroll', debounce(() => { changeText(contentTag, stepSize, texts) }, 200))
  }