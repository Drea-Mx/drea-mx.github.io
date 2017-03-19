$( document ).ready(function() {

  $('#entrar').click(function(){
    $('section.home').fadeOut(1000);
    $('section.servicios').fadeIn(2000);
  });
  $('#contacto').click(function(){
    $('section.servicios').fadeOut(1000);
    $('section.contacto').fadeIn(2000);
  });



});
