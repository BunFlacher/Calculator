const calc = document.querySelector('.calc')
const output = document.querySelector('.output')
calc.addEventListener('click', function(event) {
    if(!event.target.classList.contains('calc__number')) return
    
    let value = event.target.innerText
    
    switch(value) {
        case "C" :
            output.innerText = ''
            break
        case '=' :
            output.innerText = eval(output.innerText).toFixed(1)
            break
        default :
            output.innerText += value
    }
})
