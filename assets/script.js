// 1. Setup Variables √
var currentTime = $("#currentDay").text(dayjs().format("MMM Do, YYYY hh:mm A"));
// Button click trigger event
$("button").click(function (e) {
  // Selecting parent container
  var idParentHolder = e.currentTarget.parentElement.id;
  // Finding children of the parent element to locate input
  var children = $(`#${idParentHolder}`).children();
  // Save operation
  localStorage.setItem(`blockText${idParentHolder}`, children[1].value);
});
// Looping over each input field, (starts with 9 ends with 17)
for (id = 9; id < 18; id++) {
  // Defining variable name to retireved information
  var returnedInput = localStorage.getItem(`blockText${id}`);
  // Using the id to locate input data
  var children = $(`#${id}`).children();
  // Manually setting the input field to the value of the local storage saved data
  children[1].value = returnedInput;
  var date = new Date();
  var currentHour = date.getHours();
  // Changed hour variable to test functionality during late hours
  // CurrentHour = 14;
  //Added CSS styling dynamically to containers
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
