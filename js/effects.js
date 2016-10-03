$(document).ready(function(){
  $(window).scrollTop(0);
  // Show/Hide about div while scrolling
  $(window).resize(function(){
    if ($(window).width() <= 800){
      $(window).scroll(function() {

        if ($(this).scrollTop()>0)
        {
          $('#about-txt').fadeIn("slow");
        }
        else
        {
          $('#about-txt').fadeOut("slow");
        }
      });
    }
  });
})
