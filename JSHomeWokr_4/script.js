document.addEventListener("DOMContentLoaded", () => {
    const userMenu = document.getElementById("userMenu");
    const userButton = document.getElementById("userButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const logoutButton = document.getElementById("logoutButton");

    const profileUsername = document.getElementById("profileUsername");
    const profileEmail = document.getElementById("profileEmail");

    const loginForm = document.getElementById("loginForm");
    const registrationForm = document.getElementById("registrationForm");

    // Отримання даних користувача з localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    // Відображення даних у профілі
    if (user) {
        if (profileUsername && profileEmail) {
            profileUsername.textContent = user.username || "Невідомий користувач";
            profileEmail.textContent = user.email || "Невідомий email";
        }

        // Відображення меню користувача
        if (userMenu) {
            userMenu.classList.remove("hidden");
        }
    } else {
        // Якщо користувач не залогінений і це сторінка профілю, перенаправляємо на сторінку входу
        if (profileUsername || profileEmail) {
            window.location.href = "login.html";
        }
    }

    // Випадаюче меню
    if (userButton) {
        userButton.addEventListener("click", () => {
            dropdownMenu.classList.toggle("hidden");
        });
    }

    // Логіка виходу
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("user");
            window.location.href = "login.html";
        });
    }

    // Логіка реєстрації
    if (registrationForm) {
        registrationForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Запобігає перезавантаженню сторінки

            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Збереження даних у localStorage
            localStorage.setItem("user", JSON.stringify({ username, email, password }));
            alert("Реєстрація успішна!");
            window.location.href = "login.html"; // Перенаправлення на сторінку входу
        });
    }

    // Логіка входу
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Запобігає перезавантаженню сторінки

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Перевірка даних користувача
            if (user && user.email === email && user.password === password) {
                alert("Вхід успішний!");
                window.location.href = "profile.html"; // Перенаправлення на сторінку профілю
            } else {
                alert("Невірний email або пароль!");
            }
        });
    }
});