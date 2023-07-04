// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var now = dayjs().hour();
$(function () {
  //listener for the save button
  //gets the value of its parent element to save into local storage
  $(".saveBtn").on("click", function () {
    var description = $(this).parent().find(".description").val();
    var id = $(this).parent().attr("id");
    localStorage.setItem(id, description);
  });

  // checks the current hour and adds a class dependent on time of day
  var timeBlock = $(".time-block");
  timeBlock.each(function () {
    var hourId = $(this).attr("id");
    if (hourId == now) {
      $(this).addClass("present");
    } else if (hourId < now) {
      $(this).addClass("past");
    } else if (hourId > now) {
      $(this).addClass("future");
    }
    
  });

  //loops through local storage
  //checks if a key exists
  //if it does gets the value and sets
  
  $.each(localStorage, function (key, value) {
    if (key >= 0 || key <= 23) {
      $('#' + key).children('textarea').val(value)
    }
    
  })
  // uses dayjs to get current day and sets it to html id tag
  $('#currentDay').text(dayjs().format('dddd, MMMM D'))
  console.log()
});
