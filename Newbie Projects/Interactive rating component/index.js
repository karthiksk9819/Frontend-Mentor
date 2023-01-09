let optionBtns = [...document.querySelector(".rating__options").children];
let submitBtn = document.querySelector(".rating__button");
let ratingCard= document.querySelector('.rating')
let ratedCard= document.querySelector('.rated')
let selectedOption=document.querySelector('.rated__selection__option')
console.log(optionBtns);
let selected = null;

optionBtns.forEach((ele) => {
  ele.addEventListener("click", () => {
    selected = ele.dataset.btn;
    selectedOption.innerText=selected
  });
});



submitBtn.addEventListener('click',()=>{
    ratingCard.classList.toggle('hidden');
    ratedCard.classList.toggle('visible');
})
