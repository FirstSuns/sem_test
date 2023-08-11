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

$(window).on('load', function(){
/*jshint eqnull:true */
/*!
* jQuery Cookie Plugin v1.1
* https://github.com/carhartl/jquery-cookie
*
* Copyright 2011, Klaus Hartl
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://www.opensource.org/licenses/mit-license.php
* http://www.opensource.org/licenses/GPL-2.0
*/
(function($, document) {

var pluses = /\+/g;
function raw(s) {
  return s;
}
function decoded(s) {
  return decodeURIComponent(s.replace(pluses, ' '));
}

$.cookie = function(key, value, options) {

  // key and at least value given, set cookie...
  if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value == null)) {
    options = $.extend({}, $.cookie.defaults, options);

    if (value == null) {
      options.expires = -1;
    }

    if (typeof options.expires === 'number') {
      var days = options.expires, t = options.expires = new Date();
      t.setDate(t.getDate() + days);
    }

    value = String(value);

    return (document.cookie = [
      encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
      options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
      options.path    ? '; path=' + options.path : '',
      options.domain  ? '; domain=' + options.domain : '',
      options.secure  ? '; secure' : ''
    ].join(''));
  }

  // key and possibly options given, get cookie...
  options = value || $.cookie.defaults || {};
  var decode = options.raw ? raw : decoded;
  var cookies = document.cookie.split('; ');
  for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
    if (decode(parts.shift()) === key) {
      return decode(parts.join('='));
    }
  }
  return null;
};

$.cookie.defaults = {};

})(jQuery, document);

  var win_link = window.location.href;
  let searchParams = new URLSearchParams(window.location.search)
  var v = $.cookie("email"); 
  if (v == 1)
  {
    $('.course-curriculum-section').show();
    $('.our-newsletter-section').hide();
    
  }else{
    if(searchParams.has('customer_posted')){
      $.cookie("email", 1, { expires : 1 });
      $('.course-curriculum-section').show();
      $('.our-newsletter-section').hide();
    }
    else
    {
      $('.course-curriculum-section').hide();
    }
  }
})



