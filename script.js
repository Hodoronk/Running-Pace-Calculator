// Query Selectors
const kmButton = document.querySelector('#kilometer');
const mileButton = document.querySelector('#mile');
const calculateButton = document.querySelector('.calculate-button');
const resetButton = document.querySelector('.reset-button');

// Declarations
let unitChoice;
let distance;

// EventListeners
kmButton.addEventListener('click', function(){
    unitChoice = kmButton.innerHTML;
    console.log(unitChoice);
});

mileButton.addEventListener('click', function(){
    unitChoice = mileButton.innerHTML;
    console.log(unitChoice);
});

// Functions

function changeRace(){
    const distanceChoice = document.querySelector('#distances').value;
    distance = distanceChoice;
    console.log(distance);
}