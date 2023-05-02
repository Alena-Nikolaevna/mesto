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
import renderLoading from '../utils/renderLoading.js';

//import {initialCards} from '../utils/initialCards.js';
import { validationContainer } from '../utils/validationContainer.js';

import {
  profileName, profileJob, nameInput, jobInput, formElementAdd,
  elementsCards, formElementEdit, profileEditButton, profileAddButton,
  formElementAvatar, buttonAvatar, popupAvatarForm, popupConfirmForm,
  popupAddForm, popupEditForm
} from '../utils/constants.js';

/************************************************************************* */
let userId;

/************************************************************** */
// API информация с сервера:
//достаем данные о пользователе и установим эти данные в нужных полях и
// достаем данные карточек с сервера
Promise.all([api.getUserInfo(), api.getInitialCards()])
  // тут деструктурируете ответ от сервера, чтобы было понятнее, что пришло
  .then(([userData, cards]) => {
    // тут установка данных пользователя
    userId = userData._id;
    user.setUserInfo(userData);
    // тут отрисовка карточек
    itemsCardList.renderItems(cards);
  })
  .catch((error) => console.log(`Ошибка: ${error}`))

/********************************************** */
// API удаление карточки через попап
function handleDeleteClick(card) {
  popupTypeConfirm.open();
  popupTypeConfirm.handleSubmit(() => {
    //renderLoading(true, popupConfirmForm);
    api.deleteCard(card._cardId)
      .then(() => {
        card.deleteCard();
        popupTypeConfirm.close();
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
    //.finally(() => renderLoading(false, popupConfirmForm));
  })
};

// API лайк и дизлайк карточки
const handleLikeCard = (card) => {
  api.likeCard(card.receiveId())
    .then((res) => {
      card.toggleLike();
      card.updateLikesCount(res);
    })
    .catch((err) => { console.log(err) });
};

const handleDislikeCard = (card) => {
  api.dislikeCard(card.receiveId())
    .then((res) => {
      card.toggleLike();
      card.updateLikesCount(res);
    })
    .catch((err) => { console.log(err) });
};

/************************************************** */
function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}
/************************************************* */
//cоздаем карточку с помощью класса
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
const itemsCardList = new Section({ renderer: renderCard }, elementsCards);
//itemsCardList.renderItems();

/************************************************************ */
// экземпляр класса UserInfo - отвечает за управление отображением информации о пользователе на странице
const user = new UserInfo(profileName, profileJob, buttonAvatar);

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

//ф-ция редактирования профиля(сохранить информацию)
function handleFormSubmitEdit(data) {
  //user.setUserInfo(name, about);
  renderLoading(true, popupEditForm);
  api.patchUserInfo(data)
    .then((res) => {
      user.setUserInfo(res);
      newPopupTypeEditProfile.close();
    })
    .catch((error) => console.log(`Ошибка: ${error}`))
    .finally(() => renderLoading(false, popupEditForm));
}
/********************************************************************************** */
//ф-ция добавления карточки через попап-форму
function handleFormSubmitAdd(data) {
  //renderCard(item);
  renderLoading(true, popupAddForm);
  api.createNewCard(data)
    .then((res) => {
      renderCard(res);
      newPopupTypeAddProfile.close();
    })
    .catch((error) => console.log(`Ошибка: ${error}`))
    .finally(() => renderLoading(false, popupAddForm));
}
/***************************************** */
// апи-аватар
function handleFormSubmitAvatar(item) {
  renderLoading(true, popupAvatarForm);
  api.patchUserAvatar(item)
    .then((res) => {
      user.setUserInfo(res);
      newPopupTypeAvatar.close();
    })
    .catch((error) => console.log(`Ошибка: ${error}`))
    .finally(() => renderLoading(false, popupAvatarForm));
}

/********************************************************************************** */

const newFormElementEdit = new FormValidator(validationContainer, formElementEdit); //1
newFormElementEdit.enableValidation();

const newFormElementAdd = new FormValidator(validationContainer, formElementAdd); //2
newFormElementAdd.enableValidation();

const newFormElementAvatar = new FormValidator(validationContainer, formElementAvatar); //3
newFormElementAvatar.enableValidation();


/* экземпляр класса PopupWithImage - попап просмотра изображения */
const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

/* экземпляр класса PopupWithForm - попап-форма редактирования профиля*/
const newPopupTypeEditProfile = new PopupWithForm('.popup_type_edit-profile', handleFormSubmitEdit);
newPopupTypeEditProfile.setEventListeners();

/* экземпляр класса PopupWithForm - попап-форма добавления карточки*/
const newPopupTypeAddProfile = new PopupWithForm('.popup_type_add-profile', handleFormSubmitAdd);
newPopupTypeAddProfile.setEventListeners();

/* экземпляр класса PopupWithForm - попап-форма аватара*/
const newPopupTypeAvatar = new PopupWithForm('.popup_type_avatar', handleFormSubmitAvatar);
newPopupTypeAvatar.setEventListeners();

/* экземпляр класса PopupWithConfirm - попап-форма удаления карточки*/
const popupTypeConfirm = new PopupWithConfirm({ popupSelector: '.popup_type_confirm' });
popupTypeConfirm.setEventListeners();

/****************************************** */

profileEditButton.addEventListener('click', openpopupTypeEditProfile);
profileAddButton.addEventListener('click', openPopupTypeAddProfile);
buttonAvatar.addEventListener('click', openPopupTypeAvatar);

/////////////////////////////
/******************************************************** */

//достаем данные о пользователе и установим эти данные в нужных полях
/*api.getUserInfo()
  .then((res) => {
    userId = res._id;
    user.setUserInfo(res)
  })
  .catch((error) => console.log(`Ошибка: ${error}`))*/

// достаем данные карточек с сервера
/*api.getInitialCards()
  .then((res) => {
    //console.log('результат', res)
    itemsCardList.renderItems(res); // res - это данные с сервера, в данном случае - массив карточек

  })
  .catch((error) => console.log(`Ошибка: ${error}`))*/