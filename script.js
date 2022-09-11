const close = document.querySelector('.close');
const burger_menu = document.querySelector('.burger_menu');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const menu_list = document.querySelector('.menu_list');

burger_menu.onclick = (event) => {
    menu.style.display = 'block';
}

close.onclick = (event) => {
    menu.style.display = 'none';
}

menu_list.onclick = (event) => {
    if (event.target.tagName === 'A') {
        menu.style.display = 'none';
    }
}

