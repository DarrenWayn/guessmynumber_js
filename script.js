'use strict'

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'This Correct Number!'
// console.log(document.querySelector('.message').textContent)

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

const secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener
('click', function() {
    const guess = document.querySelector('.guess').value
    console.table(guess, typeof guess)

    if (!guess) {
        console.log(document.querySelector('.message').textContent = 'No Number')
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'This Correct Number!'
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'To high!'
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'You Lost The Game!'
            document.querySelector('.message').textContent = 0
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'To Low!'
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'You Lost The Game!'
            document.querySelector('.message').textContent = 0
        }
    }
})

