# Project related to DOM

## project link
[click here](https://stackblitz.com/edit/stackblitz-starters-2fzibk?file=index.html)

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