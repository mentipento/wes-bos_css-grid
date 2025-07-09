// script.js

const burger = document.querySelector('.nav__burger');
const list = document.querySelector('.nav__list');
const menuItem = document.querySelectorAll('.nav__item');

burger.addEventListener('click', () => {
  const isExpanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', !isExpanded);
  console.log('click');

  if (isExpanded) {
    // Menü wird geschlossen → zuerst Items einklappen
    menuItem.forEach(item => {
      item.classList.remove('nav__item--active');
    });

    // Dann nach 0.5s Liste ausblenden
    setTimeout(() => {
      list.classList.add('nav__list--inactive');
    }, 500);
  } else {
    // Menü wird geöffnet → Liste sofort sichtbar machen
    list.classList.remove('nav__list--inactive');

    // Dann Items mit etwas Verzögerung sichtbar machen (optional)
    setTimeout(() => {
      menuItem.forEach(item => {
        item.classList.add('nav__item--active');
      });
    }, 50); // kleine Verzögerung wirkt oft flüssiger
  }
});


document.getElementById("year").textContent = new Date().getFullYear();
