const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// add event listener
btn.addEventListener('click', function() {
    let hexColor = '#'
    for(let i = 0; i<6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
};


// hex color consist of hashtag and 6 values and these values could be from 0-9, letters go from 10-15
// to get hex value, we must have a hashtag, which is why we've created a variable hexColor
//now we need a loop that goes around 6 times to create our hex color. 