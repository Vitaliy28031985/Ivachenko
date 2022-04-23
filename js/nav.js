const wrapper = document.querySelector('#wrapper');
const navList = document.querySelector('#link');

wrapper.classList.add("wrapper");

navList.addEventListener('click', () =>
wrapper.classList.remove("wrapper"));

wrapper.addEventListener('click', () =>
wrapper.classList.add("wrapper"));
