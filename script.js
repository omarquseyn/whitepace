// "use strict";

// const body = document.body;
// const nav = document.querySelector('.header__nav');
// const headerRight = document.querySelector('.header__right');
// const headerButtons = document.querySelector('.header__buttons');
// const burger = document.querySelector('.burger');
// const closeBurger = document.querySelector('.closeBurger');

// function updateHeaderHeight() {
//     const header = document.querySelector('.header');
//     const headerHeight = getComputedStyle(header).height;
//     const root = document.documentElement;

//     // Обновляем значение переменной CSS
//     root.style.setProperty('--header-height', headerHeight);
//     root.style.setProperty('--hero-height', `calc(100vh - ${headerHeight})`);
// }

// window.addEventListener('DOMContentLoaded', () => {
//     // Установите начальные значения
//     updateHeaderHeight();

//     // Обработчик изменения размера окна
//     window.addEventListener('resize', updateHeaderHeight);

//     document.addEventListener('click', event => {
//         const targetElement = event.target;
//         const arrows = document.querySelectorAll('.nav__item-arrow');
//         arrows.forEach(element => {
//             if (targetElement === element) {
//                 element.classList.toggle('active');
//             }
//         });

//         if (targetElement === burger) {
//             closeBurger.classList.add('active');
//             burger.classList.remove('active');
//             nav.classList.add('active');
//         }

//         if (targetElement === closeBurger) {
//             burger.classList.add('active');
//             closeBurger.classList.remove('active');
//             nav.classList.remove('active');
//         }

//         if (nav.classList.contains('active')) {
//             body.classList.add('scrolling');
//         } else {
//             body.classList.remove('scrolling');
//         }
//     });

//     function moveElement(element, fromParent, toParent) {
//         if (element && fromParent && toParent) {
//             fromParent.removeChild(element);
//             toParent.appendChild(element);
//         }
//     }

//     function repositionElement() {
//         const element = headerButtons;
//         const originalParent = headerRight;
//         const newParent = nav;

//         if (window.innerWidth <= 768) {
//             if (element.parentNode !== newParent) {
//                 moveElement(element, originalParent, newParent);
//                 // Убедиться, что бургер и крестик рядом
//                 if (headerRight.querySelector('.burger') !== burger) {
//                     headerRight.appendChild(burger);
//                 }
//                 if (headerRight.querySelector('.closeBurger') !== closeBurger) {
//                     headerRight.appendChild(closeBurger);
//                 }
//             }
//         } else {
//             if (element.parentNode !== originalParent) {
//                 moveElement(element, newParent, originalParent);
//                 // Восстановить исходный порядок кнопок
//                 if (headerRight.lastElementChild !== burger) {
//                     headerRight.appendChild(burger);
//                 }
//                 if (headerRight.lastElementChild !== closeBurger) {
//                     headerRight.appendChild(closeBurger);
//                 }
//             }
//         }
//     }

//     window.addEventListener('resize', () => {
//         repositionElement();
//         updateHeaderHeight();
//     });

//     window.addEventListener('load', () => {
//         repositionElement();
//         updateHeaderHeight();
//     });
// });

"use strict";

// Обновляем CSS переменные для высоты заголовка
function updateHeaderHeight() {
    const header = document.querySelector('.header');
    const headerHeight = getComputedStyle(header).height;
    const root = document.documentElement;

    // Обновляем значение переменной CSS
    root.style.setProperty('--header-height', headerHeight);
    root.style.setProperty('--hero-height', `calc(100vh - ${headerHeight})`);
}

// Перемещение элемента между родительскими контейнерами
function moveElement(element, fromParent, toParent) {
    if (element && fromParent && toParent) {
        fromParent.removeChild(element);
        toParent.appendChild(element);
    }
}

// Функция для переупорядочивания элементов в зависимости от размера экрана
function repositionElement() {
    const headerButtons = document.querySelector('.header__buttons');
    const headerRight = document.querySelector('.header__right');
    const nav = document.querySelector('.header__nav');
    const burger = document.querySelector('.burger');
    const closeBurger = document.querySelector('.closeBurger');

    if (window.innerWidth <= 768) {
        // Перемещение кнопок в меню при маленьком экране
        if (headerButtons.parentNode !== nav) {
            moveElement(headerButtons, headerRight, nav);
        }
        // Убедиться, что кнопки бургер и крестик находятся в правильном месте
        if (headerRight.querySelector('.burger') !== burger) {
            headerRight.appendChild(burger);
        }
        if (headerRight.querySelector('.closeBurger') !== closeBurger) {
            headerRight.appendChild(closeBurger);
        }
    } else {
        // Перемещение кнопок обратно в заголовок при большом экране
        if (headerButtons.parentNode !== headerRight) {
            moveElement(headerButtons, nav, headerRight);
        }
        // Восстановить исходный порядок кнопок
        if (headerRight.lastElementChild !== burger) {
            headerRight.appendChild(burger);
        }
        if (headerRight.lastElementChild !== closeBurger) {
            headerRight.appendChild(closeBurger);
        }
    }
}

// Обработка кликов по элементам
function handleClick(event) {
    const targetElement = event.target;
    const nav = document.querySelector('.header__nav');
    const burger = document.querySelector('.burger');
    const closeBurger = document.querySelector('.closeBurger');
    const arrows = document.querySelectorAll('.nav__item-arrow');
    const body = document.body;

    // Открытие/закрытие меню
    if (targetElement === burger) {
        closeBurger.classList.add('active');
        burger.classList.remove('active');
        nav.classList.add('active');
    }

    if (targetElement === closeBurger) {
        burger.classList.add('active');
        closeBurger.classList.remove('active');
        nav.classList.remove('active');
    }

    // Добавление/удаление класса для скроллинга
    if (nav.classList.contains('active')) {
        body.classList.add('scrolling');
    } else {
        body.classList.remove('scrolling');
    }

    arrows.forEach(element => {
        if (targetElement === element) {
            element.classList.toggle('active');
        }
    });
}

// Инициализация и установка обработчиков событий
function init() {
    updateHeaderHeight();
    repositionElement();

    window.addEventListener('resize', () => {
        repositionElement();
        updateHeaderHeight();
    });

    window.addEventListener('load', () => {
        repositionElement();
        updateHeaderHeight();
    });

    document.addEventListener('click', handleClick);
}

// Запуск инициализации
document.addEventListener('DOMContentLoaded', init);