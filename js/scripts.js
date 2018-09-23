
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    var q1 = parseInt($(".question1").val());
    var q2 = parseInt($(".question2").val());
    var q3 = parseInt($(".question3").val());
    var q4 = parseInt($(".question4").val());
    var q5 = parseInt($(".question5").val());
    var results = q1 + q2 + q3 + q4 + q5;

    if(results === 200 || results <= 110 && results !== 30 && results !== 40 && results !== 50){
      $("#youranswer").show();
      $("#marquez").show();
      $("#readit").show();
    }

    else if(results === 30 || results === 40 || results === 50 || results === 130 || results === 140 || results === 230){
      $("#youranswer").show();
      $("#butler").show();
    }

    else if(results >= 300){
      $("#youranswer").show();
      $("#leguin").show();
    }

    else if(results === 120 || results === 210 || results === 220){
      $("#tie").show();
    }

    else{
      $("#error").show();
    }
  });

});
