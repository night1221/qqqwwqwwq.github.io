// Функція для оновлення кількості гравців
function updatePlayerCount() {
    // Отримуємо поточну кількість гравців з localStorage або 0, якщо вона не існує
    let playerCount = localStorage.getItem('playerCount') || 0;
    
    // Збільшуємо кількість гравців на 1
    playerCount = parseInt(playerCount) + 1;

    // Зберігаємо оновлену кількість гравців у localStorage
    localStorage.setItem('playerCount', playerCount);

    // Оновлюємо текст на сторінці
    document.getElementById('players').innerText = `${playerCount}/6`;
}

// Викликаємо функцію для оновлення рахунку при завантаженні сторінки
window.onload = updatePlayerCount;
