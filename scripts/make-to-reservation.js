const makeToReservation = document.querySelector(".make-to-reservation-background");
makeToReservation.innerHTML += `<div class="wrap-for-make-to-reservation-content">
<div class="make-to-reservation-content container">
    <h2 class="allerta-font make-to-reservation-title">Make a reservation</h2>
    <span class="roboto-font make-to-reservation-description">Please complete the form below</span>
    <form class="make-to-reservation-form" action="https://formspree.io/f/myylrqnl" method="POST">
        <p><input class="make-to-reservation-form-item make-to-reservation-form-item-flex" required
                name="name" placeholder="Name*"></p>
        <p><input class="make-to-reservation-form-item make-to-reservation-form-item-flex" required
                name="phone number" type="tel" placeholder="Phone number*"></p>
        <p><input class="make-to-reservation-form-item make-to-reservation-form-item-flex"
                name="check in date" placeholder="Check in date"></p>
        <p><input class="make-to-reservation-form-item make-to-reservation-form-item-flex"
                name="check out date" placeholder="Check out date"></p>
        <p class="make-to-reservation-form-item-p-select-guests"><select
                class="make-to-reservation-form-item-select-guests" name="quality of guests">
                <option value="" disabled selected hidden>Number of guests</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="5+">5+</option>
            </select>
            <span class="make-to-reservation-form-guest-list-down">&#9660</span>
        </p>
        <button class="make-a-reservation-form-button" type="submit">make a reservation</button>
    </form>
</div>
</div>`