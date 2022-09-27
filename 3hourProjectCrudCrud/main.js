const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const itemList = document.getElementById('users-items');

var keys = Object.keys(localStorage); 
var  i = keys.length; 

let stringifiedDetailsOfPeople, userDeserial;

document.addEventListener("DOMContentLoaded", () => {
    console.log("Loading.....");
    
    axios.get("https://crudcrud.com/api/e8567a2bc7094fa690b2b8b0330b753b/expense/")
        .then((response)=>{
            console.log(response.data)
            let data = response.data
            data.forEach(ele=>{
                addNewLineElement(ele)
            })
            
        })
        .catch(err=>{
            console.log(err)
        })
  
});

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(amt.value === '' || description.value === '' || etype.value==='') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {

        let userDetails ={
            amt:amt.value,
            description:description.value,
            etype:etype.value
        }
       
        axios.post("https://crudcrud.com/api/e8567a2bc7094fa690b2b8b0330b753b/expense",userDetails)
            .then(response=>{
                console.log(response)
            })
            .catch(err=>{
                console.log(err)
            })
       
        amt.value = '';
        description.value = '';
        etype.value ='';
        addNewLineElement(userDetails);
       
}}
function removeUser(description){
        const childNode =document.getElementById(description);
        if(childNode){
           
            itemList.removeChild(childNode);
        }
}


function addNewLineElement(object) {
        const li = document.createElement("li");
        li.className='item';
        li.id=object.email;
        li.appendChild(
          document.createTextNode(object.amt + " " + object.description + " "+object.etype+" ")
        );
       
       const a = document.createElement("input");
        a.id = 'input';
        a.type = "button";
        a.value = "Edit Expense";

        a.addEventListener("click", async() => {
           
            document.getElementById("amt").value = object.amt;
            document.getElementById("description").value = object.description;
            document.getElementById("etype").value = object.etype;
            console.log(object.id);
            await axios.delete(`https://crudcrud.com/api/e8567a2bc7094fa690b2b8b0330b753b/expense/${object._id}`)
            .then(response=>{
                console.log(response)
            })
            .catch(err=>{
                console.log(err)
            })
            li.remove();
               
        });
        a.style.border = "3px solid green";
        a.style.float="right"
        a.className = "edit"
        a.style.margin ='3px'

        li.appendChild(a);

        const b = document.createElement("input");
        b.id = 'del';
        b.type = "button";
        b.style.float="right"
        b.style.margin ='3px'
        b.value = "Delete Expense";
        b.addEventListener("click", () => {
            axios.delete(`https://crudcrud.com/api/e8567a2bc7094fa690b2b8b0330b753b/expense/${object._id}`)
            .then(response=>{
                console.log(response)
            })
            .catch(err=>{
                console.log(err)
            })
            li.remove();
          });
          b.style.border = "3px solid red";

          b.className = "delete";
        li.appendChild(b);


        itemList.appendChild(li);
}