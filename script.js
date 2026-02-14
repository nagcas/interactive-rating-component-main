// I check if my script is linked correctly to the html document
console.log("It's working...");

const rating = document.querySelectorAll('.rating-start__item-selected');
const submit = document.getElementById('button-submit');
const ratingStart = document.querySelector('.rating-start');
const thankYouVisibled = document.querySelector('.visibled__off');
const ratingValue = document.querySelector('.rating-value');

let currentSelected = null;

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener('click', () => {
    // Removes the previous selection
    for (let i = 0; i < rating.length; i++) {
      rating[i].classList.remove('selected-item');
    }
    
    // Select the current rating
    rating[i].classList.add('selected-item');    
    
    // Assigns the selected value to the variable
    currentSelected = rating[i].innerText;
    
    // Re-enable the submit button
    submit.disabled = false;
  })
}

submit.addEventListener('click', () => {
  // Display rating start none
  ratingStart.style.display = 'none';

  // display thank you visibled on
  thankYouVisibled.classList.remove('visibled__off');
  thankYouVisibled.classList.add('visibled__on');

  // Add value rating
  ratingValue.innerText = currentSelected;
})
