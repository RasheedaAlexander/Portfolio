$(document).ready(function () {
  var trigger = $('.hamburger'),
  overlay = $('.overlay'),
  isClosed = false;

  //call the menu to open
  trigger.click(function () {
    hamburger_cross();
  });


  //If menu is clicked, change the class to open it
  //If X(close) is clicked, close the menu
  function hamburger_cross() {
    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }

  //add.remove the class toggled to the wrapper container when clicked
  $('[data-toggle="offcanvas"]').click(function() {
    $('#wrapper').toggleClass('toggled');
  });

});
