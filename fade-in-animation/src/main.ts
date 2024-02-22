const SCROLL_ANIMATION_TRIGGER_CLASS = 'cards__item' as string;
const SCROLL_VISIBLE_CLASS = 'is-visible' as string;


function onIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {

  entries.forEach((entry: IntersectionObserverEntry, index: number) => {

    if (entry.isIntersecting) {
      const targetEl = entry.target as HTMLElement;

      switch (targetEl !== null) {

        case targetEl.classList.contains('fade-in-up'):
          targetEl.style.animation = `fade-in-up .5s ease forwards`;
          targetEl.style.animationDelay = `${(index * .5) * 100}ms`;
          targetEl.classList.add(SCROLL_VISIBLE_CLASS);
          break;

        case targetEl.classList.contains('fade-in-left'):
          targetEl.style.animation = `fade-in-left .5s ease forwards`;
          targetEl.style.animationDelay = `${(index * .5) * 100}ms`;
          targetEl.classList.add(SCROLL_VISIBLE_CLASS);
          break;

        case targetEl.classList.contains('fade-in-right'):
          targetEl.style.animation = `fade-in-right .5s ease forwards`;
          targetEl.style.animationDelay = `${(index * .5) * 100}ms`;
          targetEl.classList.add(SCROLL_VISIBLE_CLASS);
          break;

        case targetEl.classList.contains('fade-in-down'):
          targetEl.style.animation = `fade-in-down .5s ease forwards`;
          targetEl.style.animationDelay = `${(index * .5) * 100}ms`;
          targetEl.classList.add(SCROLL_VISIBLE_CLASS);
          break;

        default:
          observer.unobserve(targetEl);
          break;
      }

    } else {
      entry.target.classList.remove(SCROLL_VISIBLE_CLASS);
    }
  });
}

function initializeScrollAnimationTrigger(rootEl = document as Document) {
  const scrollAnimationTriggerElList = Array.from(rootEl.getElementsByClassName(SCROLL_ANIMATION_TRIGGER_CLASS)) as HTMLElement[];

  if (!scrollAnimationTriggerElList.length) {
    return;
  }

  const observer = new IntersectionObserver(onIntersection, {
    rootMargin: '0%',
  });

  scrollAnimationTriggerElList.forEach(el => {
    observer.observe(el);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initializeScrollAnimationTrigger();
});