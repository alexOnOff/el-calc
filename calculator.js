const digits = document.getElementsByClassName("digit")
const dot = document.getElementById("buttonDot")
const changeSign = document.getElementById("buttonChangeSign")
const result = document.getElementById("result")
const clear = document.getElementById("buttonClear")
const opsBtns = document.getElementsByClassName("operation")
const equal = document.getElementById("buttonEqual");
result.value = '0';
let currentOperation = null;
let isOperationActive = false;
let operandFirst = null;
let operandSecond = null;

// digits
for(var i = 0; i < digits.length; i++)
{
    digits[i].addEventListener('click', function(){
        if(result.value == 0 || isOperationActive){
            result.value = '';
        }
            
        result.value += this.value;
        isOperationActive = false;
    })
}


// operations
for(var i = 0; i < opsBtns.length; i++)
{
    opsBtns[i].addEventListener('click', function(){

        currentOperation = this.value;
        operandFirst = result.value;
        isOperationActive = true;
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
    isOperationActive = false;
    operandFirst = null;
    operandSecond = null;
})

equal.addEventListener('click', () => {

    operandSecond = result.value;
    if(operandFirst != null && operandSecond != null && currentOperation != null)
    {
        window.something.calculate(operandFirst, operandSecond, currentOperation)
        .then((data) => {
            result.value = data;
            operandFirst = data;
        });
        
    }
    
})