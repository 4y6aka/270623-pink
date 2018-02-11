var navMain = document.querySelector('.main-nav');
var headerControls = document.querySelector('.page-header__header-control');
var headerToggle = document.querySelector('.page-header__toggle');

headerToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    headerControls.classList.remove('page-header__header-control--closed');
    headerControls.classList.add('page-header__header-control--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    headerControls.classList.add('page-header__header-control--closed');
    headerControls.classList.remove(('page-header__header-control--opened'));
  }
});
