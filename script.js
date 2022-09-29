// Query Selectors
const kmButton = document.querySelector('#kilometer');
const mileButton = document.querySelector('#mile');
const calculateButton = document.querySelector('.calculate-button');
const resetButton = document.querySelector('.reset-button');
const timeHrs = document.querySelector('.time-box-hrs');
const timeMin = document.querySelector('.time-box-min');
const timeSec = document.querySelector('.time-box-sec');
const minPace = document.querySelector('#minPace');
const secPace = document.querySelector('#secPace');


// Declarations
let unitChoice = ''
let distance = '';
let hrs = '';
let mins = '';
let secs = '';
let convertedTime;
let pace;

// EventListeners
kmButton.addEventListener('click', function(){
    unitChoice = kmButton.innerHTML;
    console.log(unitChoice);
});

mileButton.addEventListener('click', function(){
    unitChoice = mileButton.innerHTML;
    console.log(unitChoice);
});

calculateButton.addEventListener('click', function(){
    if(unitChoice === ''){alert('Choose a unit!'); return;}
    if(distance === ''){
    const customDistance = document.querySelector('.custom').value;
    console.log(customDistance);
    }else{
        changeRace();
    }
    if(timeHrs !== ''){hrs = timeHrs.value}
    if(timeMin !== ''){mins = timeMin.value}
    if(timeSec !== ''){secs = timeSec.value}
    console.log(`Time: ${hrs}:${mins}:${secs}`);
    timeConverter(hrs, mins, secs);

    if(customDistance === ''){
    determinePace(convertedTime, distance);
    console.log(pace);
    }else if(customDistance !== ''){
        determinePace(convertedTime, customDistance);
        console.log(pace);
    }

});




// Functions

function changeRace(){
    let distanceChoice = document.querySelector('#distances').value;
    distance = distanceChoice;
    console.log(distance);
}

function timeConverter(a, b, c){
    return convertedTime = (Number(a) * 60) + Number(b);
}
function determinePace(time, distance){
    return pace = convertedTime / distance;
    
}
function determineTime(pace, time){}
