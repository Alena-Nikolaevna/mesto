/***************************************************************** 
 Чтобы код был аккуратным и структурированным,
 лучше придерживаться подобной структуры в будущем:
     - Наверху файла объявляем переменные
     - Затем функции
     - Внизу файла реализуем добавление обработчиков
******************************************************************/
import './index.css'; // добавьте импорт главного файла стилей

import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

import { api } from '../components/Api.js';

//import renderLoading from '../utils/constants.js';

import {initialCards} from '../utils/initialCards.js';
import {validationContainer} from '../utils/validationContainer.js';

import {profileName, profileJob, nameInput, jobInput, formElementAdd, 
  elementsCards, formElementEdit, profileEditButton, profileAddButton} from '../utils/constants.js';

/************************************************************************* */
function renderLoading (isLoading, button) {
  if (isLoading) {
      if (button.textContent.length >= 9) {
          button.textContent = 'Сохранение...';
      } else {
          button.textContent = 'Создание...';
      }

  } else {
      if (button.textContent.length >= 12) {
          button.textContent = 'Сохранить';
      } else {
          button.textContent = 'Создать';
      }
  }
}

/////******************************************** */

function handleDeleteClick(card) {
  popupTypeConfirm.open();
  popupTypeConfirm.handleSubmit(() => {
    renderLoading(true, popupConfirm.querySelector('.popup__form-button-submit'));
    api.deleteCard(card.cardId)
  .then((res) => { 
    if (res.ok) {
      deleteCard();
     popupTypeConfirm.close();
    }
  })
  .catch((error) => console.log(`Ошибка: ${error}`))
  .finally(() => renderLoading(false, popupConfirm.querySelector('.popup__form-button-submit')));
  })
};



// API лайк и дизлайк карточки
const handleLikeCard = (card) => {
  api.likeCard(card._cardId)
  .then((res) => {
    card.toggleLike();
    card._cardCountLike.textContent = res.likes.length;
  })
  .catch((err) => { console.log(err) });
};

const handleDislikeCard = (card) => {
  api.dislikeCard(card._cardId)
  .then((res) => {
    card.toggleLike();
    card._cardCountLike.textContent = res.likes.length;
  })
  .catch((err) => { console.log(err) });
};


////////////////
//const buttonCardDelete = document.querySelector('.card__delete-bt'); 
//const popupTypeConfirm = document.querySelector('popup_type_confirm');

/////
const formElementAvatar = document.querySelector('.popup__form-edit-container_avatar');
const buttonAvatar = document.querySelector('.profile__avatar');
//////////////////////////
//достаем данные о пользователе и установим эти данные в нужных полях
let userId;
api.getUserInfo()
.then((res) => { 
  userId = res._id;
  user.setUserInfo(res) })
.catch((error) => console.log(`Ошибка: ${error}`))


api.getInitialCards()
.then((res) => {
  //console.log('результат', res)
  itemsCardList.renderItems(res); // res - это данные с сервера, в данном случае - массив карточек
 
})
.catch((error) => console.log(`Ошибка: ${error}`))

/********************************************** */

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}
/************************************************* */
//cоздаем карточку  с помощью класса

const createCard = (...args) => {
  return new Card(...args).generateCard();
}

//функция появления карточки
const renderCard = (element) => {
  const card = createCard(element, '#card-template', handleCardClick, handleLikeCard, handleDislikeCard, handleDeleteClick, userId);
  itemsCardList.addItem(card);
}

/************************************************************ */
// экземпляр класса Section, который отвечает за отрисовку элементов на странице
const itemsCardList = new Section({renderer: renderCard}, elementsCards);
//itemsCardList.renderItems();

/************************************************************ */
// экземпляр класса UserInfo - отвечает за управление отображением информации о пользователе на странице
const user = new UserInfo({nameSelector: profileName, aboutSelector: profileJob, avatarSelector: buttonAvatar});

/************************************* */
function openpopupTypeEditProfile() {
  const userObject = user.getUserInfo();
  nameInput.value = userObject.name;
  jobInput.value = userObject.about;

  newPopupTypeEditProfile.open();
}

function openPopupTypeAddProfile() {
  newPopupTypeAddProfile.open();
}

function openPopupTypeAvatar() {
  newPopupTypeAvatar.open();
}

/*function openPopupTypeConfirm(action) {
  popupTypeConfirm.open();
  handleSubmit(action);
}*/
/************************************************************************** */



const popupAvatarForm = document.querySelector('.popup_type_avatar');

const popupConfirm  = document.querySelector('.popup_type_confirm');

const popupAdd = document.querySelector('.popup_type_add-profile');

const popupEdit = document.querySelector('.popup_type_edit-profile');





/////////////////////////
//ф-ция редактирования профиля(сохранить информацию)
function handleFormSubmitEdit(data) { 
 //user.setUserInfo(name, about);
 renderLoading(true, popupEdit.querySelector('.popup__form-button-submit'));
  api.patchUserInfo(data)
   .then((res) => { user.setUserInfo(res) })
   .catch((error) => console.log(`Ошибка: ${error}`))
   .finally(() => renderLoading(false, popupEdit.querySelector('.popup__form-button-submit')));
   
 }
/********************************************************************************** */
//ф-ция добавления карточки через попап-форму
function handleFormSubmitAdd(data) {
  //renderCard(item);
  renderLoading(true, popupAdd.querySelector('.popup__form-button-submit'));
  api.createNewCard(data)
  .then((res) => {renderCard(res)})
  .catch((error) => console.log(`Ошибка: ${error}`))
  .finally(() => renderLoading(false, popupAdd.querySelector('.popup__form-button-submit')));
}
/***************************************** */
// апи-аватар
function handleFormSubmitAvatar(item) {
  renderLoading(true, popupAvatarForm.querySelector('.popup__form-button-submit'));
   api.patchUserAvatar(item)
  .then((res) => { user.setUserInfo(res) })
  .catch((error) => console.log(`Ошибка: ${error}`))
  .finally(() => renderLoading(false, popupAvatarForm.querySelector('.popup__form-button-submit')));
}

/********************************************************************************** */

const newFormElementEdit = new FormValidator(validationContainer, formElementEdit); //1
newFormElementEdit.enableValidation();


const newFormElementAdd = new FormValidator(validationContainer, formElementAdd); //2
newFormElementAdd.enableValidation();

const newFormElementAvatar = new FormValidator(validationContainer, formElementAvatar); //3
newFormElementAvatar.enableValidation();


/* экземпляр класса PopupWithImage - попап просмотра изображения */
const popupWithImage  = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

/* экземпляр класса PopupWithForm - попап-форма редактирования профиля*/
const newPopupTypeEditProfile  = new PopupWithForm ('.popup_type_edit-profile', handleFormSubmitEdit);
newPopupTypeEditProfile.setEventListeners();

/* экземпляр класса PopupWithForm - попап-форма добавления карточки*/
const newPopupTypeAddProfile = new PopupWithForm ('.popup_type_add-profile', handleFormSubmitAdd);
newPopupTypeAddProfile.setEventListeners();


/****************************************** */

//ПОПАП АВАТАРА
const newPopupTypeAvatar = new PopupWithForm ('.popup_type_avatar', handleFormSubmitAvatar);
newPopupTypeAvatar.setEventListeners();


profileEditButton.addEventListener('click', openpopupTypeEditProfile);
profileAddButton.addEventListener('click', openPopupTypeAddProfile);
buttonAvatar.addEventListener('click', openPopupTypeAvatar);

/////////////////////////////


//попап удаления карточки
const popupTypeConfirm = new PopupWithConfirm({popupSelector: '.popup_type_confirm'});
popupTypeConfirm.setEventListeners();




