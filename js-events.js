//add onclick with  direct function
function makeBlue() {
  document.body.style.background = "blue";
}

//optioon 2 with adEventLisener
const make_red = document.getElementById("make-red");
make_red.addEventListener("click", function makeRed() {
  document.body.style.background = "red";
});

// <!--option 3 make make-yellow with inline js -->
//     <button onclick="document.body.style.background= 'yellow'" type="">make-yellow with inline js</button>

// Option 4
const make_Tomato = document.getElementById("make-tomato");
make_Tomato.onclick = makeTomato;
function makeTomato() {
  document.body.style.background = "tomato";
}
