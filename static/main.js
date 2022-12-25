const iconButton = document.querySelector("#scroll-icon");
iconButton.addEventListener("click", (e) => {
  document
    .getElementById("section-1__container")
    .scrollIntoView({ behavior: "smooth" });
});

let nodes = [
  document.querySelector("#section-1-text__container"),
  document.querySelector("#section-1-image__container"),
  document.querySelector("#section-2"),
  document.querySelector("#section-3-text__container"),
  document.querySelector("#section-3-image__container"),
  document.querySelector("#section-4"),
  document.querySelector("#section-5"),
];

let classes = [
  ["animate__animated", "animate__fadeInLeft"],
  ["animate__animated", "animate__fadeInRight"],
  ["animate__animated", "animate__fadeIn"],
  ["animate__animated", "animate__fadeInLeft"],
  ["animate__animated", "animate__fadeInRight"],
  ["animate__animated", "animate__fadeIn"],
  ["animate__animated", "animate__fadeIn"],
];

classNames = {};

nodes.forEach((node, idx) => (classNames[node.id] = classes[idx]));
console.log(classNames);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        // It's visible. Add the animation class here!
        console.log(entry.target.id, classNames[entry.target.id]);
        for (let className of classNames[entry.target.id]) {
          entry.target.classList.remove("hide");
          entry.target.classList.add(className);
          observer.unobserve(entry.target);
        }
      }
    });
  },
  { rootMargin: "0px 0px -200px 0px" }
);

nodes.forEach((node) => observer.observe(node));
