$ (function(){
    'use strict';
    
 $('.header').height($(window).height());
 
    $(window).resize(function(){
    $('.header').height($(window).height());
  });
 
 //arrow//
 $('.header .arrow i ').click(function(){
     $('html,body').animate({
        
        scrollTop : $('.featur').offset().top},1000);
 });
  //arrow//
 $('.header .container .data .hs').click(function(){
     $('html,body').animate({
        
        scrollTop : $('.ourteam').offset().top},1000);
 });
 
 //show more/less //
 $('.ourwork .bb').click(function(){
  
  $('.ourwork .popic .hi').fadeToggle(1000);
  });
 
 
 //testmonials//
  var leftArrow  = $('.testimonials .fa-chevron-left'),
       rightArrow  = $('.testimonials .fa-chevron-right');

 
 function checkClients (){
  
  if ($('.dataa:first').hasClass('active')){
     leftArrow.fadeOut();
 } else {
     leftArrow.fadeIn();
 }
 
 
  if ($('.dataa:last').hasClass('active')){
     rightArrow.fadeOut();
 } else {
     rightArrow.fadeIn();
 }
 
 }
 checkClients ();
 
 
 $('.testimonials i').click(function(){
  
  if ($(this).hasClass('fa-chevron-right')){
   
    $('.testimonials .active').fadeOut(800,function(){
      $(this).removeClass('active').next('.dataa').addClass('active').fadeIn();
      checkClients ();
    });
  } else{
     $('.testimonials .active').fadeOut(800,function(){
      $(this).removeClass('active').prev('.dataa').addClass('active').fadeIn();
      checkClients ();
   });
  }
});

 });