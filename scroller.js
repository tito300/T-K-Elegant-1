export let scroller = function(controller, divsClass){

var secs = document.querySelectorAll("." + divsClass);
var currentSection = 0;
document.querySelector(controller).addEventListener('click', move, true);

function move(e) {
    // debugger;
    // added this to prevent having to double click on first section before scrolling.
    // console.log(secs[1]);
    /*if (e.target.classList.contains('next') && currentSection === 0) {

        currentSection++;
        secs[currentSection].scrollIntoView({behavior: 'smooth'});
    } else */ if (e.target.classList.contains('next') && currentSection < secs.length) {
        console.log("fired");
        // debugger;
         secs[++currentSection].scrollIntoView({ behavior: 'smooth' });}

    else if (e.target.classList.contains('next') && currentSection === secs.length){

        currentSection = 1;

    }   
    
    // Same as above but for last section
    else if (e.target.classList.contains('previous') && currentSection === secs.length) {
        // debugger;
        currentSection--;
        secs[--currentSection].scrollIntoView({behavior: 'smooth'});
    }  else if (e.target.classList.contains('previous') && currentSection > 0) {
        // debugger;
        currentSection--
        secs[--currentSection].scrollIntoView({ behavior: 'smooth'});
  }
}

// Event to to run a function while scrolling to check for each section position
window.addEventListener("scroll", updateCurrent);



function updateCurrent(e) {

 // function that runs on each section while scrolling. 
  secs.forEach(function(c){
    
    // check if more than half of the section is in view then update the currentSection to reflect that
    if (c.getBoundingClientRect().top < (c.clientHeight/10)  &&  c.getBoundingClientRect().top > (-c.clientHeight/10))  {
        // console.log(c.getBoundingClientRect());
        // console.log(c.id);
        currentSection = parseInt(c.id); 
        // console.log(currentSection);

    }
  })
}
}