const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        
        //localStorage.setItem(nameInput.value, emailInput.value);
        let obj ={
          name:nameInput.value,
          email:emailInput.value  
        }
        axios.post("https://crudcrud.com/api/3f1f0bffda414092bb307e81618b9b72/Appointment",obj)
            .then(response=>{
                console.log(response)
            })
            .catch(err=>{
                console.log(err)
            })
        nameInput.value = '';
        emailInput.value = '';
    }}