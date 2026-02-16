const display = document.getElementById('display');

function appendTodisplay(input) {
    display.value += input;
}

function Cleardisplay() {
    display.value = '';
}

function Calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}