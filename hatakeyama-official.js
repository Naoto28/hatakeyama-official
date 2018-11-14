$(function() {
  AOS.init();


$('#nav_toggle').click(function(){
      $("header").toggleClass('open');
  $("#responsive-menu").slideToggle(300);
  });


$('#scroll').click(function() {
  $('html, body').animate({'scrollTop': 0}, 1000);
  });


})
