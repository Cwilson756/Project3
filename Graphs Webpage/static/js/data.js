let States = "data/yearlyStateValue1.json"
Statesdata=d3.json(States);

let Country = "data/yearlyUSValue.json"
Counrtydata=d3.json(Country);

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
            y_arr.push(dict[key]);
            }
        }

        var x_arr1 = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,
                      2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022];
        var y_arr1 = [167550,173100,186025,192125,218150,236550,243750,244950,229550,215650,222700,224900,244400,266225,285775,
                      294150,305125,322425,325275,320250,336950,396800,454525];


        var trace1 = {
        x: x_arr,
        y: y_arr,
        mode: 'lines+markers',
        type: 'scatter',
        name: selection
    };

        var trace2 = {
        x: x_arr1,
        y: y_arr1,
        mode: 'lines+markers',
        type: 'scatter',
        name: "National Average"
    };
  
    var data = [trace1, trace2];

    var layout = {
        title:"Average Housing Prices Per Year",
        xaxis: {title: "Year"},
        yaxis: {title: "Average Housing Price"}
    }
  
    Plotly.newPlot('myDiv', data, layout);

});
}

function optionChanged(selection) {
    line(selection);
}

init();

