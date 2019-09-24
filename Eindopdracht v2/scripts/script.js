console.log("Gekoppelt");

var menuButton = document.querySelector("#hamburgerknop");
var ul = document.querySelector(".mobielnavul");

menuButton.addEventListener("click", function(){
    ul.classList.toggle("active");
});
