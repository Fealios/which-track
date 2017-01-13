// var stack = $('#track').val();
var a;
var b;
var c;
var d;

$(document).ready(function(){
  $('#stack').submit(function(event){
    var stack = $('#track').val();
    if(stack === "front") {
      console.log('front stack chosen');
      $('#A').show();
    } else if (stack === "back") {
      console.log('back stack chosen');
      $('#back').show();
    }

    event.preventDefault();
  });
  //end of first choice----------------------------------
  $('#choiceA').submit(function(event){
    var a = $('#firstF').val();
    if(a === "design"){
      $('#css').show();
    } else if (a === "content"){
      $('#B').show();
    }

    event.preventDefault();
  });
  //end of second choice --------------------------------
  $('#choiceB').submit(function(event){
    var b = $('#secondF').val();
    if (b === "app"){
      $('#ruby').show();
    } else if (b === "content"){
      $('#php').show();
    }
  });
  //end of third choice ----------------------------------
  $('#firstB').submit(function(event){
    if(c === 1){
      $('#java').show();
    } else if (c === 2){
      $('#D').show();
    }
  });
  //end of fourth choice ---------------------------------
  $('#secondB').submit(function(event){
    if(d === 1){
      $('#java').show();
    } else if (d === 2){
      $('#csharp').show();
    }
  });
  //end of fifth choice ----------------------------------
});
