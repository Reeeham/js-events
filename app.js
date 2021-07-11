//Using the onclick event handler to log “Hello!” in the console
const button = document.querySelector('#btn');
button.onClick = function () {
    console.log('hello');
}

button.onClick =  () => {
    console.log('how are you ?');
}
//this will log how are you ? to the console

// adding an event listener to an object.

button.addEventListener('click',function(event){
    console.log("Hello!");
});

button.addEventListener('click', event => {
    console.log("how are you ?!");
});

// This wil log 
// "Hello!"
// "How are you?"
// to the console

// / if you add two event handlers for the same button click, the second event handler will overwrite the first and only that event will trigger.
//For a given element, you can only have one event handler per event type, but you can have multiple event listeners.
//one event handlers multiple event listeners


