const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// call elements
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

// set upevent listener for click events and add callback function, then set up our logic in the middle
btn.addEventListener('click', function() {
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
