#Homework 5 Work Schedule

## Tasks

    1. Setup Variables
        - JQuery select DOM elements
    2. Display Current Date in header
        - Get current date
        - Format Current date
        - Update DOM with current date
    3. Render timeblocks
        - Read from localstorage
        - Create input field
        - Create "SAVE"  button
        - Add CSS classes for style
            - Determine if timeblock is `past`, `present`, or `future`
        - Add `value` from localstorage into input
        - Append to DOM
    4. Event Handler for "SAVE"
        - When a user enters text into a field
        - then user clicks **matching** "SAVE" button
            - Save the related input field into localstorage
            - If field is empty, remove from localstorage
        - Display notification/ "toast" when the save is complete

```js
var schedule = {
    9: 'class begins'
    10: ''
    11: ''
    12: 'lunch'
    1: ''
    2: 'class ends'
    3: 'weed+feed'
    4: ''
    5: 'dinner?'
}

localStorage.setItem('schedule', JSON.stringify(schedule))
```

REFER TO IN CLASS EXPLINATION FROM SAT 4-10-21 VID
