function csvJSON(csv){

  var lines=csv.split("\r");

  var result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step 
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
      }

      result.push(obj);

  }

  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
  console.log(obj);
};
var file = new File([""],"Average_Yearly_Housing_Prices_by_State.csv");
file.open('r');
var data=file.read()
//readCSV(event) {
//  const reader = new FileReader();
//  reader.readAsText(event.files[0]);
//  reader.onload = () => {
//      const text = reader.result;
//      const csvToJson = this.csvJSON(text);
//      console.log(csvToJson);
//  };


csvJSON(data);
