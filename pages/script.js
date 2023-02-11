const content = document.querySelector('.content');
const profileEditButton = content.querySelector('.profile__edit-button');

const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupEditCloseIcon = popupEditProfile.querySelector('.form-edit__image');
const formElement = popupEditProfile.querySelector('.form-edit__popup-container');

const profileName = content.querySelector('.profile__name');
const profileJob = content.querySelector('.profile__about');

const nameInput = formElement.querySelector('.form-edit__item_type_name');
const jobInput = formElement.querySelector('.form-edit__item_type_job');


function openPopup() {
  popupEditProfile.classList.add('popup-edit-profile_opened');
}

function closePopup() {
  popupEditProfile.classList.remove('popup-edit-profile_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
profileEditButton.addEventListener('click', openPopup);
popupEditCloseIcon.addEventListener('click', closePopup);
