console.log("Gekoppelt");
var menuButton = document.querySelector("#hamburgerknop");
var ul = document.querySelector(".mobielnavul");

function uitklappen(){
    ul.classList.toggle("active");
}

menuButton.addEventListener("click", uitklappen);

//function(){
//    ul.classList.toggle("active");
//}
