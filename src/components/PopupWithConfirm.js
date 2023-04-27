import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor({popupSelector}) {
        super(popupSelector);

        this._buttonSubmit = this._popup.querySelector('.popup__form-button-submit');
       // this._verificationCardDelete = verificationCardDelete;
    }

    handleSubmit(action) { 
        this._submitHandler = action; 
    } 

    setEventListeners() {
        super.setEventListeners();

        this._buttonSubmit.addEventListener("submit", (evt) => { 
            evt.preventDefault(); 
            this._submitHandler(); 
          });
    }  

    
}
