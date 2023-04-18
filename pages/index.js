/***************************************************************** 
 Чтобы код был аккуратным и структурированным,
 лучше придерживаться подобной структуры в будущем:
     - Наверху файла объявляем переменные
     - Затем функции
     - Внизу файла реализуем добавление обработчиков
******************************************************************/
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Popup from '../components/Popup.js';

import {initialCards} from '../utils/initialCards.js';
import {validationContainer} from '../utils/validationContainer.js';

import {popups, profileName, profileJob, nameInput, jobInput, 
  popupTypeEditProfile, popupTypeAddProfile, popupTypeImage, 
  fullImagePopup, titlePopupPhoto, formElementAdd, 
  elementsCards, imageNameInput, linkInput, formElementEdit, 
  profileEditButton, profileAddButton} from '../utils/constants.js';

/*************************************************************************** */
 


/********************************************************** */
  /*popups.forEach((popup) => {
      popup.addEventListener('mousedown', (evt) => {
          if (evt.target.classList.contains('popup_opened')) {
                closePopup(popup);
          }
          if (evt.target.classList.contains('popup__button-close')) {
                closePopup(popup);
          }
      });
  });*/

// закрытие попапов кнопкой esc
/*function escClosePopup(evt) {
  if (evt.key === 'Escape') {
    const popupOpenedEsc = document.querySelector('.popup_opened');
    closePopup(popupOpenedEsc);
  }
}*/

/********************************************************************** */
/*function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escClosePopup);
}*/

/*function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escClosePopup);
}*/




/************************************************************************* */
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

////////////
// экземпляр класса Section, который отвечает за отрисовку элементов на странице
const itemsCardList = new Section({items:initialCards, renderer:renderCard}, '.elements');
itemsCardList.renderItems();

/************************************* */
function openpopupTypeEditProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupTypeEditProfile.open();
}

function openPopupTypeAddProfile() {
  formElementAdd.reset();
  popupTypeAddProfile.open();
}

/************************************************************************** */

//ф-ция редактирования профиля(сохранить информацию)
function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupTypeEditProfile.close();
}


/********************************************************************************** */
function handleFormSubmitAdd(evt) {
	evt.preventDefault(); 

  const item = {
    name: imageNameInput.value,
		link: linkInput.value,
  };
  renderCard(item);
  
	evt.target.reset();
	popupTypeAddProfile.close();
  //validationAddCardForm.disableSubmitButton();
}

/***************************************** */

formElementEdit.addEventListener('submit', handleFormSubmitEdit); //обработчик кнопки "сохранить"
formElementAdd.addEventListener('submit', handleFormSubmitAdd); // обработчик кнопки "создать" //2

profileEditButton.addEventListener('click', openpopupTypeEditProfile);
profileAddButton.addEventListener('click', openPopupTypeAddProfile);

/********************************************************************************** */

const newFormElementEdit = new FormValidator(validationContainer, formElementEdit); //1
newFormElementEdit.enableValidation();


const newFormElementAdd = new FormValidator(validationContainer, formElementAdd); //2
newFormElementAdd.enableValidation();

/** попап просмотра изображения */
const popupWithImage  = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();


