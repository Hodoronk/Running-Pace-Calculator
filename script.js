// Query Selectors
const kmButton = document.querySelector('#kilometer');
const mileButton = document.querySelector('#mile');
const custom = document.querySelector('.custom');
const distances = document.querySelector('#distances');
const calculateButton = document.querySelector('.calculate-button');
const resetButton = document.querySelector('.reset-button');
const timeHrs = document.querySelector('.time-box-hrs');
const timeMin = document.querySelector('.time-box-min');
const timeSec = document.querySelector('.time-box-sec');
const minPace = document.querySelector('#minPace');
const secPace = document.querySelector('#secPace');
let distance;
let unitType = 0; // km = 1, mile = 2, 0 = none
custom.textContent = 0;

let h;
let min;
let sec;

let paceMin;
let paceSec;

let x;
let y;
let secondsPerKm;
let secondsPerMile;
let result;
let remainder;
let seconds;

let operationDeterminer; // Its value determines whether the program calculates the time or the pace. 0 is Pace calculation, 1 is Time calculation

resetButton.addEventListener('click', function(){
    unitType = 0; // add all variables and make them either '', undefined or 0, depending on case.
    alert('cock');

});



kmButton.addEventListener('click', function(){
    unitType = 1;
});
mileButton.addEventListener('click', function(){
    unitType = 2;
});

function checkUnit(){
    if(unitType === '0'){
        alert('You must pick a unit!');
        return false;
    }else{
        return true;
    }
}

function eitherOr(){
    if(distances.value === '0' && custom.value === ''){
        alert('You must choose a distance!');

    }else if(distances.value !== '0' && custom.value !== ''){
        alert('You must either choose a custom distance or a standard one!');
        distances.value = '0';
        custom.value = '';

    }else if(distances.value !== '0' && custom.value === ''){
        if(distances.value === '1'){
            distance = 5;

        }else if(distances.value === '2'){
            distance = 10;

        }else if(distances.value === '3'){
            distance = 21;

        }else if(distances.value === '4'){
            distance = 42

        }
    }else if(distances.value === '0' && custom.value !== ''){
        distance = Number(custom.value);
        console.log(`Custom value is ${distance}`);
    }
}


function timeInput(){
    h = Number(timeHrs.value);
    min = Number(timeMin.value);
    sec = Number(timeSec.value);

}
function paceInput(){
    paceMin = Number(minPace.value);
    paceSec = Number(secPace.value);

}

function checkForDualInput(){
    if(timeHrs.value === '' && timeMin.value === '' && timeSec.value === '' && minPace.value !== '' && secPace.value !== ''){
        operationDeterminer = 1;
        console.log(operationDeterminer);
        return true;
    }else if(timeHrs.value !== '' && timeMin.value !== '' && timeSec.value !== '' && minPace.value === '' && secPace.value === ''){
        operationDeterminer = 0;
        console.log(operationDeterminer);
        return true;
    }else{
        operationDeterminer = 1;
        console.log(operationDeterminer);
        return false;
    }
}
function standardDistanceConverter(){
    if(distances.value === '1'){ distance = 3.1;}
    else if(distances.value === '2'){ distance = 6.2}
    else if(distances.value === '3'){distance = 13.04}
    else if(distances.value === '4'){distance === 26.09}

}


function theCalculation(){
    if(operationDeterminer === 0 && unitType === 1){
        x = h*60;
        x = x*60;
        y = min*60;
        secondsPerKm = x + y + sec;
        result = secondsPerKm / distance;
        remainder = result % 60;
        result = result - remainder;
        result = result / 60;
        Math.trunc(remainder);
        minPace.value = result;
        secPace.value = Math.trunc(remainder);

    }else if(operationDeterminer === 0 && unitType === 2){ 
        standardDistanceConverter();
        x = h*60;
        x = x*60;
        y = min*60;
        secondsPerKm = x + y + sec;
        result = secondsPerKm / distance;
        remainder = result % 60;
        result = result - remainder;
        result = result / 60;
        Math.trunc(remainder);
        minPace.value = result;
        secPace.value = Math.trunc(remainder);

    }else if(operationDeterminer === 1 && unitType === 1){
        console.log(`minpace is ${minPace.value}`);
        seconds = Number(minPace.value) * 60;
        seconds = Number(seconds) + Number(secPace.value); //seconds per km;
        result = Number(seconds) * Number(distance);
        remainder = result % 60;
        result = result / 60;
        result = Math.trunc(result);
        remainder = Math.trunc(remainder);
        console.log(`result and remainder: ${result}:${remainder}`);
        if(result < 60){
            timeHrs.value = 0;
            timeMin.value = result;
            timeSec.value = remainder;
        }else{
            // find out how to get hours to go in as well
        }
    }else if(operationDeterminer === 1 && unitType === 2){
        standardDistanceConverter();
        console.log(`minpace is ${minPace.value}`);
        seconds = Number(minPace.value) * 60;
        seconds = Number(seconds) + Number(secPace.value); //seconds per km;
        result = Number(seconds) * Number(distance);
        console.log(`result here is ${result}`);
        console.log(`distance value should be the miles equivalent ${distance}`);
        remainder = result % 60;
        result = result / 60;
        result = Math.trunc(result);
        remainder = Math.trunc(remainder);
        console.log(`result and remainder: ${result}:${remainder}`);
        if(result < 60){
            timeHrs.value = 0;
            timeMin.value = result;
            timeSec.value = remainder;
        }else{
            // find out how to get hours to go in as well
        }

    }
}



calculateButton.addEventListener('click', function(){

    if(!checkUnit()){
        return;
    }
    eitherOr();
    timeInput();
    paceInput();
    if(!checkForDualInput()){
        return;
    }
    theCalculation();
    
});