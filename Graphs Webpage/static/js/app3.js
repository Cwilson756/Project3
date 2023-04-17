function processFile(filePath){
  var file = filePath;
  //document.querySelector('#myFile').files[0];
  var reader = new FileReader();
  reader.readAsText(file);

  //if you need to read a csv file with a 'ISO-8859-1' encoding
  /*reader.readAsText(file,'ISO-8859-1');*/

  //When the file finish load
  reader.onload = function(event) {

    //get the file.
    var csv = event.target.result;

    //split and get the rows in an array
    var rows = csv.split('\n');

    //move line by line
    for (var i = 1; i < rows.length; i++) {
      //split by separator (,) and get the columns
      cols = rows[i].split(',');

      //move column by column
      for (var j = 0; j < cols.length; j++) {
        /*the value of the current column.
        Do whatever you want with the value*/
        var value = cols[j];
      }
    }
  }
}
var file = "Average_Yearly_Housing_Prices_by_State.csv";
processFile(file);