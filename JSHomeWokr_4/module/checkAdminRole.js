export const checkAdminRole = (currentUser, users) => {
    const adminPanelLink = document.createElement("a");
    adminPanelLink.href = "admin.html";
    adminPanelLink.textContent = "Адмін панель";
    adminPanelLink.className = "text-gray-700 hover:text-blue-500 hidden";
    document.querySelector(".flex.items-center.space-x-4").appendChild(adminPanelLink);

    if (currentUser) {
        const user = users.find(
            (u) => u.email === currentUser.email && u.password === currentUser.password
        );

        if (user && user.role === "admin") {
            adminPanelLink.classList.remove("hidden");
        }
    }
};