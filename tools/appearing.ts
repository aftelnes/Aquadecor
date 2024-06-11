const appearing = () => {
  function onEntry(entry: IntersectionObserverEntry[]) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
    });
  }

  let options: IntersectionObserverInit = {
    threshold: [0.2],
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll<HTMLElement>(".element-animation");
  let texts = document.querySelectorAll<HTMLElement>(".text-animation");

  elements.forEach((elm) => observer.observe(elm));
  texts.forEach((elm) => observer.observe(elm));
};

export default appearing;
