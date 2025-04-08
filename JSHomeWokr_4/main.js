import { fetchUsers } from './module/fetchUsers.js';
import { checkAdminRole } from './module/checkAdminRole.js';
import { handleUserMenu } from './module/userMenu.js';
import { handleRegistration } from './module/registration.js';
import { handleLogin } from './module/login.js';

document.addEventListener("DOMContentLoaded", async () => {
    const users = await fetchUsers();
    const currentUser = JSON.parse(localStorage.getItem("user"));

    // Перевірка ролі користувача
    checkAdminRole(currentUser, users);

    // Логіка меню користувача
    handleUserMenu(currentUser);

    // Логіка реєстрації
    handleRegistration();

    // Логіка входу
    handleLogin();
});