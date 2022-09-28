// FETCHING DOM ELEMENTS
const advice = document.querySelector(".container__advise");
const adviseNumer = document.querySelector(".container__advise-number2");
const adviseBtn = document.querySelector(".container__btn");

const URL = "https://api.adviceslip.com/advice";

const showRandomAdvice = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => (adviseNumer.textContent = data.slip.id))
    .then((data) => (advice.textContent = `"${data.slip.advice}"`))
    .catch((err) => console.error(err));

  fetch(URL)
    .then((res) => res.json())
    .then((data) => (advice.textContent = `"${data.slip.advice}"`))
    .catch((err) => console.error(err));
};

adviseBtn.addEventListener("click", showRandomAdvice);
