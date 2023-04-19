var US_Values= [];
var State_Values = [];

var csv_US = "data/yearlyUSValue.csv";
var csv_US = "data/yearlyStateValue.csv";
var csvs = [csv_US,csv_US];
var promises = [];
csvs.forEach(function(csv){promises.push(d3.csv(csv))});
console.log(promises);
Promise.all(promises).then(data => init(data));

function addUS(response){
  var US = response;
  return US;
}

function addStates(response){
  var States = response;
  return States;
}

function init(data) {
  US_Values = addUS(data[0]);
  State_Values = addStates(data[1]);
};

init();

console.log(US_Values);
console.log(State_Values);