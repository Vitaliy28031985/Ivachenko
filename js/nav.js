
// Меню фото
const wrapper = document.querySelector('#wrapper'),
navList = document.querySelector('#link');

wrapper.classList.add("wrapper");

navList.addEventListener('click', () =>
wrapper.classList.remove("wrapper"));

wrapper.addEventListener('click', () =>
wrapper.classList.add("wrapper"));
