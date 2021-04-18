// 1. Setup Variables
var returnedReminders;
var savedReminders;
var temporaryArray = [];
var todaysDate = "";
var currentTime = $("#currentDay").text(dayjs().format("MMM Do, YYYY hh:mm A"));
var hour = "";
var reminder = "";
var currentBox;

var schedule = [
  "9pm",
  "10pm",
  "11pm",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "6pm",
];

function showSchedule() {
  console.log(schedule);
}

//------ JQuery select DOM elements
// 2. Display Current Date in header √
//------ Get current date
//------ Format Current date
//------ Update DOM with current date
// 3. Render timeblocks
//------ Read from localstorage
//------ Create input field √
//------ Create "SAVE"  button √
//------ Add CSS classes for style
//---------- Determine if timeblock is `past`, `present`, or `future`S
//------ Add `value` from localstorage into input
//------ Append to DOM
// 4. Event Handler for "SAVE"
//------ When a user enters text into a field,
//------ Then user clicks **matching** "SAVE" button
//---------- Save the related input field into localstorage
//---------- If field is empty, remove from localstorage
//------ Display notification/ "toast" when the save is complete
// Looks through rows, saves input to local storage
//localStorage.setItem("schedule", JSON.stringify(schedule));

// compare now time with time block times

// main function

$(window).on("load", function () {
  currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
  $("#currentDay").append(currentDate);
  currentTime = moment().format("H");

  function renderAppointments() {
    storedAppointments = JSON.parse(localStorage.getItem("appointments"));
    if (storedAppointments !== null) {
      for (i = 0; i < storedAppointments.length; i++) {
        returnedAppointments = storedAppointments[i];
        details = returnedAppointments.details;
        timeIndex = returnedAppointments.time;
        timeIndex = timeIndex.replace(":00", "");
        if (details !== null) {
          $("#" + timeIndex)
            .children("div")
            .children("div")
            .children("textarea")
            .val(details);
        }
      }
    }
  }

  renderAppointments();

  for (i = 0; i <= 23; i++) {
    CurrentContainer = i;
    if (currentTime == i) {
      $("#" + CurrentContainer).addClass("present");
      $("#" + CurrentContainer)
        .children("div")
        .children("div")
        .children("textarea")
        .addClass("present");
    } else if (currentTime > i) {
      $("#" + CurrentContainer).addClass("past");
      $("#" + CurrentContainer)
        .children("div")
        .children("div")
        .children("textarea")
        .addClass("past");
    } else {
      $("#" + CurrentContainer).addClass("future");
      $("#" + CurrentContainer)
        .children("div")
        .children("div")
        .children("textarea")
        .addClass("future");
    }
  }
});

showSchedule();
//let hour = schedule[0];
for (i = 0; i < 18; i++) {
  // more statements
}

/* ACCEPTANCE CRITERIA
-------------------------------------------------------
√ GIVEN I am using a daily planner to create a schedule
√ WHEN I open the planner
√ THEN the current day is displayed at the top of the calendar
√ WHEN I scroll down
√ THEN I am presented with timeblocks for standard business hours
 WHEN I view the timeblocks for that day
 THEN each timeblock is color coded to indicate whether it is in the past, present, or future
√ WHEN I click into a timeblock
√ THEN I can enter an event
 WHEN I click the save button for that timeblock
 THEN the text for that event is saved in local storage
 WHEN I refresh the page
 THEN the saved events persist
*/
