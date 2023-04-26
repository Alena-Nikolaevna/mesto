class Api {
  constructor(setting) {
    this._address = setting.baseUrl; 
    this._headers = setting.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  //загружаем информацию о пользователе с сервера
  getUserInfo() { 
    return fetch(`${this._address}/users/me`, { 
      method: "GET", 
      headers: this._headers, 
    }).then(this._checkResponse);
  }


  //получить список всех карточек в виде массива (GET)
  //Загружаем карточки с сервера
  getInitialCards() {
    return fetch(`${this._address}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }


    // отправляем/сохраняем данные пользователя на сервер 
  // заменяем данные пользователя
  patchUserInfo(data) {
    return fetch(`${this._address}users/me/`, {
      method: "PATCH",
      headers: this._headers,

      body: JSON.stringify({
        name: data.name,
        about: data.about,
      })
    }).then(this._checkResponse);
  }


  //Добавление новой карточки
  createNewCard(data) {
    return fetch(`${this._address}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        link: data.link,
        name: data.name
      })
    }).then(this._checkResponse);
  }


  deleteCard(cardId) {
    return fetch(`${this._address}cards/${cardId}/`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }


  
} 


export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: 'cb45d759-f4af-4749-b096-7ca0c6bdc881',
    'Content-Type': 'application/json'
  }
}); 



/*fetch('https://mesto.nomoreparties.co/v1/cohort-42/cards', {
  headers: {
    authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  }); */


/*- получить список всех карточек в виде массива (GET) +
- добавить карточку (POST)
- удалить карточку (DELETE)
- получить данные пользователя (GET) +-
- заменить данные пользователя (PATCH) +
- заменить аватар (PATCH)
- “залайкать” карточку (PUT)
- удалить лайк карточки (DELETE)*/


// если ошибка, отклоняем промис
//return Promise.reject(`Ошибка: ${res.status}`);