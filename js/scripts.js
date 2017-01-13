$(document).ready(function(){
  $('#stack').submit(function(event){
    $('.choice').hide();
    $('.language').hide();
    var stack = $('input:radio[name=stack]:checked').val();

    // var stack = $('#track').val();
    if(stack === "front") {
      console.log('front stack chosen');
      $('#A').show();
    } else if (stack === "back") {
      console.log('back stack chosen');
      $('#C').show();
    }

    event.preventDefault();
  });
  //end of first choice----------------------------------
  $('#choiceA').submit(function(event){
    var a = $('input:radio[name=firstF]:checked').val();
    if(a === "design"){
      $('#A').slideUp();
      $('#css').slideDown();
    } else if (a === "content"){
      $('#A').slideUp();
      $('#B').slideDown();
    }

    event.preventDefault();
  });
  //end of second choice --------------------------------
  $('#choiceB').submit(function(event){
    var b = $('input:radio[name=secondF]:checked').val();
    if (b === "app"){
      $('#B').slideUp();
      $('#ruby').slideDown();
    } else if (b === "content"){
      $('#B').slideUp();
      $('#php').slideDown();
    }

    event.preventDefault();
  });
  //end of third choice ----------------------------------
  $('#choiceC').submit(function(event){
    var c = $('input:radio[name=firstB]:checked').val();
    if(c === 'small'){
      $('#C').slideUp();
      $('#java').slideDown();
    } else if (c === 'enterprise'){
      $('#C').slideUp();
      $('#D').slideDown();
    }

    event.preventDefault();
  });
  //end of fourth choice ---------------------------------
  $('#choiceD').submit(function(event){
    var d = $('input:radio[name=secondB]:checked').val();
    if(d === 'optomize'){
      $('#D').slideUp();
      $('#java').slideDown();
    } else if (d === 'building'){
      $('#D').slideUp();
      $('#csharp').slideDown();
    }

    event.preventDefault();
  });
  //end of fifth choice ----------------------------------
});
