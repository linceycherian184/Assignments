const addButton = document.getElementById("add");
const form = document.getElementById('my_form');

document.addEventListener("DOMContentLoaded", () => {
    console.log("loading");

    let stringifiedDescription,description;
    Object.keys(localStorage).forEach((key) => {
        if (key.match(/expenseCalc/g)) {
            stringifiedDescription = localStorage.getItem(key);
            description = JSON.parse(stringifiedDescription);
            addNewLineElement(description);
        }
    });

});


addButton.addEventListener("click",(e)=>{
    e.preventDefault();
    const expense = document.getElementById("expense").value;
    const category =document.getElementById("category").value;
    const description= document.getElementById("description").value;
    if(expense.length >0 && description.length>0){
        const obj ={
            expense,
            category,
            description
        };
        localStorage.setItem("expenseCalc"+description,JSON.stringify(obj));
        addNewLineElement(obj);
        form.reset();
    }
})


function addNewLineElement(object) {
  const ul = document.getElementById("expenselist");
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(object.expense + " " + object.description + " "+object.category+" ")
  );
  
  
  const input = document.createElement("input");
  input.id = object.description;
  input.type = "button";
  input.value = "Edit Expense";
  input.addEventListener("click", () => {
    document.getElementById("expense").value = object.expense;
    document.getElementById("description").value = object.description;
    document.getElementById("category").value = object.category;
    li.remove();
  });
  input.style.border = "1px solid ";
  li.appendChild(input);

  const input2 = document.createElement("input");
  input2.type = "button";
  input2.value = "Delete Expense";
  input2.addEventListener("click", () => {
    localStorage.removeItem("expenseCalc" + object.description);
    li.remove();
    
  });
  input2.className = "delete";
  input2.style.border = "1px solid red";
  
  li.appendChild(input2);
  ul.appendChild(li);
}
