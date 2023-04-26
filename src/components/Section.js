export default class Section {
    constructor({renderer}, containerSelector) {
     //this._items = items; //это массив данных, которые нужно добавить на страницу при инициализации класса
     this._renderer = renderer; //это функция, которая отвечает за создание и отрисовку данных на странице
     this._container = containerSelector; //селектор контейнера, в который нужно добавлять созданные элементы, // DOM-элемент, найденный по селектору containerSelector
    }

    addItem(element) {    //этот метод принимает DOM-элемент и добавляет его в начало контейнера
        this._container.prepend(element);
    }

    renderItems(items) {  // это метод, который отвечает за отрисовку всех элементов функцией renderer    
        items.forEach((item) => this._renderer(item));
            // отрисовка каждого отдельного элемента должна осуществляться функцией renderer
           // const cardElement = card.generateCard();  
           //this.setItem(cardElement);
    }
 }
