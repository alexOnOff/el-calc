const digits = document.getElementsByClassName("digit")
const dot = document.getElementById("buttonDot")
const result = document.getElementById("result")
result.value = '0'

for(var i = 0; i < digits.length; i++)
{
    digits[i].addEventListener('click', function(){
        if(result.value == 0)
            result.value = ''
        result.value += this.value;
    })
}

dot.addEventListener('click', function(){
    if(!(result.value.includes('.')))
        result.value += this.value
})