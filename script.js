import {scroller} from './scroller.js'


const img = document.querySelector(".img");
const imgH2 = document.querySelector("h2");
const imgP = document.querySelector(".text");
const imgArrow = document.querySelector(".arrow");
const imgScroll = document.querySelector(".scroll");
const discoverBtn = document.querySelector(".btn");

scroller("body", "section");


window.addEventListener("scroll", animateDom);

function animateDom(e) {


    let offset = (imgH2.getBoundingClientRect().top - window.innerHeight) / 7;

    // console.log(window.scrollY);

        if (imgH2.getBoundingClientRect().top - window.innerHeight <= -100) {

            imgH2.classList.add("slidein");
            imgP.classList.add("slidein");
            
        } else if (imgH2.getBoundingClientRect().top - window.innerHeight >= 20) {

            imgH2.classList.remove("slidein");
            imgP.classList.remove("slidein");
        }

        if ( imgH2.getBoundingClientRect().top - window.innerHeight <= 0) {

            img.style.backgroundPositionY = 100 + offset + "px";
        }

        if (window.scrollY > 10) {
            // debugger;
            // console.log(imgArrow);
            imgArrow.style.display = "none";
            imgScroll.style.display = "none";
        } else if (window.scrollY < 10) {

           setTimeout(()=> {imgArrow.style.display = "block";  imgScroll.style.display = "block"}, 1000)
        }
        }


discoverBtn.addEventListener("click", openBoxModel)
document.querySelector(".contact").addEventListener("click", openBoxModel);
document.querySelectorAll(".model").forEach((c)=> {c.addEventListener("click", closeModelBox)});
const cU = document.querySelector(".contact-us");
const model = document.querySelector(".model");

function openBoxModel(e) {
    // debugger;
    if(e.target.classList.contains("contact")) {
        // debugger;
        cU.style.display = "flex";
        cU.classList.remove("hideAfter");
        cU.classList.add("show-flex");  
    } else {

        model.style.display = "flex";
        model.classList.remove("hideAfter");
        model.classList.add("show-flex");    
    }
}




function closeModelBox(e) {

    console.log("click");
    // debugger;
    if (e.target.classList.contains("x") || e.target.classList.contains("model")) {
        // debugger;
        document.querySelector(".model").style.display = "none";
        document.querySelector(".contact-us").style.display = "none";


    }
    
    // document.querySelector(".model").classList.remove("show-flex");
    // document.querySelector(".model").classList.add("hideAfter");
}
