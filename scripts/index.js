const profileEditButton = document.querySelector('.profile__edit-button');

const popup = document.querySelector('.popup');
const popupButtonCloseIcon = popup.querySelector('.popup__button-close');
const formElement = popup.querySelector('.popup__form-edit-container');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about');

const nameInput = formElement.querySelector('.popup__form-item_type_name');
const jobInput = formElement.querySelector('.popup__form-item_type_job');


function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
profileEditButton.addEventListener('click', openPopup);
popupButtonCloseIcon.addEventListener('click', closePopup);
