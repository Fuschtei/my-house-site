const card = document.querySelectorAll('.card-item-image');
const modalPhotoWindow = document.querySelector(".modal-photo-window");
const closeModalButton = document.querySelector(".close-modal-button");
const modalTopPanel = document.querySelector(".modal-top-panel");
const darkBackground = document.querySelector(".dark-background");

card.forEach(function (i) {
    i.addEventListener("click", () => {
        // document.body.classList.add("page-dark");
        modalPhotoWindow.classList.remove("display-none");
        modalTopPanel.classList.remove("display-none");
        darkBackground.classList.remove("display-none");
    });
});

closeModalButton.addEventListener("click", () => {
    modalTopPanel.classList.add("display-none");
    modalPhotoWindow.classList.add("display-none");
    darkBackground.classList.add("display-none");
});
