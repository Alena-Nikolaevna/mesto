const validationContainer = {
    formSelector: '.popup__form-edit-container',
    inputSelector: '.popup__form-item',
    submitButtonSelector: '.popup__form-button-submit',
    inactiveButtonClass: 'popup__form-button-submit_disabled',
    inputErrorClass: 'popup__form-item_type_error',
    errorClass: 'popup__form-item-error_visible'
  }
  /////////////////////////
  
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
    } else {
      // иначе сделай кнопку активной
      buttonElement.classList.remove(container.inactiveButtonClass);
    }
  }
