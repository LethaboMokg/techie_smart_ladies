const empty = document.querySelector(".empty");
const header = document.querySelector(".header");
const faqIcons = document.querySelectorAll(".faq__icon");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      header.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      header.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-32px",
  }
);
obs.observe(empty);

faqIcons.forEach((faqIcon) => {
  const icon = faqIcon.querySelector(".fas");
  const answer = faqIcon.parentElement.nextElementSibling;

  faqIcon.addEventListener("click", () => {
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");
    answer.classList.toggle("open");
  });
});
