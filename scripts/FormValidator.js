//PR-7

export default class FormValidator {
    constructor(options, formElement) {
      this._options = options;
        this._formElement = formElement;
    }
  
    enableValidation() {
      /*const formList = Array.from(document.querySelectorAll(this._options.formSelector));
      
      formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
        });
      });*/
      
      this._setEventListeners();
    }
  
    // Функция, которая добавляет класс с ошибкой
    _showItemInputError(inputElement, errorMessage) {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    
      inputElement.classList.add(this._options.inputErrorClass);
      // Заменим содержимое span с ошибкой на переданный параметр
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._options.errorClass);
    }
  
  
    // Функция, которая удаляет класс с ошибкой
    _hideItemInputError(inputElement) {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`); 
      inputElement.classList.remove(this._options.inputErrorClass);
      errorElement.classList.remove(this._options.errorClass);
      // Очистим ошибку
      errorElement.textContent = '';
    }
  
  
    // Функция, которая проверяет валидность поля
    _isValid(inputElement) {
      if (!inputElement.validity.valid) {
        // Если поле не проходит валидацию, покажем ошибку
        this._showItemInputError(inputElement, errorMessage);
      } else {
        // Если проходит, скроем
        this._hideItemInputError(inputElement);
      }
    }
  
      //доделать _
    _hasInvalidInput(inputList) {
      return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    }
  
  
    /*_disabledAddButtonElement(buttonElement) {
      // сделай кнопку неактивной
      buttonElement.classList.add(this._options.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    }*/
  
  
    /*_disabledRemoveButtonElement(buttonElement) {
      // иначе сделай кнопку активной
      buttonElement.classList.remove(this._options.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }*/
  

    _toggleButtonState(inputList, buttonElement) {
      // Если есть хотя бы один невалидный инпут
     if(this._hasInvalidInput(inputList)) {
       // сделай кнопку неактивной
       buttonElement.classList.add(this._options.inactiveButtonClass);
       buttonElement.setAttribute('disabled', true);

     } else {
       // иначе сделай кнопку активной
       buttonElement.classList.remove(this._options.inactiveButtonClass);
       buttonElement.removeAttribute('disabled');
     }
    }



  
    /*_toggleButtonState(inputList, buttonElement) {
      // Если есть хотя бы один невалидный инпут
     if(this._hasInvalidInput(inputList)) {
       // сделай кнопку неактивной
       this._disabledAddButtonElement(buttonElement);
     } else {
       // иначе сделай кнопку активной
       this._disabledRemoveButtonElement(buttonElement);
     }
   }*/
  
   
    _setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._options.inputSelector));
      
        // Найдём в текущей форме кнопку отправки
        const buttonElement = this._formElement.querySelector(this._options.submitButtonSelector);
        
        this._formElement.addEventListener('reset', () => { // собыите `reset` происходит когда вызывается `reset` у формы
          setTimeout(() => {  // добавим таймаут, чтобы `toggleButtonState` вызвался уже после сохранения формы
            this._toggleButtonState(inputList, buttonElement), 0 })
        })
    
    
        inputList.forEach((inputElement) => {
               inputElement.addEventListener('input', function() {
                this._isValid(inputElement);
                // Вызовем toggleButtonState и передадим ей массив полей и кнопку
                this._toggleButtonState(inputList, buttonElement);
               });    
        });
    
        this._toggleButtonState(inputList, buttonElement);
      }
  
    }


    /************************************ */

  

    
    
    
    
  
    /************************************************************* */
    
    /*function enableValidation(container) {
      const formList = Array.from(document.querySelectorAll(container.formSelector));
      
    
      formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
        });
    
        setEventListeners(formElement, container);
      });
    }*/
    
    // Функция, которая добавляет класс с ошибкой
    /*function showItemInputError(formElement, inputElement, errorMessage, container) {
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
    
      inputElement.classList.add(container.inputErrorClass);
      // Заменим содержимое span с ошибкой на переданный параметр
      errorElement.textContent = errorMessage;
      errorElement.classList.add(container.errorClass);
    }*/
    
    // Функция, которая удаляет класс с ошибкой
    /*function hideItemInputError(formElement, inputElement, container) {
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
      inputElement.classList.remove(container.inputErrorClass);
      errorElement.classList.remove(container.errorClass);
      // Очистим ошибку
      errorElement.textContent = '';
    }*/
    
    // Функция, которая проверяет валидность поля
    /*function isValid(formElement, inputElement, container) {
      if (!inputElement.validity.valid) {
        // Если поле не проходит валидацию, покажем ошибку
        showItemInputError(formElement, inputElement, inputElement.validationMessage, container);
      } else {
        // Если проходит, скроем
        hideItemInputError(formElement, inputElement, container);
      }
    }*/
    
    /*function setEventListeners(formElement, container) {
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
    }*/
    
    /*function hasInvalidInput(inputList) {
      return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    }*/
    
    /*function toggleButtonState(inputList, buttonElement, container) {
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
    }*/
  
  
    /************************************************************************ */
    // пробовала сделать активной или ? неактивной ф-цию по-другому
  /*function disabledButton(buttonElement) {
    buttonElement.classList.remove(container.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }*/
    
  
  