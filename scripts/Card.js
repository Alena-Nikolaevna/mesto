// PR - 7
//создаем класс Card

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

   this._element.querySelector('.card__image').src = this._link;   //присваиваем значения ссылки 
   this._element.querySelector('.card__title').textContent = this._name; //и имени карточки 
   this._element.querySelector('.card__image').alt = this._name; //из массива карточек initialCards

   return this._element;
 }

 // создаём метод лайка
 _CardLike() {
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
     this._CardLike();
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
  