import Popup from './Popup.js';

//этот класс перезаписывает родительский метод setEventListeners
//этот класс перезаписывает родительский метод close
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);

        //this._submitBtn = this._form.querySelector('.popup__form-button-submit'); //
        //this._submitBtnText = this._submitBtn.textContent; //
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form-edit-container');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__form-item'));
    }


    _getInputValues() {  //метод, который собирает данные всех полей формы
        this._formInputValues = {};

        this._inputList.forEach((input) => {
            this._formInputValues[input.name] = input.value;
        });

        return this._formInputValues;
    }

    // указываем 2 параметра (2й с текстом по умолчанию, чтобы не указывать лишний раз его)
    /*renderLoading(isLoading, loadingText='Сохранение...') {
      if (isLoading) {
        this._submitBtn.textContent = loadingText;
      } else {
        this._submitBtn.textContent = this._submitBtnText;
      }
    }*/


    // не смогла сообразить, как реализовать это дальше

    /*setInputValues(data) {
        this._inputList.forEach((input) => {
          // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
          input.value = data[input.name];
        });
      }*/

    close() {
        super.close();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => { //добавляет обработчик сабмита форме
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            //this.close(); закрывать попапы нужно только после удачного ответа от сервера в блоке then, иначе пользователь не поймет, что произошла ошибка
        });
    }
}