jQuery(document).ready(function($){
  
  function related_product(){
    // setTimeout(related_product, 2000);
     $(".related-products-slider").slick({ 
      infinite: false,
      slidesToShow: 3,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
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

  
  setInterval(function() {
    related_product();
  }, 1000);
  
     
});