const form = document.querySelector('.formulario')
const shadowForm = document.querySelector('.shadow-form')

function clickEntreEmContato(){
    
    form.style.left = '40%'
    form.style.transform = 'tranlatex(-50%)'
    shadowForm.style.visibility = 'visible'

}

function clickReturn(){

 form.style.left = '-336px'
    form.style.transform = 'none'
    shadowForm.style.visibility = 'hidden'
}