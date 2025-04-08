export const handleRegistration = () => {
    const registrationForm = document.getElementById("registrationForm");

    if (registrationForm) {
        registrationForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            localStorage.setItem("user", JSON.stringify({ username, email, password }));
            alert("Реєстрація успішна!");
            window.location.href = "login.html";
        });
    }
};