// Placeholder Header Date/Time
$("#currentDay").text(dayjs().format("MMM Do, YYYY"));
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
// 2. Display Current Date in header
//------ Get current date
//------ Format Current date
//------ Update DOM with current date
// 3. Render timeblocks
//------ Read from localstorage
//------ Create input field
//------ Create "SAVE"  button
//------ Add CSS classes for style
//---------- Determine if timeblock is `past`, `present`, or `future`
//------ Add `value` from localstorage into input
//------ Append to DOM
// 4. Event Handler for "SAVE"
//------ When a user enters text into a field,
//------ Then user clicks **matching** "SAVE" button
//---------- Save the related input field into localstorage
//---------- If field is empty, remove from localstorage
//------ Display notification/ "toast" when the save is complete
// Not sure what this is down here just yet
localStorage.setItem("schedule", JSON.stringify(schedule));
