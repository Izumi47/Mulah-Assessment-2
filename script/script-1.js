document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("#phone-number");
    const iti = window.intlTelInput(input, {
        preferredCountries: ["my"],
        separateDialCode: true,
        // Import cloudflare country code
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    const validIcon = document.querySelector("#valid-icon");
    const form = document.querySelector(".phone-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const phoneNumber = iti.getNumber();
        const isValid = iti.isValidNumber();

        if (isValid && phoneNumber === "+60173527250") {
            // Redirect to Page 2
            window.location.href = "page-2.html";
        } else {
            validIcon.innerHTML = "";
            validIcon.style.color = "";
            input.style.borderBottom = "1px solid #f37521";
        }
    });

    // Only allow numerical input
    input.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, '');
    });
});
