const submitBtn = document.querySelector('.submit-button');
const submittedComponent = document.querySelector('#submission-component');
const initialComponent = document.querySelector('#initial-component');
const ratingBtns = document.querySelectorAll('.rating-button');
const resultOutput = document.querySelector('.result');
let ratingScore = 3;

ratingBtns.forEach((btn) => {
  btn.addEventListener('click', handleRatingButtonClick);
});

submitBtn.addEventListener('click', onSubmit);

function onSubmit() {
  initialComponent.classList.add('hide');
  submittedComponent.classList.remove('hide');

  resultOutput.textContent = ratingScore;
}

function handleRatingButtonClick(event) {
  ratingBtns.forEach((btn) => {
    btn.classList.remove('active');
  });

  event.target.classList.add('active');
  console.log(event.target.textContent);
  ratingScore = event.target.textContent;
}
