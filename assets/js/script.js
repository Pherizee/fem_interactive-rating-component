const ratingPage = document.querySelector(".rating");
const thanksPage = document.querySelector(".thanks");
const form = document.querySelector(".ratings");
const labels = document.querySelectorAll(".rating_input");
let rating;

labels.forEach((label) => {
  label.addEventListener("change", (e) => {
    rating = e.target.value;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (rating) {
    ratingPage.style.display = "none";
    thanksPage.querySelector("#rate").textContent = rating;
    thanksPage.style.display = "flex";
  }
});
