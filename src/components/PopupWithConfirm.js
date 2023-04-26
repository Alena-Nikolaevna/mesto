import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._buttonSubmit = this._popup.querySelector('popup__form-button-submit');
       // this._verificationCardDelete = verificationCardDelete;
    }

    
    setEventListeners() {
        super.setEventListeners();

        this._buttonSubmit.addEventListener('click', (evt) => {
            evt.preventDefault();
            this.submitPopupDelete(this._functionConfirm());
          });
    }  

    submitPopupDelete(fnConfirm) {
        this._functionConfirm = fnConfirm;
    }
}


