//variables
const services = [
    {
        id : 1,
        title : "Domain Hosting",
        price : 15
    },
    {
        id : 2,
        title : "Web Design",
        price : 150
    },
    {
        id : 3,
        title : "Web Development",
        price : 100
    },
    {
        id : 4,
        title : "Maintenance",
        price : 30
    },
];

//selectors

const selectServices = document.querySelector("#selectServices");
const quantity = document.querySelector("#quantity");
const addInvoice = document.querySelector("#addInvoice");
const subTotal = document.querySelector("#subTotal");
const tax = document.querySelector("#tax");
const total = document.querySelector("#total");
const lists = document.querySelector("#lists");
const app = document.querySelector(".app");
const table = document.querySelector("table");
const openClose = document.querySelectorAll("#openClose");
const addBtn = document.querySelector("#addBtn");
const addServiceModal = document.querySelector("#addServiceModal");


//function

services.forEach(service => {
    selectServices.append(new Option(service.title,service.id));
});

const createTr = (service,quantity) => {
    const tr = document.createElement("tr");
    tr.className = "rowList";
    tr.setAttribute("dynamicIndex",service.id)
    const total = service.price * quantity
    tr.innerHTML = ` <td class="d-flex justify-content-between">${service.title} <i class="bi bi-trash3 del-btn text-danger"></i></td>
    <td class="text-end list-quantity">${quantity}</td>
    <td class="text-end ">${service.price}</td>
    <td class="text-end list-total">${total}</td>`
    return tr;
};

const findTax = (amount,percentage=5) => {
    const result = amount * (percentage/100)
    return result
};

const findTotal = () => {
    subTotal.innerText = [...document.querySelectorAll(".list-total")].reduce((pv,cv) => pv + parseFloat(cv.innerText),0);

    tax.innerText = findTax(subTotal.innerText)

    total.innerText = parseFloat(subTotal.innerText)+ parseFloat(tax.innerText)
};

const showTable = () => {
    if(lists.children.length){
        table.classList.remove("d-none")
    }else {
        table.classList.add("d-none")
    }
}

//process

addInvoice.addEventListener("submit",event => {

    event.preventDefault();

    const selectedService = services.find(service => service.id == selectServices.value);

    const isExistedService = [...lists.children].find(el => el.getAttribute("dynamicIndex") == selectedService.id);

    if(isExistedService){
        isExistedService.querySelector(".list-quantity").innerText = parseFloat(isExistedService.querySelector(".list-quantity").innerText) + quantity.valueAsNumber;

        isExistedService.querySelector(".list-total").innerText = parseFloat(isExistedService.querySelector(".list-quantity").innerText) * selectedService.price
    }else {

        lists.append(createTr(selectedService,quantity.valueAsNumber));
    }
    findTotal()
    showTable()
   addInvoice.reset()
       
    
});

app.addEventListener("click",event => {
    if(event.target.classList.contains("del-btn")){
        event.target.closest("tr").remove()
        findTotal()
        showTable()
    };
    if(event.target.classList.contains("print")){
        print()
    }

});

openClose.forEach(el => {
    el.addEventListener("click",(event)=>{
        document.querySelector(".mother").classList.toggle("active")
    })
});

addServiceModal.addEventListener("submit",event => {
    event.preventDefault()
    const data = new FormData(event.target);
    // console.log(event.target)
    const id = Date.now();
    services.push(
        {
            id,
            title : data.get("serviceTitle"),
            price : data.get("servicePrice")
        }
    )

    selectServices.append(new Option(data.get("serviceTitle"),id))

    addServiceModal.reset()
})