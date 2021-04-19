// 1. Setup Variables
var currentTime = $("#currentDay").text(dayjs().format("MMM Do, YYYY hh:mm A"));
//------ JQuery select DOM elements
// 2. Display Current Date in header √
//------ Get current date √
//------ Format Current date √
//------ Update DOM with current date √
// 3. Render timeblocks √
//------ Read from localstorage <----------- NEXT
//------ Create input field √
//------ Create "SAVE"  button √
//------ Add CSS classes for style
//---------- Determine if timeblock is `past`, `present`, or `future`S
//------ Add `value` from localstorage into input
//------ Append to DOM
// 4. Event Handler for "SAVE"

// button click trigger event
$("button").click(function (e) {
  // selecting parent container
  var idParentHolder = e.currentTarget.parentElement.id;
  // finding children of the parent element to locate input
  var children = $(`#${idParentHolder}`).children();
  // save operation
  localStorage.setItem(`blockText${idParentHolder}`, children[1].value);
});
// looping over each input field, (starts with 9 ends with 17)
for (id = 9; id < 18; id++) {
  // defining variable name to retireved information
  var returnedInput = localStorage.getItem(`blockText${id}`);
  // using the id to locate input data
  var children = $(`#${id}`).children();
  // manually setting the input field to the value of the local storage saved data
  children[1].value = returnedInput;

  var date = new Date();
  var currentHour = date.getHours();

  currentHour = 14;
  if (id == currentHour) {
    $(`#${id}`).addClass("present");
  }
  if (id < currentHour) {
    $(`#${id}`).addClass("past");
  }
  if (id > currentHour) {
    $(`#${id}`).addClass("future");
  }
}

//------ When a user enters text into a field,
//------ Then user clicks **matching** "SAVE" button
//---------- Save the related input field into localstorage
//---------- If field is empty, remove from localstorage
//------ Display notification/ "toast" when the save is complete
// Looks through rows, saves input to local storage
//localStorage.setItem("schedule", JSON.stringify(schedule));

// compare now time with time block times

// main function

/*$(window).on("load", function () {
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
√ WHEN I click the save button for that timeblock
√ THEN the text for that event is saved in local storage
 WHEN I refresh the page
 THEN the saved events persist
*/
