var arrayName = [];

d3.csv("data/monthlyStateValue.csv").then((importedData) => {
  // console.log(importedData);
  let MonthlyStateValue = importedData;

  console.log(MonthlyStateValue);
});
d3.csv("data/yearlyCountyIncome.csv").then((importedData) => {
  // console.log(importedData);
  let YearlyCountyIncome = importedData;

  console.log(YearlyCountyIncome);
});
d3.csv("data/yearlyStateValue.csv").then((importedData) => {
  // console.log(importedData);
  var YearlyStateValue = importedData;

  console.log(YearlyStateValue);
});
var fred = [];

d3.csv("data/yearlyUSValue.csv").then((importedData) => {
  // console.log(importedData);
  let YearlyUSValue = importedData;
  let listList = YearlyUSValue.map(dict => Object.values(dict));
  let numberList = listList.map(innerList => innerList.map(str => parseFloat(str)));
  var dataSet = anychart.data.set(numberList);
  var seriesData = dataSet.mapAs({ x: 0, value: 1 });
  var chart = anychart.line();
  var lineChart = chart.line(seriesData);
  // set the container id for the line chart
  chart.container('container');
  // draw the line chart
  chart.draw();
  console.log(numberList);
  //console.log(YearlyUSValue);
  //fred = YearlyUSValue
});
d3.csv("data/CensusData.csv").then((importedData) => {
  // console.log(importedData);
  let CensusData = importedData;

  console.log(CensusData);
});

/*console.log(YearlyUSValue.length);
let arr = [];
for (let i = 0; i < YearlyUSValue.length; i++) {
  arr.push(YearlyUSValue[i]);
}
console.log(arr);
var dict = YearlyUSValue;
var arr = [];

for (var key in dict) {
    if (dict.hasOwnProperty(key)) {
        arr.push( [ key, dict[key] ] );
    }
}
console.log(arr);


var dataSet = anychart.data.set(listList());
var seriesData = dataSet.mapAs({ x: 0, value: 1 });
var chart = anychart.line();
var lineChart = chart.line(seriesData);

// set the container id for the line chart
chart.container('container');

// draw the line chart
chart.draw();
*/