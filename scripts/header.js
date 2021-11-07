const burger = document.querySelector('.burger-icon');
const burgerFunction = () => {
    document.body.classList.add("lock");
    const navOpenMenu = document.querySelector('.nav-open');
    navOpenMenu.innerHTML +=
            `    
            <a href="#">About</a>
            <a href="#">Gallery</a>
            <a href="#">Accommodation</a>
            <a href="#">How to get there</a>
            <div>
                <div>Yosemite Mariposa</div>
                <div>County, Ca, USA</div>
            </div>
            <div>
                <div>+1 (234) 567 89 00</div>
                <div>+1 (234) 567 89 01</div>
            </div>
            `
};
burger.addEventListener("click", burgerFunction);
    