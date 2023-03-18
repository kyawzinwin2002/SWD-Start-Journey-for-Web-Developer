// // const h1 = document.getElementsByTagName("h1")[0]

// // console.log(h1.title)
// // console.log(h1.style)
// // console.log(h1.innerText)

// // const btn = document.querySelector("#btn")

// // Function
// const showAlert = (event,text) => {
//     alert(text);
// }

// // process



// // btn.addEventListener("click",showAlert.bind(null,event,"nay kg thwr p lrr"))




// const h1 = document.querySelector(".one")
// //mouse event

// // h1.addEventListener(`mouseenter`,()=> console.log("mouseenter event"))
// // h1.addEventListener(`mouseout`,()=> console.log("mouseout event"))
// h1.addEventListener(`click`,(e)=> console.log(e,"mousemove event"))

// const input = document.querySelector("input")
// //keyboard event

// // input.addEventListener(`keydown`,()=>console.log('keydown event'))
// // input.addEventListener(`keypress`,()=>console.log('keypress event'))
// // input.addEventListener(`keyup`,()=>console.log('keyup event'))
// // input.addEventListener("focus",()=>console.log("focus event"))
// // input.addEventListener("blur",()=>console.log("blur event"))

// const select = document.querySelector("#select");
// //Change Event

// select.addEventListener("change",()=>console.log("change Event"))


// const form = document.querySelector("form")
// //submit event
// form.addEventListener("submit",()=>console.log("submit event"))

// //scroll/load event

// window.addEventListener("scroll",()=>console.log("scroll event"))

// document.querySelector("#box").addEventListener("scroll",() => console.log("divscroll"))

// window.addEventListener("load",()=>console.log("window loaded"))

// console.log("one")

// //e.preventDefault() event

// btn.onclick = showAlert.bind(null,event.preventDefault(),"MIn ga lar par")

//this keyword in Event

const input = document.querySelector("input")

input.addEventListener("change",e => {
    console.log(e.target.valueAsDate)
})



