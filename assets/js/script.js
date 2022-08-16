// Acceptance Criteria
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//global variables
let displayDate = document.getElementById("currentDay");
let dateFormat = moment().format("MMMM Do YYYY");
displayDate.innerHTML = dateFormat;
let currentHour = moment().hours();

//function changes background color based on current time
function color() {
  $(".time-block").each(function () {
    var hour = $(this).attr("id");
    if (hour < currentHour) {
      $(this).addClass("past");
    }
    if (hour == currentHour) {
      $(this).addClass("present");
    } else if (hour > currentHour) {
      $(this).addClass("future");
    }
  });
}
//call function
color();

//function stores user input
$("").on("click")
function store() {
  var text = $("");
  localStorage.setItem("text", JSON.stringify(text));
  console.log(text);
}

//call function  on user click of SAVE
store(addEventListener(click));
