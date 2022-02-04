const card = document.querySelectorAll('.card-item-image');
const modalPhotoWindow = document.querySelector(".modal-photo-window");
const closeModalButton = document.querySelector(".close-modal-button");
const zoomInModalButton = document.querySelector(".zoom-in-modal-button");
const zoomOutModalButton = document.querySelector(".zoom-out-modal-button");
const zoom0ModalButton = document.querySelector(".zoom-0-modal-button");
const modalTopPanel = document.querySelector(".modal-top-panel");
const darkBackground = document.querySelector(".dark-background");




card.forEach(function (i) {
    i.addEventListener("click", (event) => {
        modalPhotoWindow.classList.remove("display-none");
        modalTopPanel.classList.remove("display-none");
        darkBackground.classList.remove("display-none");

        let target = event.target.id;
        let width = 100;
        let interval;
        zoomInModalButton.addEventListener("click", () => {
            width += 50;
            if (width <= 400) {
                return width;
            }
            else if (width > 400) {
                width = 400;
            }
        });

        zoomOutModalButton.addEventListener("click", () => {
            width -= 50;
            if (width >= 100) {
                return width;
            }
            else if (width < 100) {
                width = 100;
                return width;
            }
        });

        zoom0ModalButton.addEventListener("click", () => {
            width = 100;
            return width
        });

        let changePhoto = (func) => {
            interval = setInterval(func, 50)
        };


        function addImage() {
            modalPhotoWindow.innerHTML = `<img
        class="big-modal-img"
        style="
        width:${width}%;
        "
        src="./images/images-for-zoom/${target}.jpeg"
        alt="${target}">`
        }
        changePhoto(addImage);



        closeModalButton.addEventListener("click", () => {
            modalTopPanel.classList.add("display-none");
            modalPhotoWindow.classList.add("display-none");
            darkBackground.classList.add("display-none");
            modalPhotoWindow.innerHTML = "";
            clearInterval(interval);
        });
    });
});

