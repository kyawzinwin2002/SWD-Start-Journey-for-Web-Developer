//selectors

const mother = document.querySelector("#mother");
const choose = document.querySelector("#choose");
const output = document.querySelector("#output");
const createBtn = document.querySelector("#createBtn");
const result = document.querySelector("#result")

//functions

const createCarousel = (photoList) => {
  const id = "carousel" + Date.now();
    const carousel = document.createElement("div");
    carousel.className="carousel slide";
    carousel.id = id;
    let slides = ""
    let indicators = ""
    photoList.forEach((photo, index) => {
      slides += ` <div class="carousel-item ${index === 0 && "active"}">
      <img src="${photo}" class="d-block w-100 " alt="...">
      </div>`;
      indicators += `<button type="button" ${
        index === 0 && 'class="active"'
      } data-bs-target="#${id}" data-bs-slide-to="${index}" aria-label="Slide 2"></button>`;
    });
  
    carousel.innerHTML = `
      <div class="carousel-indicators">
         ${indicators}
      </div>
      <div class="carousel-inner">
          ${slides}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
      </button>
      `;
  
    result.append(carousel);
  };
  

//process

choose.addEventListener("click",() => {
  mother.click()
});

mother.addEventListener("change",(event) => {
  [...event.target.files].forEach(file => {
    const fileReader = new FileReader();
    const img = new Image();
    img.classList.add("photo","me-2")
  fileReader.addEventListener("load",(event)=>{
      img.src = event.target.result;
      output.append(img)
    })
    fileReader.readAsDataURL(file);
  })
  
});

createBtn.addEventListener("click",event => {
  const allPhotos = [...document.querySelectorAll(".photo")];
  createCarousel(allPhotos.map(el => el.src))
})

choose.addEventListener("dragover",(event) => {
  event.preventDefault()
  // console.log(event)
})

choose.addEventListener("drop",(event) => {
  event.preventDefault();
  console.log(event.dataTransfer.files);  
  [...event.dataTransfer.files].forEach(file => {
    const fileReader = new FileReader();
    const img = new Image();
    img.classList.add("photo","me-2")
  fileReader.addEventListener("load",(event)=>{
      img.src = event.target.result;
      output.append(img)
    })
    fileReader.readAsDataURL(file);
  })
  
})