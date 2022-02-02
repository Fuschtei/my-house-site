const card = document.querySelectorAll('.card-item-image');
const modalPhotoWindow = document.querySelector(".modal-photo-window");
const closeModalButton = document.querySelector(".close-modal-button");
const modalTopPanel = document.querySelector(".modal-top-panel");
const darkBackground = document.querySelector(".dark-background");

// card.forEach(function (i) {
//     i.addEventListener("click", () => {
//         // document.body.classList.add("page-dark");
//         modalPhotoWindow.classList.remove("display-none");
//         modalTopPanel.classList.remove("display-none");
//         darkBackground.classList.remove("display-none");
//     });
// });

card.forEach(function (i) {
    i.addEventListener("click", (event) => {
        // document.body.classList.add("page-dark");
        modalPhotoWindow.classList.remove("display-none");
        modalTopPanel.classList.remove("display-none");
        darkBackground.classList.remove("display-none");

        let target = event.target.id;
        console.log(target);

        if (target == `houses-on-hill-img`) {
            modalPhotoWindow.innerHTML = `<img
            style="
            height:100%;
            width: 100%;
            overflow-x: hidden;
            "
            src="https://res2.weblium.site/res/5ce40621b84b1a002410eb9e/5ce425c34045b70023557d9f_optimized"
            alt="houses on hill">`
        }
        else if (target == `street-in-village-img`) {
            modalPhotoWindow.innerHTML = `<img
            style="
            height:100%;
            width: 100%;
            overflow-x: hidden;
            "
            src="https://res2.weblium.site/res/5ce40621b84b1a002410eb9e/5ce4246b72358b0023fc4948_optimized"
            alt="street in village">`
        }
        else if (target == `big-house-img`) {
            modalPhotoWindow.innerHTML = `<img
            style="
            height:100%;
            width: 100%;
            overflow-x: hidden;
            "
            src="https://res2.weblium.site/res/5ce40621b84b1a002410eb9e/5ce4259ec9f1c1002318991b_optimized"
            alt="big house">`
        }
        else if (target == `lake-img`) {
            modalPhotoWindow.innerHTML = `<img
            style="
            height:100%;
            width: 100%;
            overflow-x: hidden;
            "
            src="https://res2.weblium.site/res/5ce40621b84b1a002410eb9e/5ce423eadc5e3800248ca0ab_optimized"
            alt="lake">`
        }
        else if (target == `mountains-img`) {
            modalPhotoWindow.innerHTML = `<img
            style="
            height:100%;
            width: 100%;
            overflow-x: hidden;
            "
            src="https://res2.weblium.site/res/5ce40621b84b1a002410eb9e/5ce4221972358b0023fc470e_optimized"
            alt="mountains">`
        }
        else if (target == `house-by-the-river-img`) {
            modalPhotoWindow.innerHTML = `<img
            style="
            height:100%;
            width: 100%;
            overflow-x: hidden;
            "
            src="https://res2.weblium.site/res/5ce40621b84b1a002410eb9e/5ce420c7dc5e3800248c9cfe_optimized"
            alt="house by the river">`
        }
    });
});

closeModalButton.addEventListener("click", () => {
    modalTopPanel.classList.add("display-none");
    modalPhotoWindow.classList.add("display-none");
    darkBackground.classList.add("display-none");
});
