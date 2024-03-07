# Project related to DOM

## project link
[click here](https://stackblitz.com/edit/stackblitz-starters-vyrf5y?file=index.html)

# Solution Code

## project 1

```javascript

const body = document.querySelector('body');

const boxes = document.querySelectorAll('.boxes');

boxes.forEach(function(box){
  box.addEventListener('click', function(e){
    body.style.backgroundColor = e.target.id;
  })
})

```

## project 2

```javascript

console.log('hiiiiiiiii');
const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  result.innerText = '';

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerText = 'Please enter valid height.';
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    const textNode = document.createTextNode('  Please enter valid weight.');
    result.appendChild(textNode);
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<div>Your BMI is = <span>${bmi}</span><div>`;

    const catagory = document.createElement('div');
    let catagoryTextNode;
    if (bmi < 18.6) {
      catagoryTextNode = document.createTextNode('You are Under weight');
    } else if (bmi <= 24.9) {
      catagoryTextNode = document.createTextNode("You'r Normal weight");
    } else {
      catagoryTextNode = document.createTextNode("You'r Over weight");
    }
    catagory.appendChild(catagoryTextNode);
    result.appendChild(catagory);
  }
});

```