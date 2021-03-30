console.log(`Good, It didn't crash`);

const theBody = document.body;

const button = document.querySelector(`.switch_theme`);

const theButtons = document.querySelectorAll(`.button_light`);

const page1Changer = document.querySelector(`.switch_page_1`);

const page2Changer = document.querySelector(`.switch_page_2`);

const ulrPage1 = `index.html`;

const ulrPage2 = `page_2.html`;

function ChangeToPageTwo() {
  window.location = ulrPage2
}

function ChangeToPageOne() {
  window.location = ulrPage1
}

console.log(page1Changer);
if (page1Changer) { // Changing from page 1 to page 2 by using a function
    page1Changer.addEventListener(`click`, ChangeToPageTwo);
}

console.log(page2Changer);
if (page2Changer) { // Changing from page 1 to page 2 by using a function
    page2Changer.addEventListener(`click`, ChangeToPageOne);
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

