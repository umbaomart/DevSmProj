const SCROLL_ANIMATION_TRIGGER_CLASSNAME = 'cards__item';
const SCROLL_VISIBLE_CLASSNAME = 'is-visible';


function onItersection(entries, observer) {

  entries.forEach((entry, index) => {

    if (entry.isIntersecting) {
      // entry.target.classList.add(SCROLL_VISIBLE_CLASSNAME);

      switch (entry.target !== null) {

        case entry.target.classList.contains('fade-in-up'):
          entry.target.style.animation = `fade-in-up .5s ease forwards`;
          entry.target.style.animationDelay = `${(index * .5) * 100}ms`;
          entry.target.classList.add(SCROLL_VISIBLE_CLASSNAME);
          break;

        case entry.target.classList.contains('fade-in-left'):
          entry.target.style.animation = `fade-in-left .5s ease forwards`;
          entry.target.style.animationDelay = `${(index * .5) * 100}ms`;
          entry.target.classList.add(SCROLL_VISIBLE_CLASSNAME);
          break;

        case entry.target.classList.contains('fade-in-right'):
          entry.target.style.animation = `fade-in-right .5s ease forwards`;
          entry.target.style.animationDelay = `${(index * .5) * 100}ms`;
          entry.target.classList.add(SCROLL_VISIBLE_CLASSNAME);
          break;

        case entry.target.classList.contains('fade-in-down'):
          entry.target.style.animation = `fade-in-down .5s ease forwards`;
          entry.target.style.animationDelay = `${(index * .5) * 100}ms`;
          entry.target.classList.add(SCROLL_VISIBLE_CLASSNAME);
          break;

        default:
          // observer.unobserve(entry.target);
          break;
      }

      // // Check if the element has class fade-in-up
      // if (entry.target.classList.contains('fade-in-up')) {
      //   entry.target.style.animation = `fade-in-up .5s ease forwards`;
      //   entry.target.style.animationDelay = `${(index * .5) * 100}ms`;
      //   entry.target.classList.add(SCROLL_VISIBLE_CLASSNAME);

      //   observer.unobserve(entry.target); // Enable this line if you want to trigger animation only once
      // } else {
      // }

    } else {
      entry.target.classList.remove(SCROLL_VISIBLE_CLASSNAME);
    }
    // console.log(entry.target.style.animationDelay);
  });
}

function initializeScrollAnimationTrigger(rootEl = document) {
  const scrollAnimationTriggerElList = Array.from(rootEl.getElementsByClassName(SCROLL_ANIMATION_TRIGGER_CLASSNAME));

  if (!scrollAnimationTriggerElList.length) {
    return;
  }

  const observer = new IntersectionObserver(onItersection, {
    rootMargin: '0%',
  });

  scrollAnimationTriggerElList.forEach(el => {
    observer.observe(el);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initializeScrollAnimationTrigger();
});