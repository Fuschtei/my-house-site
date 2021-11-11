const header = document.querySelector("#header");
header.innerHTML += `


<div id="header-content-grid">
        <div class="container header-content">
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
                    <div class="places-font">Yosemite Mariposa</div>
                    <div class="places-font">County, Ca, USA</div>
                </div>
                <div class="numbers" id="header-numbers">
                    <div class="numbers-font">+1 (234) 567 89 00</div>
                    <div class="numbers-font">+1 (234) 567 89 01</div>
                </div>
            </div>
        </div>
    </div>`;


const burger = document.querySelector('.burger-icon');
const burgerFunction = () => {
    document.body.classList.toggle("lock-page");

    // const threeLine = document.querySelector('#three-line-icon');
    // threeLine.classList.toggle("lock-display");

    const navOpenMenu = document.querySelector('#nav-menu');
    navOpenMenu.classList.toggle("lock-display-980");
};
burger.addEventListener("click", burgerFunction);