let log = console.log;
//keyboards events keydown keyup keypress
//ev.char || ev.charCode || ev.which
document.addEventListener("DOMContentLoaded", init);

function init() {
  let txt = document.getElementById("txt");
  txt.addEventListener("keydown", anyKey);
 // txt.addEventListener("keyup", anyKey);
  document.body.addEventListener('keydown',anyKey);
}

function anyKey(ev) {
    log(ev.type, ev.target);
    let target = ev.currentTarget;
    let tag = target.tagName;
    let char = ev.char || ev.charCode || ev.which;
    log(char, tag);
    let s = String.fromCharCode(char);
    log(s);
    switch(char) {
        case 37: 
            log('LEFT');
          break;
        case 39:
            log('DOWN');
          break;
    }
}
