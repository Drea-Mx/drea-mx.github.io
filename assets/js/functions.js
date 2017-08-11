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
});
