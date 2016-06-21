var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
  return false;
  }
};



$(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
//    $("#result").text(result);

    $(".year").text(year);

    if (result === false) {
      $(".not").text("NOT");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
