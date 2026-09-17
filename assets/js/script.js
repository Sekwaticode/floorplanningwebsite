'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 

/* FAQs */
(function () {
  const accordion = document.getElementById('accordion');
  if (!accordion) return;

  const single = accordion.dataset.single === 'true';
  const triggers = Array.from(accordion.querySelectorAll('.trigger'));

  function toggle(trigger) {
    const item = trigger.closest('.item');
    const isOpen = item.classList.contains('is-open');

    if (single && !isOpen) {
      triggers.forEach((t) => {
        if (t !== trigger) {
          t.closest('.item').classList.remove('is-open');
          t.setAttribute('aria-expanded', 'false');
        }
      });
    }

    item.classList.toggle('is-open', !isOpen);
    trigger.setAttribute('aria-expanded', String(!isOpen));
  }

  triggers.forEach((trigger, i) => {
    trigger.addEventListener('click', () => toggle(trigger));
    trigger.addEventListener('keydown', (e) => {
      const key = e.key;
      if (key === 'ArrowDown' || key === 'ArrowUp' || key === 'Home' || key === 'End') {
        e.preventDefault();
        let next = i;
        if (key === 'ArrowDown') next = (i + 1) % triggers.length;
        if (key === 'ArrowUp') next = (i - 1 + triggers.length) % triggers.length;
        if (key === 'Home') next = 0;
        if (key === 'End') next = triggers.length - 1;
        triggers[next].focus();
      }
    });
  });
})();


// contact

