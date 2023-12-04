document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.querySelector("#email");
    const emailAlert = document.querySelector("#email-alert");
    const allowEmptyEmailCheckbox = document.querySelector("#allow-empty-email");
    const submitButton = document.querySelector("#submit-button");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.querySelector("#name").value;
        const day = document.querySelector("#day").value;
        const month = document.querySelector("#month").value;
        const year = document.querySelector("#year").value;
        const email = emailInput.value;

        // Check if inputs are empty and display alerts
        const nameAlert = document.querySelector("#name-alert");
        const birthdayAlert = document.querySelector("#birthday-alert");

        nameAlert.textContent = "";
        birthdayAlert.textContent = "";
        emailAlert.textContent = "";

        if (name.trim() === "") {
            nameAlert.textContent = "*Please insert a name.";
        }
        if (day.trim() === "" || month.trim() === "" || year.trim() === "") {
            birthdayAlert.textContent = "*Please insert your birthday.";
        }
        
        if (!allowEmptyEmailCheckbox.checked && email.trim() === "") {
            emailAlert.textContent = "*Please insert a valid email address.";
        }

        // If all required fields are filled, store data in localStorage and redirect
        if (name && day && month && year && (allowEmptyEmailCheckbox.checked || email)) {
            const userData = {
                name,
                birthday: `${day}/${month}/${year}`,
                email,
            };
            localStorage.setItem("userData", JSON.stringify(userData));
            window.location.href = "page-3.html";
        }
    });

    // Disable the email input field if the checkbox is checked
    allowEmptyEmailCheckbox.addEventListener("change", function () {
        emailInput.disabled = this.checked;
        if (this.checked) {
            emailAlert.textContent = "";
        }
    });
});
