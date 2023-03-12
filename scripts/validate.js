
  function enableValidation(container) {
    const formList = Array.from(document.querySelectorAll(container.formSelector));
    
  
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
  
      setEventListeners(formElement, container);
    });
  }
  
  // Функция, которая добавляет класс с ошибкой
  function showItemInputError(formElement, inputElement, errorMessage, container) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
  
    inputElement.classList.add(container.inputErrorClass);
    // Заменим содержимое span с ошибкой на переданный параметр
    errorElement.textContent = errorMessage;
    errorElement.classList.add(container.errorClass);
  }
  
  // Функция, которая удаляет класс с ошибкой
  function hideItemInputError(formElement, inputElement, container) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
    inputElement.classList.remove(container.inputErrorClass);
    errorElement.classList.remove(container.errorClass);
    // Очистим ошибку
    errorElement.textContent = '';
  }
  
  // Функция, которая проверяет валидность поля
  function isValid(formElement, inputElement, container) {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showItemInputError(formElement, inputElement, inputElement.validationMessage, container);
    } else {
      // Если проходит, скроем
      hideItemInputError(formElement, inputElement, container);
    }
  }
  
  function setEventListeners(formElement, container) {
    const inputList = Array.from(formElement.querySelectorAll(container.inputSelector));
  
    // Найдём в текущей форме кнопку отправки
    const buttonElement = formElement.querySelector(container.submitButtonSelector);
    
    formElement.addEventListener('reset', () => { // собыите `reset` происходит когда вызывается `reset` у формы
      setTimeout(() => {  // добавим таймаут, чтобы `toggleButtonState` вызвался уже после сохранения формы
      toggleButtonState(inputList, buttonElement, container), 0 })
    })


    inputList.forEach((inputElement) => {
           inputElement.addEventListener('input', function() {
            isValid(formElement, inputElement, container);
            // Вызовем toggleButtonState и передадим ей массив полей и кнопку
            toggleButtonState(inputList, buttonElement, container);
           });    
    });

    toggleButtonState(inputList, buttonElement, container);
  }
  
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
  function toggleButtonState(inputList, buttonElement, container) {
     // Если есть хотя бы один невалидный инпут
    if(hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      buttonElement.classList.add(container.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      // иначе сделай кнопку активной
      buttonElement.classList.remove(container.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }
