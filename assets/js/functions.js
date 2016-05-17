$(window).load(function() { // makes sure the whole site is loaded

    $('.btn').click(function(){
      $('section.home').fadeOut(); // will first fade out the loading animation
      $('.container-home').delay(350).css({'display':'block'});
    });


})
