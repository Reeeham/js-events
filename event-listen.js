//Javascript Event Listeners
//Event-driven programming: your program waits for events and 
//used them as triggers to run the next function

//object.addEventListener(event, function)
document.addEventListener('DOMContentLoaded',init);

function init(){

    let btn = document.getElementById('btn');
    let lnk =  document.getElementById('lnk');
    let txt =  document.getElementById('txt');
    
    txt.addEventListener('input', ev => {
        //if contents of input is changed that will trigger the input event 
        console.log(ev.type,ev.target,ev.target.value)
    });
    
    
    txt.addEventListener('change', ev => {
        //when the person leaves the input field
        console.log(ev.type,ev.target,ev.target.value)
    });
    
    txt.addEventListener('blur', ev => {
        //when the person leaves the input field
        console.log(ev.type,ev.target,ev.target.value)
    });
    
    btn.addEventListener('click',buttonClicked);
    lnk.addEventListener('click',function(e) { //i'll only need this function here so i will leave it as anonymous
        e.preventDefault();
        console.log(e.type, e.target, e.currentTarget);
    });
}

function buttonClicked(e){
    console.log(e.type, e.target, e.currentTarget);
}



// lnk.addEventListener('click',linkClicked);
// function linkClicked(e) {
//     e.preventDefault();
//     console.log(e.type, e.target, e.currentTarget);
// }

// myDiv.addEventListener('click', doSomething);

// function doSomething(e) {
//     console.log(e.type) //click
//     console.log(e.target) //click
//     //return 7 so i don't have to write (e) when i call doSomething
// }
