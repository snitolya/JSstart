const form = document.forms[0];
const firstNameInput = document.body.querySelector('#validationCustom01');
firstNameInput.addEventListener('input' , function(){
    if(this.value.length>3){
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        this.nextElementSibling.className = 'valid-feedback';
        this.nextElementSibling.textContent = 'GOOD!!!!!';
       
    }else {
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
        this.nextElementSibling.className = 'invalid-feedback';
        this.nextElementSibling.textContent = 'First name > 3!!!!!';
    }
})
const secondNameInput = document.body.querySelector('#validationCustom02');
secondNameInput.addEventListener('input' , function(){
    if(this.value.includes(' ')){
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
        this.nextElementSibling.textContent = 'GOOD!!!!!';
       
    }else {
       
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        this.nextElementSibling.textContent = 'First name > 3!!!!!';
    }    
})
const zipCode = document.body.querySelector('#validationCustom05');
zipCode.addEventListener('input' , function(){
      if(this.value===Number.parseInt(this.value).toString()){
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        this.nextElementSibling.textContent = 'GOOD!!!!!';
       
    }else {
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
        this.nextElementSibling.textContent = 'First name > 3!!!!!';
    }    
})


const select = document.querySelector('#validationCustom04');
function validateSelect(){
    if(select.selectedIndex > 0){

    }else{
        false
    }


form.addEventListener('submit', event => {
 event.preventDefault()
})



select.addEventListener('input',validateSelect)
       
}


