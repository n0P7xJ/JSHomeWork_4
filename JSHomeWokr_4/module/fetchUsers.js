export const fetchUsers = async () => {
    try {
        const response = await fetch("users.json");
        if (!response.ok) {
            throw new Error("Не вдалося завантажити дані користувачів");
        }
        return await response.json();
    } catch (error) {
        console.error("Помилка завантаження користувачів:", error);
        return [];
    }
};