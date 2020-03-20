

//Burger handler

(function() {
  const burgerItem = document.querySelector('.burger'); 
  const menu = document.querySelector('.menu');	
  const menuCloseItem = document.querySelector('.header__nav-close')
  burgerItem.addEventListener('click', () => {
    menu.classList.add('menu_active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('menu_active');
   });
}())