/***************************************************************** 
 Чтобы код был аккуратным и структурированным,
 лучше придерживаться подобной структуры в будущем:
     - Наверху файла объявляем переменные
     - Затем функции
     - Внизу файла реализуем добавление обработчиков
******************************************************************/
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

import {initialCards} from '../utils/initialCards.js';
import {validationContainer} from '../utils/validationContainer.js';

import {profileName, profileJob, nameInput, jobInput, formElementAdd, 
  elementsCards, imageNameInput, linkInput, formElementEdit, 
  profileEditButton, profileAddButton} from '../utils/constants.js';

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

/************************************************************ */
// экземпляр класса Section, который отвечает за отрисовку элементов на странице
const itemsCardList = new Section({items:initialCards, renderer:renderCard}, elementsCards);
itemsCardList.renderItems();

/************************************************************ */
// экземпляр класса UserInfo - отвечает за управление отображением информации о пользователе на странице
const user = new UserInfo({nameSelector: profileName, aboutSelector: profileJob});

/************************************* */
function openpopupTypeEditProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  newPopupTypeEditProfile.open();
}

function openPopupTypeAddProfile() {
  formElementAdd.reset();
  newPopupTypeAddProfile.open();
}

/************************************************************************** */

//ф-ция редактирования профиля(сохранить информацию)
function handleFormSubmitEdit({name, about}) {
  //evt.preventDefault();
  
  user.setUserInfo(name, about);
  nameInput.value = name;
  jobInput.value = about;
 
  //profileName.textContent = nameInput.value;
  //profileJob.textContent = jobInput.value;
  newPopupTypeEditProfile.close();
}
/********************************************************************************** */
//ф-ция добавления карточки через попап-форму
function handleFormSubmitAdd() {
	//evt.preventDefault(); 

  const item = {
    name: imageNameInput.value,
		link: linkInput.value,
  };
  renderCard(item);
  
	//evt.target.reset();
	newPopupTypeAddProfile.close();
  //validationAddCardForm.disableSubmitButton();
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
