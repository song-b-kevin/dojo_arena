$(document).ready(function () {
  $('select').hide();

  $('button').hover(
    function () {
      var backgroundImg = "url('images/" + $(this).attr('id') + ".jpg')";
      $('#background').css('background-image', backgroundImg);
    },
    function () {
      $('#background').css('background-image', "");
    }
  )

  $('button').click(function () {
    var backgroundImg = "url('images/" + $(this).attr('id') + ".jpg')";
    $('#background-fixed').css('background-image', backgroundImg);
    $('#background').attr('id', "background-fixed");
    $('h1').text("Select Players");
    $('button').hide();
    $('select').show();
  })

  $('#player1').change( function(){
    $('#player1-image').attr('src', "images/" + $('#player1').val() + ".png");
  })

  $('#player2').change( function(){
    $('#player2-image').attr('src', "images/" + $('#player2').val() + ".png");
  })
})
