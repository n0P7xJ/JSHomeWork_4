export const handleLogin = (users) => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const user = users.find(
                (u) => u.email === email && u.password === password
            );

            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                alert("Вхід успішний!");
                window.location.href = "profile.html";
            } else {
                alert("Невірний email або пароль!");
            }
        });
    }
};