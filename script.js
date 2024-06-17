const display = document.querySelector('#display');
// console.log(display.value);

function appendToDisplay(input){
    display.value += input;
}

function ResetDisplay(){
    display.value = '';
}

function removeEle(){
    display.value = display.value.slice(0,-1);
}

function Cal(){
    try
    {
        display.value = parseFloat(eval(display.value).toFixed(3));
    }
    catch(error){
        display.value = 'Error';
    }
}