import Popup from './Popup.js';

//этот класс перезаписывает родительский метод setEventListeners
//этот класс перезаписывает родительский метод close
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);

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


    close() {
        super.close();
        this._form.reset();
    }
    
    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => { //добавляет обработчик сабмита форме
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
          });
    }   
}