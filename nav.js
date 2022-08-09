function ChangeBg(color){
    document.body.style.backgroundColor = color ;
}
function Message(){
  alert("This Website is under development.")
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onscroll = function() {myFunction()};

let sticky = document.getElementById("sticky");
let sticky1 = sticky.offsetTop;
function myFunction() {
  if (window.pageYOffset >= 109) {
    sticky.classList.add("sticky")
  } else {
    sticky.classList.remove("sticky");
  }
}

function openMenu(){
document.getElementById("sticky").style.left ="0px"
}
function closeMenu(){
 document.getElementById("sticky").style.left = "-280px"
}