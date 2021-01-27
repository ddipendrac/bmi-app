'use strict'

// Select elements
let male = document.getElementById('card-male'); 
let female = document.getElementById('card-female'); 
let height = document.getElementById('height-value');
let slider = document.getElementById('slider');
let weight = document.getElementById('weight-value');
let minusWeight = document.getElementById('minus-weight');
let plusWeight = document.getElementById('plus-weight');
let age = document.getElementById('age-value');
let minusAge = document.getElementById('minus-age');
let plusAge = document.getElementById('plus-age');
let calculate = document.getElementById('calculate');
let bmiLabel = document.getElementById('result-label');
let bmiResult = document.getElementById('bmi');
let suggestion = document.getElementById('suggestion');



weight.innerHTML = 55;
age.innerHTML = 21;
height.innerHTML = slider.value;
console.log(slider.value);

// Update the current weight value

plusWeight.addEventListener('click', function(){
weight.innerHTML ++;
})
minusWeight.addEventListener('click', function(){
weight.innerHTML --;
})

// Update currect age
plusAge.addEventListener('click', function(){
age.innerHTML ++;
})
minusAge.addEventListener('click', function(){
age.innerHTML --;
})

// Update the current height value

slider.oninput = function() {
height.innerHTML = this.value;
}

// Calculate
calculate.addEventListener('click', function() {
  let result;
  result = weight.innerHTML / (((height.innerHTML)/100) * ((height.innerHTML)/100))

  let finalResult = result.toFixed(2);

  bmiResult.innerHTML = (finalResult);

  bmiLabelSelector();
  bmiSuggestionSelector();
})

// BMI Label selector
function bmiLabelSelector() {
  if(bmiResult.innerHTML >= 25) {
    bmiLabel.innerHTML = 'Overweight';
  } else if(bmiResult.innerHTML > 18.5) {
    bmiLabel.innerHTML = 'Normal';
  } else {
    bmiLabel.innerHTML = 'Underweight';
  }
}

// BMI suggestion selector
function bmiSuggestionSelector() {
  if(bmiResult.innerHTML >= 25) {
    suggestion.innerHTML = 'You have a higher than normal body weight. Try to exercise more.';
  } else if(bmiResult.innerHTML > 18.5) {
    suggestion.innerHTML = 'You have a normal body weight. Good job!';
  } else {
    suggestion.innerHTML = 'You have a lower than normal body weight. You can eat a bit more.';
  }
}

// Male female selector

male.addEventListener('click', function() {
  female.classList.add('card-female');
  male.classList.remove('card-male');
  male.classList.add('card-active');
})
female.addEventListener('click', function() {
  male.classList.add('card-male');
  female.classList.remove('card-female');
  female.classList.add('card-active');
})

// Smooth scroll effect
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
        {
           scrollTop: $(hash).offset().top - 100
         },
        800
     );
  }
});



