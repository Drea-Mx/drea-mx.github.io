$( document ).ready(function() {
  $('#section1 .lead').on('click', function(){
    $('#section1 .description').toggle(1000);
  });
  $('#section1 .numero').on('click', function(){
    $('#section1 .description').toggle(1000);
  });


  $('#section2 .lead').on('click', function(){
    $('#section2 .description').toggle(1000);
  });
  $('#section2 .numero').on('click', function(){
    $('#section2 .description').toggle(1000);
  });

  $('#section3 .lead').on('click', function(){
    $('#section3 .description').toggle(1000);
  });
  $('#section3 .numero').on('click', function(){
    $('#section3 .description').toggle(1000);
  });



//proceso
$('#section4 .circulos .uno').on('click', function(){
  $('#section4 .circulos .uno').css('background', '#FF4A0B');
  $('#section4 .circulos .dos').css('background', 'none');
  $('#section4 .circulos .tres').css('background', 'none');
  $('#section4 .circulos .cuatro').css('background', 'none');
  

  $('.palabras .encuesta').show(400);
  $('.palabras .sketch').hide(400);
  $('.palabras .mockup').hide(400);
  $('.palabras .desarrollo').hide(400);
});

$('#section4 .circulos .dos').on('click', function(){
  $('#section4 .circulos .uno').css('background', 'none');
  $('#section4 .circulos .dos').css('background', '#000000');
  $('#section4 .circulos .tres').css('background', 'none');
  $('#section4 .circulos .cuatro').css('background', 'none');

  $('.palabras .encuesta').hide(400);
  $('.palabras .sketch').show(400);
  $('.palabras .mockup').hide(400);
  $('.palabras .desarrollo').hide(400);
});

$('#section4 .circulos .tres').on('click', function(){
  $('#section4 .circulos .uno').css('background', 'none');
  $('#section4 .circulos .dos').css('background', 'none');
  $('#section4 .circulos .tres').css('background', '#5B0155');
  $('#section4 .circulos .cuatro').css('background', 'none');

  $('.palabras .encuesta').hide(400);
  $('.palabras .sketch').hide(400);
  $('.palabras .mockup').show(400);
  $('.palabras .desarrollo').hide(400);
});

$('#section4 .circulos .cuatro').on('click', function(){
  $('#section4 .circulos .uno').css('background', 'none');
  $('#section4 .circulos .nos').css('background', 'none');
  $('#section4 .circulos .tres').css('background', 'none');
  $('#section4 .circulos .cuatro').css('background', '#30E9FF');


  $('.palabras .encuesta').hide(400);
  $('.palabras .sketch').hide(400);
  $('.palabras .mockup').hide(400);
  $('.palabras .desarrollo').show(400);
});


});
