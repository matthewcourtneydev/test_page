let count = 0;
let button = document.querySelector('#btn');
document.querySelector('#count-display').innerHTML = count
let counter = document.querySelector('#count-display');
button.addEventListener('click', () => {
    count ++;
    counter.innerHTML = count
})

