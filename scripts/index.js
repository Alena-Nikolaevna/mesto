/***************************************************************** 
 Чтобы код был аккуратным и структурированным,
 лучше придерживаться подобной структуры в будущем:
     - Наверху файла объявляем переменные
     - Затем функции
     - Внизу файла реализуем добавление обработчиков
******************************************************************/
import Card from './Card.js';
import FormValidator from './FormValidator.js';



const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const popupTypeAddProfile = document.querySelector('.popup_type_add-profile');
const popupTypeImage = document.querySelector('.popup_type_image');


const formElementEdit = document.querySelector('.popup__form-edit-container');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about');

const nameInput = formElementEdit.querySelector('.popup__form-item_type_name');
const jobInput = formElementEdit.querySelector('.popup__form-item_type_job');

/*************************************************************************** */

//универс-ая ф-ция закрытия попапов
const popups = document.querySelectorAll('.popup')

  popups.forEach((popup) => {
      popup.addEventListener('mousedown', (evt) => {
          if (evt.target.classList.contains('popup_opened')) {
                closePopup(popup);
          }
          if (evt.target.classList.contains('popup__button-close')) {
                closePopup(popup);
          }
      });
  });

// закрытие попапов кнопкой esc
function escClosePopup(evt) {
  if (evt.key === 'Escape') {
    const popupOpenedEsc = document.querySelector('.popup_opened');
    closePopup(popupOpenedEsc);
  }
}

/********************************************************************** */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escClosePopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escClosePopup);
}

function openpopupTypeEditProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupTypeEditProfile);
}

function openPopupTypeAddProfile() {
  formElementAdd.reset();
  openPopup(popupTypeAddProfile);
}

/************************************************************************** */

//ф-ция редактирования профиля(сохранить информацию)
function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupTypeEditProfile);
}

formElementEdit.addEventListener('submit', handleFormSubmitEdit); //обработчик кнопки "сохранить"

profileEditButton.addEventListener('click', openpopupTypeEditProfile);
profileAddButton.addEventListener('click', openPopupTypeAddProfile);

/************************************************************************* */

const elementsCards = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template').content;

/********************************************************************************** */   
// массив карточек
const initialCards = [
  {
    name: 'Заход солнца',
    link: 'https://images.unsplash.com/photo-1554067559-269708c83fb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=794&q=80'
  },
  {
    name: 'Закат в полях',
    link: 'https://images.unsplash.com/photo-1534413298607-48ba59e8a06d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Закат в горах',
    link: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
  },
  {
    name: 'Небо на закате',
    link: 'https://images.unsplash.com/photo-1523780329224-c3be49f59edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'На закате',
    link: 'https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Зарево заката',
    link: 'https://images.unsplash.com/photo-1443916568596-df5a58c445e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
  }
];

/************************************************************************ */

function handleCardClick(name, link) {
  fullImagePopup.alt = name;
  fullImagePopup.src = link;
  titlePopupPhoto.textContent = name;
  openPopup(popupTypeImage);
}


const contentPopupImage = document.querySelector('.popup__content');
const fullImagePopup = contentPopupImage.querySelector('.popup__image');
const titlePopupPhoto = contentPopupImage.querySelector('.popup__title');

/************************************************** */

// добавление карточки через попап(новое место)
const formElementAdd = document.querySelector('.popup__form-edit-container_add');
const imageNameInput = formElementAdd.querySelector('.popup__form-item_type_name');
const linkInput = formElementAdd.querySelector('.popup__form-item_type_job');

/**************************************** */
/*function createCard(data) {
  const card = new Card(data, '#card__template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

// помещаем(добавляем) карточку(и) в контейнер, созданный в html
function addCardInContainer(card) {
  elementsCards.append(createCard(card));
 }

// создаём цикл, kt проходит по массиву по всем карточкам
initialCards.forEach((element) => {
  addCardInContainer(element);
});*/

//cоздаем карточку  с помощью класса
const createCard = (...args) => {
  return new Card(...args).generateCard();
}


//функция появления карточки
const renderCard = (element) => {
  const card = createCard(element, '#card-template', handleCardClick);
  elementsCards.prepend(card);
  //document.querySelector('.elements').prepend(card);
}

/*function renderCard(item) {
  document.querySelector('.elements').prepend(createCard(item));
  
}*/

initialCards.forEach((elements) => {
  //elements.append(createCard(item));;
 // document.querySelector('.elements').append(createCard(item));
 renderCard(elements);
});





/************ */
function handleFormSubmitAdd(evt) {
	evt.preventDefault(); 

  const item = {
    name: imageNameInput.value,
		link: linkInput.value,
  };
  renderCard(item);
  
	evt.target.reset();
	closePopup(popupTypeAddProfile);
  //validationAddCardForm.disableSubmitButton();
}

// создаём цикл, kt проходит по массиву по всем карточкам
/*initialCards.forEach((elementsCards) => {
  // создадим экземпляр карточки с уникальными данными(название и изображение)
  const card = new Card(elementsCards, '#card-template', handleCardClick);
  const cardElement = card.generateCard();

  // Добавляем в DOM
  document.querySelector('.elements').append(cardElement);
});*/


formElementAdd.addEventListener('submit', handleFormSubmitAdd); // обработчик кнопки "создать"
/************************************* */



/*function rendersCard(elementsCards) {      
  elementsCards.prepend(createCard( {
    name: imageNameInput.value,
		link: linkInput.value,
  }));
}*/

// ф-ция добавл. карточки через попап
/*function handleFormSubmitAdd(evt) {
	evt.preventDefault(); 
  rendersCard(elementsCards);
	evt.target.reset();
	closePopup(popupTypeAddProfile);
}*/




/******************************************************************** */

const newPopupTypeAddProfile = new FormValidator(validationContainer, popupTypeAddProfile)
newPopupTypeAddProfile.enableValidation();


const newPopupTypeEditProfile = new FormValidator(validationContainer, popupTypeEditProfile);
  newPopupTypeEditProfile.enableValidation();
  
  const validationContainer = {
    formSelector: '.popup__form-edit-container',
    inputSelector: '.popup__form-item',
    submitButtonSelector: '.popup__form-button-submit',
    inactiveButtonClass: 'popup__form-button-submit_disabled',
    inputErrorClass: 'popup__form-item_type_error',
    errorClass: 'popup__form-item-error_visible'
  }
  
//enableValidation(validationContainer);

/****************************************** */

// ИЗ ЭТОГО КОДА СОЗДАЕМ КЛАСС 

// создаём карточку
/*function createCard(data) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = data.link;
  cardElement.querySelector('.card__image').alt = data.name;
  cardElement.querySelector('.card__title').textContent = data.name;*/


  
  //выбираем кнопку лайка, создаем обработчик
  /*const cardLikeBt = cardElement.querySelector('.card__like-bt');
  cardLikeBt.addEventListener('click', handleCardLike);

  //выберем кнопку удаления, создаём обработчик
  const cardDeleteBt = cardElement.querySelector('.card__delete-bt');
  cardDeleteBt.addEventListener('click', deleteCard);

  //попап - изображение
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.addEventListener('click', () => openpopupImage(data));
 
  return cardElement;
}*/

/*const contentPopupImage = document.querySelector('.popup__content');
const fullImagePopup = contentPopupImage.querySelector('.popup__image');
const titlePopupPhoto = contentPopupImage.querySelector('.popup__title');

// ф-ция попап-изображения
function openpopupImage(data) {
  fullImagePopup.alt = data.name;
  fullImagePopup.src = data.link;
  titlePopupPhoto.textContent = data.name,
  openPopup(popupTypeImage);
}*/

/***************************************************************************** */
//+
// создаём ф-цию лайка
/*function handleCardLike(evt) {
  evt.target.classList.toggle('card__like-bt_active');
}*/

// создаём функцию кнопки удаления
/*function deleteCard(evt) {
  const cardEl = evt.target.closest('.card');
  cardEl.remove();
}*/

// помещаем(добавляем) карточку(и) в контейнер, созданный в html
/*function addCardInContainer(card) {
  elementsCards.append(createCard(card));
 }

// создаём цикл, kt проходит по массиву по всем карточкам
initialCards.forEach((element) => {
  addCardInContainer(element);
});*/
//+

/*************************************************************** */