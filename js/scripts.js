var isTriangle = function (side1, side2, side3) {
  return (side1 < side2 + side3 && side2 < side1 + side3 && side3 < side1 + side2)
}

var isEquilateral = function (side1, side2, side3) {
  return side1 === side2 && side2 === side3;
}

var isIsosceles = function (side1, side2, side3) {
  return side1 === side2 || side1 === side3 || side2 === side3;
}

$(document).ready(function () {
  $(".lengths form").submit(function (event) {
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    
    if ((!side1)) {
      $(".side1").addClass("has-error");
      $("#side1-warning").text("Please enter a length for side 1.");
    }
    if ((!side2)) {
      $(".side2").addClass("has-error");
      $("#side2-warning").text("Please enter a length for side 2.");
    }
    if ((!side3)) {
      $(".side3").addClass("has-error");
      $("#side3-warning").text("Please enter a length for side 3.");
    }

    if (side1 && side2 && side3) {
      if (isTriangle(side1, side2, side3) && isEquilateral(side1, side2, side3)) {
        $("#triangle-name").text("Equilateral");
      } else if (isTriangle(side1, side2, side3) && isIsosceles(side1, side2, side3)) {
        $("#triangle-name").text("Isosceles");
      } else if (isTriangle(side1, side2, side3)) {
        $("#triangle-name").text("Scalene");
      } else {
        $("#triangle-name").text("Not a valid triangle");
      }
      $(".result").show();
    }
    
    
    
  });
});