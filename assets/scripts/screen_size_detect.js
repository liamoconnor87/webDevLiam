// Detects screen size @ 500px wide to determine which animation to use.
if ($(window).width() < 500) {
   $('.fade-right').attr('data-aos', 'fade-up');
   $('.fade-left').attr('data-aos', 'fade-up');
   // console.log('Screen is 500 or less!');
} else {
   $('.fade-right').attr('data-aos', 'fade-right');
   $('.fade-left').attr('data-aos', 'fade-left');
   // console.log('Screen is 500 or more!');
}

$(window).resize(function() {
   if ($(window).width() < 500) {
      $('.fade-right').removeAttr('data-aos');
      $('.fade-left').removeAttr('data-aos');
      $('.fade-right').attr('data-aos', 'fade-up');
      $('.fade-left').attr('data-aos', 'fade-up');
      // console.log('Screen is 500 or less!');
   } else {
      $('.fade-right').removeAttr('data-aos');
      $('.fade-left').removeAttr('data-aos');
      $('.fade-right').attr('data-aos', 'fade-right');
      $('.fade-left').attr('data-aos', 'fade-left');
      // console.log('Screen is 500 or more!');
   }
});