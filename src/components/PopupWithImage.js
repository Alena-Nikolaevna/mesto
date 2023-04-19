import Popup from './Popup.js';

//этот класс перезаписывает родительский метод open()
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._fullImagePopup = this._popup.querySelector('.popup__image');
        this._titlePopupPhoto = this._popup.querySelector('.popup__title');
    }

    open(name, link) {
        this._fullImagePopup.alt = name;
        this._fullImagePopup.src = link;
        this._titlePopupPhoto.textContent = name;

        super.open();
    }
}