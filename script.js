const img = document.querySelector(".img");
const imgH2 = document.querySelector("h2");
const imgP = document.querySelector(".text");
const imgArrow = document.querySelector(".arrow");
const imgScroll = document.querySelector(".scroll");




window.addEventListener("scroll", animateDom);

function animateDom(e) {


    let offset = (imgH2.getBoundingClientRect().top - window.innerHeight) / 9;

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
