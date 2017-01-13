var stack;
var a;
var b;
var c;
var d;

$(document).ready(function(){
  $('#stack').submit(function(event){
    if(stack === "front") {
      $('#front').show();
    } else if (stack === "back") {
      $('#back').show();
    }
  });
  //end of first choice----------------------------------
  $('#firstF').submit(function(event){
    if(a === 1){
      $('#css').show();
    } else if (a === 2){
      $('#B').show();
    }
  })
  //end of second choice --------------------------------
  $('#secondF').submit(function(event){
    if (b === 1){
      $('#ruby').show();
    } else if (b === 2){
      $('#php').show();
    }
  })
  //end of third choice ----------------------------------
  $('#firstB').submit(function(event){
    if(c === 1){
      $('#java').show();
    } else if (c === 2){
      $('#D').show();
    }
  })
  //end of fourth choice ---------------------------------
  $('#secondB').submit(function(event){
    if(d === 1){
      $('#java').show();
    } else if (d === 2){
      $('#csharp').show();
    }
  })
})
