const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img")

let currentimg = 1;
let timeout;

nextEl.addEventListener("click", ()=>{
    currentimg++;
    clearTimeout(timeout);
    updateImg();
});

prevEl.addEventListener("click", ()=>{
    currentimg--;
    clearTimeout(timeout);
    updateImg()
})
updateImg()
function updateImg(){
    if(currentimg > imgsEl.length){
        currentimg = 1;
    }else if(currentimg < 1){
        currentimg = imgsEl.length;
    }
    imageContainerEl.style.transform = `translateX(-${(currentimg-1)*500}px)`
    timeout = setTimeout(()=>{
        currentimg++;
        updateImg()
    }, 3000)
}
