function getData (){
  d3.csv("data/yearlyUSValue.csv").then((importedData) => {
    // console.log(importedData);
    let YearlyUSValue = importedData;
    let USlistList = YearlyUSValue.map(dict => Object.values(dict));
    let USnumberList = USlistList.map(innerList => innerList.map(str => parseFloat(str)));
    console.log(USnumberList);
  });
  d3.csv("data/CensusData.csv").then((importedData) => {
    // console.log(importedData);
    let CensusData = importedData;
    let CensuslistList = CensusData.map(dict => Object.values(dict));
    let CensusnumberList = CensuslistList.map(innerList => innerList.map(str => parseFloat(str)));
    console.log(CensusnumberList);
  });
  d3.csv("data/yearlyStateValue.csv").then((importedData) => {
  // console.log(importedData);
    let YearlyStateValue = importedData;
    let StatelistList = YearlyStateValue.map(dict => Object.values(dict));
    let StatenumberList = StatelistList.map(innerList => innerList.map(str => parseFloat(str)));
    console.log(StatenumberList);
  });
  }
  function GetData(USnumberList){
    USArray = [];
    for (let i = 0; i < USnumberList.length; i++){
      USArray.push(USnumberList[i]);
  
    }
    //call somecharting functin
    ChartIt(USArray);
  
  };
function ChartIt(the_data_you_need_for_charting){
    console.log("This One");
    console.log(the_data_you_need_for_charting);
      var dataSet = anychart.data.set(the_data_you_need_for_charting);
      var seriesData = dataSet.mapAs({ x: 0, value: 1 });
      var chart = anychart.line();
      var lineChart = chart.line(seriesData);
      // set the container id for the line chart
      chart.container('container');
      // draw the line chart
      chart.draw();
    }
getData();

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