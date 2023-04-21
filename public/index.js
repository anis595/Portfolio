const btnMobile = document.querySelector("span.mobile-menu-button");
const menuMobile = document.querySelector("#navbar-solid");
btnMobile.addEventListener("click", () => {
  menuMobile.classList.toggle("hidden");
});

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);
function toggleModal() {
  modalContainer.classList.toggle("active");
}
