$(window).on('load', function(){
  $(document).on('click','#bundles-target h3', function(e){
    e.preventDefault();
    if($(this).hasClass('active')){
      $(this).removeClass('active');
    }else{
    $('#bundles-target h3').removeClass('active');
    $(this).addClass('active');
    }
  })
  $(document).on('click','#bundles-target .bndlr-bottom-pusher', function(e){
    e.preventDefault();
    $(this).css({"opacity":"0.3"});
    $(this).parents('.bndlr-inner-products-container').find('.bndlr-add-to-cart').trigger('click');
    setTimeout(function(){
    $('#bundles-target .bndlr-bottom-pusher').css({"opacity":"1"});
    }, 1000);
  })
$('.build-journey-product h2').on('click', function(){
  // if($(this).hasClass('active')){
  //     $(this).removeClass('active');
  //   }else{
  //   $('.build-journey-product h2').removeClass('active');
  //   $(this).addClass('active');
  //   }
  $(this).toggleClass('active');
})


 
  
  
})






