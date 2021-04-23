console.log(`Good, It didn't crash`);
const theBody = document.body;
const button = document.querySelector(`.switch_theme`);
const theButtons = document.querySelectorAll(`.button_light`);
const page1Changer = document.querySelector(`.switch_page_1`);
const page2Changer = document.querySelector(`.switch_page_2`);
const page3Changer = document.querySelector(`.switch_page_3`);
const page4Changer = document.querySelector(`.switch_page_4`);
const urlPage1 = `index.html`;
const urlPage2 = `page_2.html`;
const urlPage3 = `page_3.html`;
const firstInput = document.querySelector(`.input_1`)
const secondInput = document.querySelector(`.input_2`)
const inputSecurity1 = document.querySelector(`.input_security_1`)
const inputSecurity2 = document.querySelector(`.input_security_2`)
const calculateButton = document.querySelector(`.button_calculate`)
function ChangeToPageOne() { // Functions for changing pages
  window.location = urlPage1
}
function ChangeToPageTwo() {
  window.location = urlPage2
}
function ChangeToPageThree() {
  window.location = urlPage3
}
console.log(page1Changer);
if (page1Changer) { // Changing from page 1 to page 2 by using a function
    page1Changer.addEventListener(`click`, ChangeToPageTwo);
}
console.log(page2Changer);
if (page2Changer) { // Changing from page 2 to page 1 by using a function
    page2Changer.addEventListener(`click`, ChangeToPageOne);
}
console.log(page3Changer);
if (page3Changer) { // Changing from page 2 to page 3 by using a function
    page3Changer.addEventListener(`click`, ChangeToPageThree);
}
console.log(page4Changer);
if (page4Changer) { // Changing from page 3 to page 2 by using a function
    page4Changer.addEventListener(`click`, ChangeToPageTwo);
}
console.log(button);
if (button) { // Changing body and text to other theme
    button.addEventListener(`click`, function() {
      theBody.classList.toggle(`the_body_dark`);

    for (let i = 0; i < theButtons.length; i++) { // Changing buttons to other theme
        const changeButton = theButtons[i];
        changeButton.classList.toggle('button_dark')
    }
  })
}
console.log(calculateButton);
console.log(inputSecurity1);
console.log(inputSecurity2);
if (calculateButton) { // Checking if the button is clicked
    button.addEventListener(`click`, function() {
      if (isNaN(inputSecurity1.value) && isNaN(inputSecurity2.value)) { // Checking if the inputs are numbers
        alert("De input was niet een nummer");
      }
      else{
        const finalAwnser = firstInput.value / (secondInput.value * secondInput.value);
        console.log(finalAwnser);
      }
  })
}
      