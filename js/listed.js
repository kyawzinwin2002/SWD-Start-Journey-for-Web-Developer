//selectors

const inputText = document.querySelector("#inputText");
const addList = document.querySelector("#addList");
const lists = document.querySelector("#lists");
const total = document.querySelector("#total");
const doneTotal = document.querySelector("#doneTotal");
const app = document.querySelector("#app");
// const check = document.querySelector("#check");

//function

const createLi = (text) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex align-items-center justify-content-between";
    li.innerHTML = ` <div class="form-check">
    <input onchange="check(event)" class="me-2  form-check-input" type="checkbox">
    <label for="" class="form-label">
        ${text}
    </label>
</div>
<div class="button-group">
    <button  class="btn editBtn  btn-sm btn-outline-dark">
        <i class="bi bi-pencil pe-none"></i>
    </button>
    <button id=""  class="delBtn  btn btn-sm btn-danger">
        <i class="bi bi-trash3 pe-none"></i>
    </button>
</div>`
lists.append(li);
return li;
};

const check = (event) => {
    event.target.nextElementSibling.classList.toggle("text-decoration-line-through");;
    counter()
};

const counter = () => {
    total.innerText = lists.children.length;
    doneTotal.innerText = [...lists.querySelectorAll(".form-check-input")].filter(el => el.checked == true).length;
    
}



//process 

addList.addEventListener("click",(event)=> {
    event.preventDefault();
    if(inputText.value){
        createLi(inputText.value);
        inputText.value = null;
        counter();
    }
});

inputText.addEventListener("keyup",(event) => {
    if(event.keyCode === 13){
        if(inputText.value){
            createLi(inputText.value);
            inputText.value = null;
            counter();
        }
    }
})

app.addEventListener("click",event => {
    if(event.target.classList.contains("delBtn")){
        if(confirm("Are you sure to Delete?")){
            event.target.closest("li").remove()
        counter();
        }
    }
    if(event.target.classList.contains("editBtn")){
        const oldValue = lists.querySelector(".form-label");
        // console.log(oldValue)
        const newValue = prompt("Do You Want to Edit?",oldValue.innerText);
        // console.log(newValue);
        if(newValue){
            oldValue.innerText = newValue ;
           
        }
    };
    

});

