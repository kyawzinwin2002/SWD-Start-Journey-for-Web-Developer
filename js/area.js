// selectedElement
const result = document.getElementById("result");
const store = document.getElementById("store");
const clear = document.getElementById("clear");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const calculate = document.getElementById("calculate");
const list = document.getElementById("list")

// Functions

const clearResult = () => {result.innerText = null;}

const clacArea = () => {
    const area = width.valueAsNumber * breadth.valueAsNumber;
    result.innerText = `W : ${width.value}ft * B : ${breadth.value}ft = ${area} sqft`;
    width.value = breadth.value = null;
    
};

const storeRecord = () => {
    list.innerHTML += `<li>${result.innerText}</li>`;
    clearResult();
}


// Process

calculate.onclick = clacArea;

clear.onclick = clearResult;

store.onclick = storeRecord;





