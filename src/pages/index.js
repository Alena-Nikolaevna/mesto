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



import {initialCards} from '../utils/initialCards.js';
import {validationContainer} from '../utils/validationContainer.js';

import {profileName, profileJob, nameInput, jobInput, formElementAdd, 
  elementsCards, formElementEdit, profileEditButton, profileAddButton} from '../utils/constants.js';

/************************************************************************* */



////////////////////////////
//достаем данные о пользователе и установим эти данные в нужных полях
api.getUserInfo()
.then((res) => { user.setUserInfo(res) })
.catch((error) => console.log(`Ошибка: ${error}`))


api.getInitialCards()
.then((res) => {
  //console.log('результат', res)
  const data = res.map(data => data.name)
  itemsCardList.renderItems(data)
})
//.catch((error) => console.log(`Ошибка: ${error}`))

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
  const card = createCard(element, '#card-template', handleCardClick);
  itemsCardList.addItem(card);
}

/************************************************************ */
// экземпляр класса Section, который отвечает за отрисовку элементов на странице
const itemsCardList = new Section({items:initialCards, renderer:renderCard}, elementsCards);
//itemsCardList.renderItems();

/************************************************************ */
// экземпляр класса UserInfo - отвечает за управление отображением информации о пользователе на странице
const user = new UserInfo({nameSelector: profileName, aboutSelector: profileJob});

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

/************************************************************************** */

//ф-ция редактирования профиля(сохранить информацию)
function handleFormSubmitEdit({name, about}) { 
 user.setUserInfo(name, about);
}
/********************************************************************************** */
//ф-ция добавления карточки через попап-форму
function handleFormSubmitAdd(item) {
  renderCard(item);
}
/***************************************** */

profileEditButton.addEventListener('click', openpopupTypeEditProfile);
profileAddButton.addEventListener('click', openPopupTypeAddProfile);

/********************************************************************************** */

const newFormElementEdit = new FormValidator(validationContainer, formElementEdit); //1
newFormElementEdit.enableValidation();


const newFormElementAdd = new FormValidator(validationContainer, formElementAdd); //2
newFormElementAdd.enableValidation();

/* экземпляр класса PopupWithImage - попап просмотра изображения */
const popupWithImage  = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

/* экземпляр класса PopupWithForm - попап-форма редактирования профиля*/
const newPopupTypeEditProfile  = new PopupWithForm ('.popup_type_edit-profile', handleFormSubmitEdit);
newPopupTypeEditProfile.setEventListeners();

/* экземпляр класса PopupWithForm - попап-форма добавления карточки*/
const newPopupTypeAddProfile = new PopupWithForm ('.popup_type_add-profile', handleFormSubmitAdd);
newPopupTypeAddProfile.setEventListeners();

/********* */
//formElementEdit.addEventListener('submit', handleFormSubmitEdit); //обработчик кнопки "сохранить"
//formElementAdd.addEventListener('submit', handleFormSubmitAdd); // обработчик кнопки "создать" //2

/////////////////

/*const buttonCardDelete = document.querySelector('card__delete-bt'); 
const popupTypeConfirm = document.querySelector('popup_type_confirm');

const popupTypeAvatar = document.querySelector('popup_type_avatar');
const buttonAvatarRedact = document.querySelector('profile__avatar-redact');

function openPopupTypeConfirm() {
  popupTypeConfirm.open();
}

function openPopupTypeAvatar() {
  popupTypeAvatar.open();
}


buttonAvatarRedact.addEventListener('click', openPopupTypeAvatar);
buttonCardDelete.addEventListener('click', openPopupTypeConfirm);*/