var modal = document.querySelector(".order__check");
var trigger = document.querySelector(".ordering-final__more");
var closeButton = document.querySelector(".order__check-close-btn");
var final = document.querySelector(".ordering-final");
var body = document.querySelector("body");

function toggleModal() {
    modal.classList.toggle("active");
    final.classList.toggle("final-hide");
    body.classList.toggle("remove-scroll");
	
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
