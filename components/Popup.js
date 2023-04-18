

export default class Popup {
    constructor(popupSelector) {  //Принимает в конструктор единственный параметр — селектор попапа
     this._popup = document.querySelector(popupSelector);
     this._handleEscClose = this._handleEscClose.bind(this);
    }
      
    open() {  // метод который отвечает за открытие попапа
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {  // метод, который отвечает за закрытие попапа
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {  // метод, который содержит логику закрытия попапа клавишей Esc
        if (evt.key === 'Escape') {
            //const popupOpenedEsc = document.querySelector('.popup_opened');
            //this.close(popupOpenedEsc);
            this.close();
        }
    };

    setEventListeners() {  // метод, который добавляет слушатель клика иконке закрытия попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы
        this._popup.addEventListener('mousedown', (evt) => {
                if (evt.target.classList.contains('popup_opened')) {
                    this.close();
                }
                if (evt.target.classList.contains('popup__button-close')) {
                    this.close();
                }
            });
    }
}