const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');


const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const popupTypeAddProfile = document.querySelector('.popup_type_add-profile');
const popupTypeImage = document.querySelector('.popup_type_image');

/*const popupButtonCloseEdit = document.querySelector('.popup__button-close_type_edit');
const popupButtonCloseAdd = document.querySelector('.popup__button-close_type_add');
const popupButtonCloseImage = document.querySelector('.popup__button-close_type_image');*/


const popup = document.querySelector('.popup');
const popupButtonCloseIcon = popup.querySelector('.popup__button-close');
const formElement = popup.querySelector('.popup__form-edit-container');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about');

const nameInput = formElement.querySelector('.popup__form-item_type_name');
const jobInput = formElement.querySelector('.popup__form-item_type_job');

/********************************************************************** */
function openPopup(popup) {
  
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

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
      })
  });
/************************************************************************** */

//ф-ция редактирования профиля(сохранить информацию)
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popup);
}

formElement.addEventListener('submit', handleFormSubmit); //обработчик кнопки "сохранить"

profileEditButton.addEventListener('click', () => openPopup(popupTypeEditProfile));
profileAddButton.addEventListener('click', () => openPopup(popupTypeAddProfile));

//popupButtonCloseEdit.addEventListener('click', () => closePopup(popupTypeEditProfile));
//popupButtonCloseAdd.addEventListener('click', () => closePopup(popupTypeAddProfile));


/************************************************************************* */

const elementsCards = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template').content;

// template-элементы
const cardEl = document.createElement('article');
cardEl.classList.add('card');

const photo = document.createElement('img');
photo.classList.add('card__image');

const deleteButton = document.createElement('button');
deleteButton.classList.add('card__delete-bt');

const container = document.createElement('div')
container.classList.add('card__container');

const title = document.createElement('h2');
title.classList.add('card__title');

const likeButton = document.createElement('button');
likeButton.classList.add('card__like-bt');


// массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

/********************************************************************************** */

// создаём карточку
function createCard(data) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = data.link;
  cardElement.querySelector('.card__image').alt = data.name;
  cardElement.querySelector('.card__title').textContent = data.name;
  
  //выбираем кнопку лайка, создаем обработчик
  const cardLikeBt = cardElement.querySelector('.card__like-bt');
  cardLikeBt.addEventListener('click', handleCardLike);

  //выберем кнопку удаления, создаём обработчик
  const cardDeleteBt = cardElement.querySelector('.card__delete-bt');
  cardDeleteBt.addEventListener('click', deleteCard);

  //попап - изображение
  const cardImage = cardElement.querySelector('.card__image');

  //cardImage.addEventListener('click', openpopupImage);

  cardImage.addEventListener('click', () => {
    popupImage.alt = data.name,
    popupImage.src = data.link,
    popupTitle.textContent = data.name,
    openPopup(popupTypeImage);
  });

  //popupButtonCloseImage.addEventListener('click', () => closePopup(popupTypeImage));
 
  return cardElement;
}

const popupContent = document.querySelector('.popup__content');
const popupImage = popupContent.querySelector('.popup__image');
const popupTitle = popupContent.querySelector('.popup__title');

// если сделать отдельной ф-цией, нужно изучить

/*function openpopupImage() {
  popupImage.alt = data.name;
  popupImage.src = data.link;
  popupTitle.textContent = data.name,
  openpopup(popupTypeImage);
}*/

/***************************************************************************** */

// создаём ф-цию лайка
function handleCardLike(evt) {
  evt.target.classList.toggle('card__like-bt_active');
}

// создаём функцию кнопки удаления
function deleteCard(evt) {
  const cardEl = evt.target.closest('.card');
  cardEl.remove();
}

// помещаем(добавляем) карточку(и) в контейнер, созданный в html
function addCardInContainer(card) {
  elementsCards.append(createCard(card));
 }

// создаём цикл, kt проходит по массиву по всем карточкам
initialCards.forEach((element) => {
  addCardInContainer(element);
});

/******************************************************************** */

// добавление карточки через попап(новое место)
const formElementAdd = document.querySelector('.popup__form-edit-container_add');
const imageNameInput = formElementAdd.querySelector('.popup__form-item_type_name');
const linkInput = formElementAdd.querySelector('.popup__form-item_type_job');

function renderCard() {
  elementsCards.prepend(createCard( {
    name: imageNameInput.value,
		link: linkInput.value,
  }));
}

// ф-ция добавл. карточки через попап
function handleFormSubmitAdd(evt) {
	evt.preventDefault(); 
  renderCard();
	evt.target.reset();
	closePopup(popupTypeAddProfile);
}

formElementAdd.addEventListener('submit', handleFormSubmitAdd); // обработчик кнопки "создать"

/*********** ********************************************************/
	/*elementsCards.prepend(createCard({
		name: imageNameInput.value,
		link: linkInput.value,
	}));*/