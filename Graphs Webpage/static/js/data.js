let States = "data/yearlyStateValue1.json"

Statesdata=d3.json(States);

function init() {

    // dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // grab the data
    Statesdata.then((data) => {

        let names = data.names;
        names.forEach((name) => {
            dropdownMenu.append("option").text(name).property("value", name);
        });

        let name = names[0];

        // calls the line function
        line(name);
    });
}


function line(selection) {
    Statesdata.then((data) => {

        let states = data.states;
        let filteredData = states.filter((state) => state.RegionName === selection);
        let obj = filteredData[0];
        var dict = obj;
        var x_arr = [];
        var y_arr = [];

        for (var key in dict) {
            if (dict.hasOwnProperty(key)) {
                console.log(key);
                console.log(dict[key]);
            x_arr.push( key );
            y_arr.push(dict[key] );
            }
        }
        var trace1 = {
        x: x_arr,
        y: y_arr,
        type: 'scatter'
    };
  
    var data = [trace1];
  
    Plotly.newPlot('myDiv', data);

});
}

function optionChanged(selection) {
    line(selection);
}

init();

