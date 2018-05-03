var ico = document.querySelector(".ico");
var icoB = document.querySelector(".ico-B");
var out = document.querySelector(".h2");
var outB = document.querySelector(".h3");
var counter = 1;  
var counter2 = 1;
// heart icon
ico.addEventListener("click", function() {
  this.classList.add("goes");
     countNumber()
  out.classList.add("big")
});

// finger icon
icoB.addEventListener("click", function() {
  console.log("dziala")
  this.classList.add("goes");
      countNumberSecond()
  outB.classList.add("big")
});

// remove class after 400ms
ico.addEventListener("click", function() {
  if (ico.classList.contains("goes")) {
    setTimeout(function() {
      ico.classList.remove("goes");
        out.classList.remove("big");
    }, 400);
  } else {
    console.log("nie wywołało się");
  }
});

icoB.addEventListener("click", function() {
  if (icoB.classList.contains("goes")) {
    setTimeout(function() {
      icoB.classList.remove("goes");
        outB.classList.remove("big");
    }, 400);
  } else {
    console.log("nie wywołało się");
  }
});

function countNumber(){
  counter ++;
  if(counter){
   out.style.color="red";
  }
  console.log(counter)
  out.innerHTML = counter;
}
function countNumberSecond(){
  counter2 ++;
  if(counter2){
   outB.style.color="Chocolate ";
  }
  console.log(counter2)
  outB.innerHTML = counter2;
}
