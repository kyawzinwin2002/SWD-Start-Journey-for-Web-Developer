//variables

const fonts = ["Tahoma","Gadget","Courier","Impact"];
// console.log(fonts)

//selectors

const output = document.querySelector("#output");
const count = document.querySelector("#count");
const input = document.querySelector("#input");
const fontFamily = document.querySelector("#fontFamily");
const fontColor = document.querySelector("#fontColor");
const fontSize = document.querySelector("#fontSize");
const textToSpeech = document.querySelector("#textToSpeech");
const speechToText = document.querySelector("#speechToText");
const synth = window.speechSynthesis;


//functions

fonts.forEach((font) => {
    fontFamily.append(new Option(font,font))
})

const speak = (text) => {
    const utterThis = new SpeechSynthesisUtterance();
    utterThis.text = text;
    utterThis.voice = synth.getVoices()[0];
    utterThis.rate = 0.8;
    synth.speak(utterThis);
}

const listen = () => {
    const recognition = new window.webkitSpeechRecognition();
    
    recognition.lang = "en-US";

    recognition.addEventListener("start",()=>{
        speechToText.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>`
    })

    recognition.addEventListener("end",()=>{
        speechToText.innerHTML=`<i class="bi bi-mic"></i>`
    })
   
      recognition.start();
      recognition.onresult = event => {
        var transcript = event.results[0][0].transcript;
        input.value += transcript;}
    
}



//process

input.addEventListener("keyup",event => {
    output.innerText = input.value;
    count.innerText = input.value.length
});

fontFamily.addEventListener("change",event => {
    output.style.fontFamily = fontFamily.value
});

fontColor.addEventListener("change",event => {
    output.style.color = fontColor.value;
})

fontSize.addEventListener("change",event => {
    output.style.fontSize = fontSize.value +"px";
});

textToSpeech.addEventListener("click",event => {
    speak(input.value)
});

speechToText.addEventListener("click",() => {
    listen()
})

