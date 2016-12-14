$(document).ready(function () {
  $(".profile form").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var gender = parseInt($("#gender").val());
    var age = parseInt($("#age").val());
    var justice = parseInt($("#justice").val());
    
    if ((!name)) {
      $(".input-name").addClass("has-error");
      $("#name-warning").text("Please enter your name.");
    } else {
      if (age < 18) {
        $("#political-name").text("Snot-nosed Crybaby");
        $("#political-reason").text("I'm sorry, but your generation is all about me, me, me! Spells trouble for the future of our country.");
    } else if (justice > 3) {
        $("#political-name").text("Violent Liberal");
        $("#political-reason").text("It's obvious from your Supreme Court preference that you're no fan of justice at all.")
    } else if (justice > 1) {
        $("#political-name").text("Hippie");
        $("#political-reason").text("You have some redeemability, but not much common sense.");
    } else {
        $("#political-name").text("Rational Individual");
        $("#political-reason").text("I honestly have no way of knowing what your political leanings are, based on these simple questions, but you seem relatively reasonable.")
    }

    $(".results").show();
    }
    
  });
});