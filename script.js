'use strict'

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'This Correct Number!'
// console.log(document.querySelector('.message').textContent)

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value
    console.table(guess, typeof guess)

    if (!guess) {
        console.log(document.querySelector('.message').textContent = 'No Number')
    }
})

