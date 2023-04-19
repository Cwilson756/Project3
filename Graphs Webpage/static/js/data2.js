// data url
let States = "data/yearlyStateValue1.json"

Statesdata=d3.json(States)

// display the default plots
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

        // demographic info, bar chart, and bubble chart
        //bar(name);
        //bubble(name);
        //demo(name);
        line(name);
    });
}

// bar chart
/*function bar(selection) {
  Statesdata.then((data) => {

        let states = data.states;
        let filteredData = states.filter((state) => state.RegionName === selection);
        let obj = filteredData[0];
        
        let trace = [{
            x: obj.state_values.slice(0,10).reverse(),
            y: obj.otu_ids.slice(0,10).map((otu_id) => `OTU ${otu_id}`).reverse(),
            text: obj.otu_labels.slice(0,10).reverse(),
            type: "bar",
            marker: {
                color: "rgb(80,80,260)"
            },
            orientation: "h"
        }];
        
        Plotly.newPlot("bar", trace);
    });
}
*/
function line(selection) {
    Statesdata.then((data) => {

        let states = data.states;
        let filteredData = states.filter((state) => state.RegionName === selection);
        let obj = filteredData[0];
        
        var dataSet = anychart.data.set(selection);
        var seriesData = dataSet.mapAs({ x: 0, value: 1 });
        var lineChart = chart.line(seriesData);
        chart.container('container');
        chart.draw();
    
    
    });
}
// create a data set on our data
//var dataSet = anychart.data.set(getData());

// map data for the line chart,
// take x from the zero column and value from the first column
//var seriesData = dataSet.mapAs({ x: 0, value: 1 });

// create a line chart
//var chart = anychart.line();

// create a line series with the mapped data
//var lineChart = chart.line(seriesData);

// set the container id for the line chart
//chart.container('container');

// draw the line chart
//chart.draw();








// bubble chart
/*
function bubble(selection) {
  Statesdata.then((data) => {

        let samples = data.samples;
        let filteredData = samples.filter((sample) => sample.id === selection);
        let obj = filteredData[0];
        
        let trace = [{
            x: obj.otu_ids,
            y: obj.sample_values,
            text: obj.otu_labels,
            mode: "markers",
            marker: {
                size: obj.sample_values,
                color: obj.otu_ids,
                colorscale: "Electric"
            }
        }];
    
        let layout = {
            xaxis: {title: "OTU ID"}
        };
    
        Plotly.newPlot("bubble", trace, layout);
    });
}

// demographics info
function demo(selection) {
  Statesdata.then((data) => {

        let metadata = data.metadata;
        let filteredData = metadata.filter((meta) => meta.id == selection);
        let obj = filteredData[0]
        
        d3.select("#sample-metadata").html("");
  
        let entries = Object.entries(obj);
        entries.forEach(([key,value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });

        console.log(entries);
    });
  }
*/
// option changed
function optionChanged(selection) {
    //demo(selection);
    //bar(selection);
    //bubble(selection);
    line(selection);
}

init();

