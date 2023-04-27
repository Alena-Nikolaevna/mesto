//Класс UserInfo отвечает за управление отображением информации о пользователе на странице
//Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе

export default class UserInfo {
    constructor({nameSelector, aboutSelector, avatarSelector}) {
        this._name = nameSelector;
        this._about = aboutSelector;
        this._avatar = avatarSelector;
    }

    getUserInfo() {  //метод, который возвращает объект с данными пользователя
        return {
            name: this._name.textContent,
            about: this._about.textContent,
          };
    }

    setUserInfo({name, about, avatar, id}) {  //метод, который принимает новые данные пользователя и добавляет их на страницу
        this._name.textContent = name;
        this._about.textContent = about;
        this._avatar.src = avatar;
        this._userId = id;
    }

    /*getUserId() {
      return this._userId;
    }*/

     /* setUserAvatar(item) {
        this._avatar.src = item.link;
      }*/
}