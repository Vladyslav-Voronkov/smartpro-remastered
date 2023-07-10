const burger_menu = document.getElementById('burger-menu');
let isOpened = false; 
burger_menu_open = document.getElementById('burger-menu-open');
const burger_menu_opened = document.getElementById('burger-opened');
const burger_menu_closed = document.getElementById('burger-closed');

const body = document.querySelector('body');

// body.addEventListener('click', (e) => {
//     if (e.target.id !== 'burger-menu-open' && e.target.id !== 'burger-opened' && e.target.id !== 'burger-closed' && e.target.id !== 'burger-menu') {
//         burger_menu.style.display = 'none';
//         burger_menu_opened.style.display = 'block';
//         burger_menu_closed.style.display = 'none';
//         isOpened = false;
//     }
// });

burger_menu_open.addEventListener('click', () => { 
    switch (isOpened) {  
        case false:
            // burder_menu display block  
            burger_menu.style.display = 'block';
            burger_menu.style.opacity = '1';
            // transition  
            burger_menu.style.transition = 'all 0.5s ease-in-out';

            burger_menu_opened.style.display = 'none';
            burger_menu_closed.style.display = 'block';
            isOpened = true;
            break;
        case true:
            // burder_menu display none
            burger_menu.style.display = 'none';
            burger_menu.style.opacity = '0';
            // transition
            burger_menu.style.transition = 'all 0.5s ease-in-out';
            burger_menu_opened.style.display = 'block';
            burger_menu_closed.style.display = 'none';
            isOpened = false;
            };
});  
