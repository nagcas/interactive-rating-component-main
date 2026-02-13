// Verifico se il mio script è collegato correttamente al document html
console.log("It's working...");

const rating = document.querySelectorAll('.rating-start__item-selected');
console.log(rating);

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener('click', () => {
    console.log(rating[i]);
    rating[i].classList.add('selected');
  })
}
