// 1. Setup Variables
var returnedReminders;
var savedReminders;
var temporaryArray = [];
var todaysDate = "";
var currentTime = "";
var hour = "";
var reminder = "";
var currentBox;
//------ JQuery select DOM elements
// 2. Display Current Date in header √
//------ Get current date
//------ Format Current date
//------ Update DOM with current date
$("#currentDay").text(dayjs().format("MMM Do, YYYY hh:mm A"));
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
