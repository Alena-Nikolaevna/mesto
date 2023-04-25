import Popup from './Popup.js';

//этот класс перезаписывает родительский метод setEventListeners
//этот класс перезаписывает родительский метод close
export default class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._buttonSubmit = this._popup.querySelector('popup__form-button-submit');
    }

    
    setEventListeners() {
        super.setEventListeners();

        this._buttonSubmit.addEventListener('click', (evt) => {
            evt.preventDefault();
           // this._handleFormSubmit(this._getInputValues());
            this.close();
          });
    }  
}