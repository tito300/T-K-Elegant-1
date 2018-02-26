const img = document.querySelector(".img");
const imgH2 = document.querySelector("h2");
const imgP = document.querySelector(".text");




window.addEventListener("scroll", animateDom);

function animateDom(e) {


    let offset = (imgH2.getBoundingClientRect().top - window.innerHeight) / 9;

    console.log(offset);

        if (imgH2.getBoundingClientRect().top - window.innerHeight <= -60) {

            imgH2.classList.add("slidein");
            imgP.classList.add("slidein");
            
        } else if (imgH2.getBoundingClientRect().top - window.innerHeight >= 20) {

            imgH2.classList.remove("slidein");
            imgP.classList.remove("slidein");
        }

        if ( imgH2.getBoundingClientRect().top - window.innerHeight <= 0) {

            img.style.backgroundPositionY = 100 + offset + "px";
        }
        }
