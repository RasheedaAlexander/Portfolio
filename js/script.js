// $(document).ready(function () {
//   var trigger = $('.hamburger'),
//   overlay = $('.overlay'),
//   isClosed = false;
//
//   //call the menu to open
//   trigger.click(function () {
//     hamburger_cross();
//   });
//
//
//   //If menu is clicked, change the class to open it
//   //If X(close) is clicked, close the menu
//   function hamburger_cross() {
//     if (isClosed == true) {
//       overlay.hide();
//       trigger.removeClass('is-open');
//       trigger.addClass('is-closed');
//       isClosed = false;
//     } else {
//       overlay.show();
//       trigger.removeClass('is-closed');
//       trigger.addClass('is-open');
//       isClosed = true;
//     }
//   }
//
//   //add.remove the class toggled to the wrapper container when clicked
//   $('[data-toggle="offcanvas"]').click(function() {
//     $('#wrapper').toggleClass('toggled');
//   });
// });
if (window.matchMedia("(min-width: 768px)").matches) {
  /* The viewport is at least 768px wide */
  // portfolio carousel
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("project");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
} else {
  /* The viewport is less than 768px wide */
}
