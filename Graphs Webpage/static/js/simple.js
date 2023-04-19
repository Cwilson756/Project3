// Use d3 to read the JSON file.
// The data from the JSON file is arbitrarily named importedData as the argument.
function somefunction(){
    d3.csv("data/yearlyUSValue.csv").then((importedData) => {
      let data = importedData;
      someOtherFunction(data,"yearlyUSValue");
      console.log(data, "yearlyUSValue");
    }
  );
    /*d3.csv("data/CensusData.csv").then((importedData) => {
      let data = importedData;
      someOtherFunction(data, "census data");
    }
  );
    d3.csv("data/yearlyStateValue.csv").then((importedData) => {
    let data = importedData;
    someOtherFunction(data, "yearlyStateValue");
  }
);*/
}
function someOtherFunction(someArray, someArrayName){
  newArray = [];
  for (let i = 0; i < someArray.length; i++){
    newArray.push(someArray[i]);
  }
  //call somecharting functin
  someChartingFunction(newArray, someArrayName);
};
function someChartingFunction(the_data_you_need_for_charting, name_of_the_array){
  //chart it here
  console.log("the_data_you_need_for_charting for:");
  console.log(name_of_the_array);
  console.log(the_data_you_need_for_charting);
}
somefunction();

