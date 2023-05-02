export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileAddButton = document.querySelector('.profile__add-button');

export const formElementEdit = document.querySelector('.popup__form-edit-container');//1  PopupWithForm/ popup__form-item

export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__about');

export const nameInput = formElementEdit.querySelector('.popup__form-item_type_name');
export const jobInput = formElementEdit.querySelector('.popup__form-item_type_job');

/********************************************************************************** */

export const elementsCards = document.querySelector('.elements');

/************************************************************************ */

// добавление карточки через попап(новое место)
export const formElementAdd = document.querySelector('.popup__form-edit-container_add'); //2
export const imageNameInput = formElementAdd.querySelector('.popup__form-item_type_name');
export const linkInput = formElementAdd.querySelector('.popup__form-item_type_job');

/************************************************************************* */
export const formElementAvatar = document.querySelector('.popup__form-edit-container_avatar');
export const buttonAvatar = document.querySelector('.profile__avatar');

// для ф-ции renderLoading
export const popupAvatarForm = document.querySelector('.popup_type_avatar').querySelector('.popup__form-button-submit');
export const popupConfirmForm  = document.querySelector('.popup_type_confirm').querySelector('.popup__form-button-submit');
export const popupAddForm = document.querySelector('.popup_type_add-profile').querySelector('.popup__form-button-submit');
export const popupEditForm = document.querySelector('.popup_type_edit-profile').querySelector('.popup__form-button-submit');

/******************************************************************************** */

//const contentPopupImage = document.querySelector('.popup__content');
//export const fullImagePopup = contentPopupImage.querySelector('.popup__image'); //PopupWithImage
//export const titlePopupPhoto = contentPopupImage.querySelector('.popup__title'); //PopupWithImage

/****************************************************************************** */
//универс-ая ф-ция закрытия попапов
//export const popups = document.querySelectorAll('.popup')

//const cardTemplate = document.querySelector('#card-template').content;

//export const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
//export const popupTypeAddProfile = document.querySelector('.popup_type_add-profile');
//export const popupTypeImage = document.querySelector('.popup_type_image');

