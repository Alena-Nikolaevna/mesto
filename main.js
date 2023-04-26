(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e.link,this._name=e.name,this._templateSelector=r,this._handleCardClick=n}var r,n;return r=t,(n=[{key:"_getTemplate",value:function(){var t=document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0);return this._like=t.querySelector(".card__like-bt"),this._cardDelete=t.querySelector(".card__delete-bt"),this._cardImage=t.querySelector(".card__image"),t}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._cardImage.src=this._link,this._element.querySelector(".card__title").textContent=this._name,this._cardImage.alt=this._name,this._element}},{key:"_likeCard",value:function(){this._like.classList.toggle("card__like-bt_active")}},{key:"_deleteCard",value:function(){this._cardDelete.closest(".card").remove()}},{key:"_setEventListeners",value:function(){var t=this;this._like.addEventListener("click",(function(){t._likeCard()})),this._cardDelete.addEventListener("click",(function(){t._deleteCard()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e){var r=e.nameSelector,n=e.aboutSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r,this._about=n,this._avatar=o}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about;this._name.textContent=e,this._about.textContent=r}},{key:"setUserAvatar",value:function(t){this._avatar.src=t}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var c=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._options=e,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._options.inputSelector)),this._buttonElement=this._formElement.querySelector(this._options.submitButtonSelector)}var e,r;return e=t,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_showItemInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._options.inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._options.errorClass)}},{key:"_hideItemInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._options.inputErrorClass),e.classList.remove(this._options.errorClass),e.textContent=""}},{key:"_isValid",value:function(t){t.validity.valid?this._hideItemInputError(t):this._showItemInputError(t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._options.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._options.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var t=this;this._formElement.addEventListener("reset",(function(){setTimeout((function(){t._toggleButtonState()}))})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))})),this._toggleButtonState()}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var f=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=r}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){return e._renderer(t)}))}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,m(n.key),n)}}function m(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var b=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=m(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(e)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close(),e.target.classList.contains("popup__button-close")&&t.close()}))}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},h.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(o){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._fullImagePopup=e._popup.querySelector(".popup__image"),e._titlePopupPhoto=e._popup.querySelector(".popup__title"),e}return e=u,(r=[{key:"open",value:function(t,e){this._fullImagePopup.alt=t,this._fullImagePopup.src=e,this._titlePopupPhoto.textContent=t,h(S(u.prototype),"open",this).call(this)}}])&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===w(o)?o:String(o)),n)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},k.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(n);if(o){var r=j(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleFormSubmit=e,r._form=r._popup.querySelector(".popup__form-edit-container"),r._inputList=Array.from(r._form.querySelectorAll(".popup__form-item")),r}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formInputValues={},this._inputList.forEach((function(e){t._formInputValues[e.name]=e.value})),this._formInputValues}},{key:"close",value:function(){k(j(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var t=this;k(j(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t.close()}))}}])&&E(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===C(o)?o:String(o)),n)}var o}var I=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._address=e.baseUrl,this._headers=e.headers}var e,r;return e=t,(r=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject(t.status)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"patchUserInfo",value:function(t){return fetch("".concat(this._address,"users/me/"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then(this._checkResponse)}},{key:"createNewCard",value:function(t){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({link:t.link,name:t.name})}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._address,"cards/").concat(t,"/"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&L(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"cb45d759-f4af-4749-b096-7ca0c6bdc881","Content-Type":"application/json"}}),R={formSelector:".popup__form-edit-container",inputSelector:".popup__form-item",submitButtonSelector:".popup__form-button-submit",inactiveButtonClass:"popup__form-button-submit_disabled",inputErrorClass:"popup__form-item_type_error",errorClass:"popup__form-item-error_visible"},T=document.querySelector(".profile__edit-button"),q=document.querySelector(".profile__add-button"),B=document.querySelector(".popup__form-edit-container"),x=document.querySelector(".profile__name"),U=document.querySelector(".profile__about"),V=B.querySelector(".popup__form-item_type_name"),A=B.querySelector(".popup__form-item_type_job"),D=document.querySelector(".elements"),N=document.querySelector(".popup__form-edit-container_add");function F(t,e,r){return F=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&G(o,r.prototype),o},F.apply(null,arguments)}function G(t,e){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},G(t,e)}N.querySelector(".popup__form-item_type_name"),N.querySelector(".popup__form-item_type_job");var J=document.querySelector(".popup__form-edit-container_avatar");function z(t,e){W.open(t,e)}document.querySelector("profile__avatar-redact"),I.getUserInfo().then((function(t){K.setUserInfo(t)})).catch((function(t){return console.log("Ошибка: ".concat(t))})),I.getInitialCards().then((function(t){M.renderItems(t)})).catch((function(t){return console.log("Ошибка: ".concat(t))}));var H=function(t){var e=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return F(r,e).generateCard()}(t,"#card-template",z);M.addItem(e)},M=new f({renderer:H},D),K=new i({nameSelector:x,aboutSelector:U});T.addEventListener("click",(function(){var t=K.getUserInfo();V.value=t.name,A.value=t.about,X.open()})),q.addEventListener("click",(function(){Y.open()})),new c(R,B).enableValidation();var Q=new c(R,N);Q.enableValidation(),new c(R,J),Q.enableValidation();var W=new g(".popup_type_image");W.setEventListeners();var X=new O(".popup_type_edit-profile",(function(t,e){K.setUserInfo(t,e)}));X.setEventListeners();var Y=new O(".popup_type_add-profile",(function(t){H(t)}));Y.setEventListeners(),new O(".popup_type_avatar",(function(t){K.setUserAvatar(t)})).setEventListeners()})();