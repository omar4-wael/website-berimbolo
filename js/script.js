function submit(){
    let inputs=document.querySelectorAll('input');
    let text = document.querySelectorAll('small')
    if (inputs[0].value==''&&inputs[1].value==''&&inputs[2].value=='') {
        for (let index = 0; index < text.length; index++) {
            text[index].innerHTML='Please enter your Data'
            text[index].style.color='red'
        }
    }
    if (inputs[0].value.length>0) {
        text[0].style.display='none'
    }
    if (inputs[1].value.length>0) {
        text[1].innerHTML=''
    }
    if (inputs[2].value.length>0) {
        text[2].style.display='none'
    }
    if (!inputs[1].value.match(/@/)&&inputs[1].value.match(/./)) {
        text[1].innerHTML='Please add @ , .'
    }
}