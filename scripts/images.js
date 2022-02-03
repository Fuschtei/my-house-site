const card = document.querySelectorAll('.card-item-image');
const modalPhotoWindow = document.querySelector(".modal-photo-window");
const closeModalButton = document.querySelector(".close-modal-button");
const zoomInModalButton = document.querySelector(".zoom-in-modal-button");
const zoomOutModalButton = document.querySelector(".zoom-out-modal-button");
const modalTopPanel = document.querySelector(".modal-top-panel");
const darkBackground = document.querySelector(".dark-background");




card.forEach(function (i) {
    i.addEventListener("click", (event) => {
        modalPhotoWindow.classList.remove("display-none");
        modalTopPanel.classList.remove("display-none");
        darkBackground.classList.remove("display-none");

        let target = event.target.id;
        let width = 100;
        zoomInModalButton.addEventListener("click", () => {
            width += 50;
            console.log(width)
            return width;
        })
        zoomOutModalButton.addEventListener("click", () => {
            width -= 50;
            console.log(width)
            return width;
        })

        if (target == `houses-on-hill-img`) {
            function housesOnHillImg() {
                modalPhotoWindow.innerHTML = `<img
            class="big-modal-img"
            style="
            width:${width}%;
            "
            src="./images/images-for-zoom/houses-on-hill.jpeg"
            alt="houses on hill">`}
            setInterval(housesOnHillImg, 100)
        }
        else if (target == `street-in-village-img`) {
            function streetInVillageImg() {
                modalPhotoWindow.innerHTML = `<img
            class="big-modal-img"
            style="
            width:${width}%;
            "
            src="./images/images-for-zoom/street-in-village.jpeg"
            alt="street in village">`}
            setInterval(streetInVillageImg, 100)
        }
        else if (target == `big-house-img`) {
            function bigHouseImg() {
                modalPhotoWindow.innerHTML = `<img
            class="big-modal-img"
            style="
            width:${width}%;
            "
            src="./images/images-for-zoom/big-house.jpeg"
            alt="big house">`}
            setInterval(bigHouseImg, 100)
        }
        else if (target == `lake-img`) {
            function lakeImg() {
                modalPhotoWindow.innerHTML = `<img
            class="big-modal-img"
            style="
            width:${width}%;
            "
            src="./images/images-for-zoom/lake.jpeg"
            alt="lake">`}
            setInterval(lakeImg, 100)
        }
        else if (target == `mountains-img`) {
            function mountainsImg() {
                modalPhotoWindow.innerHTML = `<img
            class="big-modal-img"
            style="
            width:${width}%;
            "
            src="./images/images-for-zoom/mountains.jpeg"
            alt="mountains">`}
            setInterval(mountainsImg, 100)
        }
        else if (target == `house-by-the-river-img`) {
            function houseByTheRiverImg() {
                modalPhotoWindow.innerHTML = `<img
            class="big-modal-img"
            style="
            width:${width}%;
            "
            src="./images/images-for-zoom/house-by-the-river.jpeg"
            alt="house by the river">`}
            setInterval(houseByTheRiverImg, 100)
        }
    });
});

setInterval(500)

closeModalButton.addEventListener("click", () => {
    modalTopPanel.classList.add("display-none");
    modalPhotoWindow.classList.add("display-none");
    darkBackground.classList.add("display-none");
});
