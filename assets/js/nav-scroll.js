
const header = document.querySelector("header");
const sectionOne = document.querySelector(".top-section");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

/*
=====================
 Scroll Padding Start
=====================
 */
const navigationHeight = document.querySelector('.header').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 'px');
/*
=====================
 Scroll Padding End
=====================
 */
