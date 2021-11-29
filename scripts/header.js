let info = `{
    "name": "Yosemite Mariposa ",
    "place": "County, Ca, USA",
    "numbers": [
                {"forText": "+38 (067) 123 45 67",
                "forCall": "+380671234567"},
                {"forText": "+38 (050) 123 45 67",
                "forCall": "+380501234567"}
            ]
    }`;


let infoAboutUs = JSON.parse(info);

const header = document.querySelector("#header");
header.innerHTML += `
<div id="header-content-grid" class="container">
        <div class="header-content">
            <div class="logo-wrap" id="header-logo">
                <a class="image-logo-a" href="index.html">
                    <img class="image-logo" src="images/logo.JPG" alt="logo-image">
                </a>
            </div>
            <div id="three-line-icon" class="burger-icon threeLines">
                <div class="burger-icon-line"></div>
            </div>
        </div>
        <div class="lock-display-980" id="nav-menu">
            <div class="nav-open" id="header-nav-open">
                <div id="header-nav-links">
                    <a href="#" class="burger-link-font burger-link" id="header-about">About</a>
                    <a href="#" class="burger-link-font burger-link" id="header-galerry">Gallery</a>
                    <a href="#" class="burger-link-font burger-link" id="header-accommodation">Accommodation</a>
                    <a href="#" class="burger-link-font burger-link" id="header-how-to-get-there">How to get there</a>
                </div>
                <div class="places" id="header-places">
                    <div class="places-font">${infoAboutUs.name}</div>
                    <div class="places-font text-center">${infoAboutUs.place}</div>
                </div>
                <div class="numbers" id="header-numbers">
                <a class="numbers-font" href="tel:${infoAboutUs.numbers[0].forCall}">${infoAboutUs.numbers[0].forText}</a>
                <a class="numbers-font" href="tel:${infoAboutUs.numbers[1].forCall}">${infoAboutUs.numbers[1].forText}</a>
                </div>
            </div>
        </div>
    </div>
    <div id="clock"></div>`


const burger = document.querySelector('.burger-icon');
const burgerFunction = () => {
    document.body.classList.toggle("lock-page");

    const navOpenMenu = document.querySelector('#nav-menu');
    navOpenMenu.classList.toggle("lock-display-980");

    burger.classList.toggle("active");
};
burger.addEventListener("click", burgerFunction);