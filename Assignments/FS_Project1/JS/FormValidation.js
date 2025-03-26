document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let errorMessage = document.getElementById("errorMessage");

        if (name === "" || email === "" || message === "") {
            errorMessage.style.display = "block";
            e.preventDefault();
            return;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errorMessage.textContent = "Enter a valid email address.";
            errorMessage.style.display = "block";
            e.preventDefault();
            return;
        }

        errorMessage.style.display = "none";
    });
});
