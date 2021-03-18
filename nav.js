
function toggleNav(event, mobileNav, navButton) {
  navButton.classList.toggle('is-active');
  mobileNav.classList.toggle('open');
  if (event.target.classList.contains('open')) {
    event.target.classList.remove('open');
    event.target.classList.add('closed');
  } else if (event.target.classList.contains('closed')) {
    event.target.classList.add('open');
    event.target.classList.remove('closed');
  }
}


document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  var navButton = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  navButton.addEventListener('click', function(event) {
    toggleNav(event, mobileNav, navButton);
  })
});