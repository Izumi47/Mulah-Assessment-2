document.addEventListener("DOMContentLoaded", function () {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Display user data on Page 3
    const phoneNumberElement = document.querySelector("#phone-number");
    const nameElement = document.querySelector("#name");
    const birthdayElement = document.querySelector("#birthday");
    const emailElement = document.querySelector("#email");

    phoneNumberElement.textContent = "+60173527250";
    nameElement.textContent = userData.name;
    birthdayElement.textContent = userData.birthday;
    if(emailElement.textContent = userData.email) {
        emailElement.textContent = userData.email;
    } else {
        emailElement.textContent = "(None)";
    }
});
