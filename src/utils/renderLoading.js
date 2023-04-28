export default function renderLoading (isLoading, button) {
    if (isLoading) {
        if (button.textContent.length >= 9) {
            button.textContent = 'Сохранение...';
        } else {
            button.textContent = 'Создание...';
        }
  
    } else {
        if (button.textContent.length >= 12) {
            button.textContent = 'Сохранить';
        } else {
            button.textContent = 'Создать';
        }
    }
}