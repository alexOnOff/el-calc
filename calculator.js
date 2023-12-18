const digits = document.getElementsByClassName("digit")
const dot = document.getElementById("buttonDot")
const changeSign = document.getElementById("buttonChangeSign")
const result = document.getElementById("result")
const clear = document.getElementById("buttonClear")
result.value = '0'
const ops = {PLUS: '+', MULT: '*', DIV: '/', SUB: '-'}
const opsBtns = document.getElementsByClassName("operation")
currentOperation = null;

for(var i = 0; i < digits.length; i++)
{
    digits[i].addEventListener('click', function(){
        if(result.value == 0)
            result.value = '';
        result.value += this.value;
    })
}

for(var i = 0; i < opsBtns.length; i++)
{
    opsBtns[i].addEventListener('click', function(){
        currentOperation = ops[this.value];
        console.log(currentOperation)
    })
}

dot.addEventListener('click', function(){
    if(!(result.value.includes('.')))
        result.value += this.value;
})

changeSign.addEventListener('click', () => {
    temp = result.value;
    if(result.value.includes('-'))
        result.value = temp.substring(1);
    else
        result.value = '-' + temp;
})

clear.addEventListener('click', () => {
    result.value = '0';
    currentOperation = null;
})