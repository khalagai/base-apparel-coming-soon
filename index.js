document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form1");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        validateForm();
    });

    const validateForm = () => {
        const email = document.getElementById("email").value;
        const error = document.getElementById("error");
        const success = document.getElementById("success");
        const iconError = document.getElementById("icon-error");

        let isValid = true;

        if (!email) {
            error.style.display = "block";
            iconError.style.display = "block";
            isValid = false;
        } else {
            error.style.display = "none";
            iconError.style.display = "none";
        }

        if(isValid) {
            success.style.display = "block";
            form.reset();
        }
    }
});
