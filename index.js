document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting until validation is complete

    let isValid = true; // This will track whether the form is valid

    // Validate Full Name
    const fullName = document.getElementById("fullName").value;
    if (fullName.length < 2) {
        document.getElementById("fullNameError").textContent = "Full name must be at least 2 characters.";
        isValid = false;
    } else {
        document.getElementById("fullNameError").textContent = "";
    }

    // Validate Address (basic check)
    const address = document.getElementById("address").value;
    if (address.length < 5) {
        document.getElementById("addressError").textContent = "Address must be more detailed.";
        isValid = false;
    } else {
        document.getElementById("addressError").textContent = "";
    }

    // Validate Email Address
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Validate Password
    const password = document.getElementById("password").value;
    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // Validate Birth Date
    const birthDate = document.getElementById("birthDate").value;
    if (!birthDate) {
        document.getElementById("birthDateError").textContent = "Please enter your birth date.";
        isValid = false;
    } else {
        document.getElementById("birthDateError").textContent = "";
    }

    // Validate Gender
    const gender = document.getElementById("gender").value;
    if (!gender) {
        document.getElementById("genderError").textContent = "Please select your gender.";
        isValid = false;
    } else {
        document.getElementById("genderError").textContent = "";
    }

    // If all fields are valid, you can submit the form or do something else
    if (isValid) {
        // Here you could also use AJAX to submit the form data asynchronously
        alert("Form is valid, submitting...");
        // Example: document.getElementById("registrationForm").submit(); or use AJAX call
    }
});
