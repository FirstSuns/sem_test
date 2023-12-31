jQuery(document).ready(function($){
  
  function related_product(){
    // setTimeout(related_product, 2000);
     $(".related-products-slider").slick({ 
      infinite: false,
      slidesToShow: 5,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5
          }
        }, 
        {
          breakpoint: 749,
          settings: {
            slidesToShow: 2
          }
        }, 
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }, 
        {
          breakpoint: 300,
          settings: "unslick" // destroys slick

        }
      ]
    });
  };
// function shopify_payment_button() {
//   $('.shopify-payment-button__button').html('<span>Add Product to Cart</span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.21429 3.26953C3.8198 3.26953 3.5 3.58933 3.5 3.98382C3.5 4.37831 3.8198 4.6981 4.21429 4.6981H5.91451L6.36607 6.95423C6.36904 6.97286 6.37273 6.99124 6.37711 7.00936L7.33083 11.7744L7.33098 11.7752C7.41602 12.2024 7.64852 12.5861 7.98783 12.8592C8.32537 13.131 8.74722 13.276 9.18032 13.2695H14.7225C15.1556 13.276 15.5775 13.131 15.915 12.8592C16.2545 12.5859 16.4871 12.2019 16.572 11.7744L17.4873 6.97476C17.5272 6.76566 17.4718 6.54966 17.3361 6.38564C17.2004 6.22162 16.9986 6.12667 16.7857 6.12667H7.65734L7.20039 3.84363C7.13358 3.50981 6.84045 3.26953 6.5 3.26953H4.21429ZM8.73203 11.4961L7.94327 7.55524H15.9223L15.1704 11.4982C15.1505 11.596 15.097 11.6838 15.0192 11.7464C14.9409 11.8095 14.8428 11.843 14.7423 11.8411L14.7286 11.841H9.17428L9.1606 11.8411C9.06003 11.843 8.96199 11.8095 8.88364 11.7464C8.80529 11.6834 8.75162 11.5947 8.73203 11.4961ZM8.78583 16.4009C9.02252 16.4009 9.2144 16.2091 9.2144 15.9724C9.2144 15.7357 9.02252 15.5438 8.78583 15.5438C8.54914 15.5438 8.35726 15.7357 8.35726 15.9724C8.35726 16.2091 8.54914 16.4009 8.78583 16.4009ZM7.2144 15.9724C7.2144 15.1045 7.91795 14.4009 8.78583 14.4009C9.65371 14.4009 10.3573 15.1045 10.3573 15.9724C10.3573 16.8402 9.65371 17.5438 8.78583 17.5438C7.91795 17.5438 7.2144 16.8402 7.2144 15.9724ZM15.071 16.4009C15.3077 16.4009 15.4996 16.2091 15.4996 15.9724C15.4996 15.7357 15.3077 15.5438 15.071 15.5438C14.8343 15.5438 14.6425 15.7357 14.6425 15.9724C14.6425 16.2091 14.8343 16.4009 15.071 16.4009ZM13.4996 15.9724C13.4996 15.1045 14.2032 14.4009 15.071 14.4009C15.9389 14.4009 16.6425 15.1045 16.6425 15.9724C16.6425 16.8402 15.9389 17.5438 15.071 17.5438C14.2032 17.5438 13.4996 16.8402 13.4996 15.9724Z" fill="white"/></svg>'); 
// }
  
  setInterval(function() {
    related_product();
    // shopify_payment_button();
  }, 1000);



   $(".accordion").on("click", ".heading", function() {  
     $(this).toggleClass("active").next().slideToggle();  
     $(".contents").not($(this).next()).slideUp(300);                  
     $(this).siblings().removeClass("active");
   });


  // Show the first tab and hide the rest
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();
    
    // Click function
    $('#tabs-nav li').click(function(){
      $('#tabs-nav li').removeClass('active');
      $(this).addClass('active');
      $('.tab-content').hide();
      
      var activeTab = $(this).find('a').attr('href');
      $(activeTab).fadeIn();
      return false;
    });


  $('.prepay_checkbox').on('change', function(){
    
    let price = $(this).closest('.np-packages-sec').find('.hidden_price').val();
    let pre_pay_price = $(this).closest('.np-packages-sec').find('.pre_pay_price').val();
    // console.log(price);
    // console.log(pre_pay_price);
    if($(this).prop('checked')) {
      $(this).closest('.np-packages-sec').find('.np-package-total-text .np-price').html(pre_pay_price);          
    } else {
      $(this).closest('.np-packages-sec').find('.np-package-total-text .np-price').html(price);      
    } 
  });
  
 
           
});