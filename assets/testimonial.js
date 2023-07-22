$(document).ready(function(){
  $('.testimonial-01-slider').slick({
    arrows: false,
    centerPadding: "150px",
    dots: false,
    slidesToShow: 1,
    infinite: true,
    centerMode: true ,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
        centerMode: false
      }
    }
  ]
  });

  $('.testimonial-02-slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    infinite: false
  });

  $('.testimonial-03-slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 2,
    infinite: false
    ,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 
      }
    }
  ]
  });
});