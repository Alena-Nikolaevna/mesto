// PR - 7
//создаем класс Card

export default class Card {
  // в конструкторе будут динамические данные, для каждого экземпляра свои
 constructor(data, templateSelector, handleCardClick, handleLikeCard, handleDislikeCard, userId) {
   // text и image — приватные поля, они нужны только внутри класса


   this._link = data.link;
   this._name = data.name;

   this._likes = data.likes;
   this._userId = userId;
   this._ownerId = data.owner._id;
   this._cardId = data._id
   this._handleLikeCard = handleLikeCard;
   this._handleDislikeCard = handleDislikeCard;

   this._templateSelector = templateSelector;
   this._handleCardClick = handleCardClick;
 }

 //создаем шаблон -темплейт (разметку)
 _getTemplate() {
   const cardElement = document
     .querySelector(this._templateSelector)
     .content
     .querySelector('.card')
     .cloneNode(true);

     this._like = cardElement.querySelector('.card__like-bt'); //кнопка лайка карточки
     this._cardDelete = cardElement.querySelector('.card__delete-bt'); //кнопка удаления карточки
     this._cardImage = cardElement.querySelector('.card__image'); // "кнопка"-открытие попап изображения по клику на изображение карточки

     this._cardCountLike = cardElement.querySelector('.card__count-like'); //кнопка колич-ва лайков

     
     this._cardCountLike.textContent = this._likes.length;

     if (
      this._likes.filter((like) => like._id === this._userId)
        .length > 0
    ) {
      this._like.classList.add("card__like-bt_active");
    }
   

   return cardElement;
 }

 //создаем карточку
 generateCard() {
   this._element = this._getTemplate();

   this._isOwner();
   this._setEventListeners();


   this._cardImage.src = this._link;   //присваиваем значения ссылки 
   this._element.querySelector('.card__title').textContent = this._name; //и имени карточки 
   this._cardImage.alt = this._name; //из массива карточек initialCards

   return this._element;
 }

 // создаём метод лайка
 /*_likeCard() {
   this._like.classList.toggle('card__like-bt_active');
 }*/

 // создаём метод кнопки удаления
 _deleteCard() {
   this._cardDelete.closest('.card').remove();
   //this._cardDelete.remove();
 }

 _setEventListeners() {
   //обработчик лайка
   /*this._like.addEventListener('click', () => {
     this._likeCard();
   });*/


   this._like.addEventListener("click", () => {
    if (this._like.classList.contains('card__like-bt_active')) {
      this._handleDislikeCard(this);
      
    } else {
      this._handleLikeCard(this);
    }
  });


   //обработчик кнопки удаления карточки
   this._cardDelete.addEventListener('click', () => {
     this._deleteCard();
   });

   //обработчик открытия попап-изображения по клику на карточку
   this._cardImage.addEventListener('click', () => {
     this._handleCardClick(this._name, this._link);
   });
 }

 // переключатель лайков
 toggleLike() {
  this._like.classList.toggle('card__like-bt_active');
}

_isOwner() {
  if (this._ownerId !== this._userId) {
    this._cardDelete.remove();
  }
}

}
  
/********************************************************************** */
/*

export default class Card {
  // в конструкторе будут динамические данные, для каждого экземпляра свои
 constructor(data, templateSelector, handleCardClick) {
   // text и image — приватные поля, они нужны только внутри класса
   this._link = data.link;
   this._name = data.name;
   this._templateSelector = templateSelector;
   this._handleCardClick = handleCardClick;
 }

 //создаем шаблон -темплейт (разметку)
 _getTemplate() {
   const cardElement = document
     .querySelector(this._templateSelector)
     .content
     .querySelector('.card')
     .cloneNode(true);

     this._like = cardElement.querySelector('.card__like-bt'); //кнопка лайка карточки
     this._cardDelete = cardElement.querySelector('.card__delete-bt'); //кнопка удаления карточки
     this._cardImage = cardElement.querySelector('.card__image'); // "кнопка"-открытие попап изображения по клику на изображение карточки

   return cardElement;
 }

 //создаем карточку
 generateCard() {
   this._element = this._getTemplate();

   this._setEventListeners();

   this._cardImage.src = this._link;   //присваиваем значения ссылки 
   this._element.querySelector('.card__title').textContent = this._name; //и имени карточки 
   this._cardImage.alt = this._name; //из массива карточек initialCards

   return this._element;
 }

 // создаём метод лайка
 _likeCard() {
   this._like.classList.toggle('card__like-bt_active');
 }

 // создаём метод кнопки удаления
 _deleteCard() {
   this._cardDelete.closest('.card').remove();
   //this._cardDelete.remove();
 }

 _setEventListeners() {
   //обработчик лайка
   this._like.addEventListener('click', () => {
     this._likeCard();
   });

   //обработчик кнопки удаления карточки
   this._cardDelete.addEventListener('click', () => {
     this._deleteCard();
   });

   //обработчик открытия попап-изображения по клику на карточку
   this._cardImage.addEventListener('click', () => {
     this._handleCardClick(this._name, this._link);
   });
 }
}

{
  data: {
    ...данные карточки (включая информацию по лайкам)
  },
  handleCardClick: () => {
    ...что должно произойти при клике на картинку
  },
  handleLikeClick: (card) => {
    ...что должно произойти при клике на лайк
  },
  handleDeleteIconClick: (card) => {
    ...что должно произойти при клике на удаление
},
///////////////*/