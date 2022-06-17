let btn = document.querySelector(".btn"),
  title = document.querySelector(".title");

btn.addEventListener("click", fTypeText);

function fTypeText() {
  let anyString = title.textContent;
  title.innerHTML = '';
  let i = 0;
  let fType = function() {
    if (i < anyString.length) {
      title.insertAdjacentHTML('beforeend', `<span>${anyString[i]}</span>`);
    }
    i++;
  }
  title.addEventListener("animationend", fType);
  fType();
};