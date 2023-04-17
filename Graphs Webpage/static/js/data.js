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
  let YearlyStateValue = importedData;

  console.log(YearlyStateValue);
});
d3.csv("data/yearlyUSValue.csv").then((importedData) => {
  // console.log(importedData);
  let YearlyUSValue = importedData;

  console.log(YearlyUSValue);
});
d3.csv("data/CensusData.csv").then((importedData) => {
  // console.log(importedData);
  let CensusData = importedData;

  console.log(CensusData);
});
