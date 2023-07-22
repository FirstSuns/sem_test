$(document).ready(function(){
  $('.main-faq-right h4').on('click', function(e){
    e.preventDefault();
    if($(this).parents('.main-faq-wrap').hasClass('active')){
      $(this).parents('.main-faq-wrap').removeClass('active');
    }else{
      $('.main-faq-wrap').removeClass('active');
      $(this).parents('.main-faq-wrap').addClass('active');
    }
  })
})