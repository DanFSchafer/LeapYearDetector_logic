var leapYear = function(theYear) {
  return false;
};



$(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var theYear = parseInt($("input#year").val());
    var result = leapYear(theYear);
    $("#result").text(result);
  });
});
