// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

// function that calls all buttons in btns, add event listener to all btns
btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList; // this tells us which classes are associated to which button, and so we can set up an if statement
        if(styles.contains('decrease')) {
            count--;
        }
        else if(styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        if(count > 0) {
            value.style.color = 'green'
        }
        else if(count < 0) {
            value.style.color = 'red'
        }
        else {
            value.style.color = 'black'
        }
        value.textContent = count;
    });
});