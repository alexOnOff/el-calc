const digits = document.getElementsByClassName("digit")
const dot = document.getElementById("buttonDot")
const changeSign = document.getElementById("buttonChangeSign")
const result = document.getElementById("result")
const clear = document.getElementById("buttonClear")
const opsBtns = document.getElementsByClassName("operation")
const equal = document.getElementById("buttonEqual");
result.value = '0'
currentOperation = null;
isOperationActive = false;
operandFirst = null;
operandSecond = null;

// digits
for(var i = 0; i < digits.length; i++)
{
    digits[i].addEventListener('click', function(){
        if(result.value == 0 || isOperationActive){
            operandFirst = result.value;
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
        
        ret_val = calculate(operandFirst, operandSecond, currentOperation);
        console.log(ret_val);
        result.value = ret_val;
    }
})

function calculate(operand_f, operand_s, operation)
{
    switch(operation)
    {
        case '+':
            return Number(operand_f) + Number(operand_s);
            break;
        case '-':
            return Number(operand_f) - Number(operand_s);
            break;
        case '*':
            return Number(operand_f) * Number(operand_s);
            break;
        case '/':
            if(operand_s == 0)
                return NaN;
            return Number(operand_f) / Number(operand_s);
            break;
        default:
            console.error('Undefined operation', operation)
            break;
    }
}