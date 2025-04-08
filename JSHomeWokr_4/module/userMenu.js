export const handleUserMenu = (currentUser) => {
    const userMenu = document.getElementById("userMenu");
    const userButton = document.getElementById("userButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const logoutButton = document.getElementById("logoutButton");

    if (currentUser) {
        if (userMenu) {
            userMenu.classList.remove("hidden");
        }

        if (userButton) {
            userButton.addEventListener("click", () => {
                dropdownMenu.classList.toggle("hidden");
            });
        }

        if (logoutButton) {
            logoutButton.addEventListener("click", () => {
                localStorage.removeItem("user");
                window.location.href = "login.html";
            });
        }
    }
};