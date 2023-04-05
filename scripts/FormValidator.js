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
    _showItemInputError(inputElement) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    
      inputElement.classList.add(this._options.inputErrorClass);
      // Заменим содержимое span с ошибкой на переданный параметр
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._options.errorClass);
    }
  
    // Функция, которая удаляет класс с ошибкой
    _hideItemInputError(inputElement) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._options.inputErrorClass);
      errorElement.classList.remove(this._options.errorClass);
      // Очистим ошибку
      errorElement.textContent = '';
    }
  
    // Функция, которая проверяет валидность поля
    _isValid(inputElement) {
      if (!inputElement.validity.valid) {
        // Если поле не проходит валидацию, покажем ошибку
        this._showItemInputError(inputElement);
      } else {
        // Если проходит, скроем
        this._hideItemInputError(inputElement);
      }
    }
  
    _hasInvalidInput(inputList) {
      return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
      });
    }

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
  
    _setEventListeners() {
      const inputList = Array.from(this._formElement.querySelectorAll(this._options.inputSelector));
      
      // Найдём в текущей форме кнопку отправки
      const buttonElement = this._formElement.querySelector(this._options.submitButtonSelector);
        
      this._formElement.addEventListener('reset', () => { // собыите `reset` происходит когда вызывается `reset` у формы
        setTimeout(() => {  // добавим таймаут, чтобы `toggleButtonState` вызвался уже после сохранения формы
          this._toggleButtonState(inputList, buttonElement), 0 })
      })
    
    
      inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                // Вызовем toggleButtonState и передадим ей массив полей и кнопку
                this._toggleButtonState(inputList, buttonElement);
               });    
      });
    
          this._toggleButtonState(inputList, buttonElement);
      }
    }

    /************************************************** */
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