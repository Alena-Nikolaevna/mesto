/***************************************************************** 
 Чтобы код был аккуратным и структурированным,
 лучше придерживаться подобной структуры в будущем:
     - Наверху файла объявляем переменные
     - Затем функции
     - Внизу файла реализуем добавление обработчиков
******************************************************************/
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards} from '../utils/initialCards.js';
import {validationContainer} from '../utils/validationContainer.js';

/*************************************************************************** */
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const popupTypeAddProfile = document.querySelector('.popup_type_add-profile');
const popupTypeImage = document.querySelector('.popup_type_image');


const formElementEdit = document.querySelector('.popup__form-edit-container');//1

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about');

const nameInput = formElementEdit.querySelector('.popup__form-item_type_name');
const jobInput = formElementEdit.querySelector('.popup__form-item_type_job');

/********************************************************************************** */

const elementsCards = document.querySelector('.elements');
//const cardTemplate = document.querySelector('#card-template').content;

/************************************************************************ */

// добавление карточки через попап(новое место)
const formElementAdd = document.querySelector('.popup__form-edit-container_add'); //2
const imageNameInput = formElementAdd.querySelector('.popup__form-item_type_name');
const linkInput = formElementAdd.querySelector('.popup__form-item_type_job');

/************************************************************************* */

const contentPopupImage = document.querySelector('.popup__content');
const fullImagePopup = contentPopupImage.querySelector('.popup__image');
const titlePopupPhoto = contentPopupImage.querySelector('.popup__title');

/****************************************************************************** */

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

/************************************************************************* */
function handleCardClick(name, link) {
  fullImagePopup.alt = name;
  fullImagePopup.src = link;
  titlePopupPhoto.textContent = name;
  openPopup(popupTypeImage);
}

/************************************************** */
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

/********************************************************************************** */
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

formElementEdit.addEventListener('submit', handleFormSubmitEdit); //обработчик кнопки "сохранить"
formElementAdd.addEventListener('submit', handleFormSubmitAdd); // обработчик кнопки "создать" //2

profileEditButton.addEventListener('click', openpopupTypeEditProfile);
profileAddButton.addEventListener('click', openPopupTypeAddProfile);

/********************************************************************************** */

const newFormElementEdit = new FormValidator(validationContainer, formElementEdit); //1
newFormElementEdit.enableValidation();


const newFormElementAdd = new FormValidator(validationContainer, formElementAdd); //2
newFormElementAdd.enableValidation();