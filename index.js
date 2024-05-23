const schema = {
  name: "Image Text Section",
  tag: "section",
  class: "card__wrapper",
  settings: [
    {
      type: "image_picker",
      id: "image",
      value: "./assets/papaya.png",
    },
    {
      type: "text",
      id: "title",
      value: "Handcrafted and responsibly sourced",
    },
    {
      type: "textarea",
      id: "description",
      value:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
    },
    {
      type: "textarea",
      id: "additionalText",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis earum quam enim rerum corrupti sint. Quae necessitatibus ducimus beatae perspiciatis.",
    },
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  const cardWrapper = document.querySelector(".card__wrapper");
  const cardImg = cardWrapper.querySelector(".card__img img");
  const title = cardWrapper.querySelector(".card__description__title");
  const description = cardWrapper.querySelector(".card__description__data");
  const additionalText = cardWrapper.querySelector(".text__container p");
  const button = cardWrapper.querySelector(".card__button");

  cardImg.src = schema.settings.find((setting) => setting.id === "image").value;

  title.textContent = schema.settings.find(
    (setting) => setting.id === "title"
  ).value;

  description.textContent = schema.settings.find(
    (setting) => setting.id === "description"
  ).value;

  additionalText.textContent = schema.settings.find(
    (setting) => setting.id === "additionalText"
  ).value;
});

const button = document.getElementById("card__button");
const textContainer = document.getElementById("text__container");
let openText = false;

button.addEventListener("click", () => {
  console.log(openText);
  openText = !openText;
  updateTextVisibility();
});

const updateTextVisibility = () => {
  if (openText) {
    textContainer.classList.remove("hidden");
    button.classList.remove("active");
  } else {
    textContainer.classList.add("hidden");
    button.classList.add("active");
  }
};
