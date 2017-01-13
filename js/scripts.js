$(document).ready(function(){
  $('#stack').submit(function(event){
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
      $('#css').show();
    } else if (a === "content"){
      $('#B').show();
    }

    event.preventDefault();
  });
  //end of second choice --------------------------------
  $('#choiceB').submit(function(event){
    var b = $('input:radio[name=secondF]:checked').val();
    if (b === "app"){
      $('#ruby').show();
    } else if (b === "content"){
      $('#php').show();
    }

    event.preventDefault();
  });
  //end of third choice ----------------------------------
  $('#choiceC').submit(function(event){
    var c = $('input:radio[name=firstB]:checked').val();
    if(c === 'small'){
      $('#java').show();
    } else if (c === 'enterprise'){
      $('#D').show();
    }

    event.preventDefault();
  });
  //end of fourth choice ---------------------------------
  $('#choiceD').submit(function(event){
    var d = $('input:radio[name=secondB]:checked').val();
    if(d === 'optomize'){
      $('#java').show();
    } else if (d === 'building'){
      $('#csharp').show();
    }

    event.preventDefault();
  });
  //end of fifth choice ----------------------------------
});
