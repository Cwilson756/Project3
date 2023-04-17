// data url
const url = "https://github.com/Cwilson756/Project3/blob/main/Data/monthlyStateValue.csv"

urldata=d3.csv(url)

// display the default plots
function init() {

    // dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // grab the data
    urldata.then((data) => {

        let names = data.names;
        names.forEach((name) => {
            dropdownMenu.append("option").text(name).property("value", name);
        });

        let name = names[0];

        // demographic info, bar chart, and bubble chart
        bar(name);
        bubble(name);
        demo(name);
    });
}

// bar chart
function bar(selection) {
    urldata.then((data) => {

        let samples = data.samples;
        let filteredData = samples.filter((sample) => sample.id === selection);
        let obj = filteredData[0];
        
        let trace = [{
            x: obj.sample_values.slice(0,10).reverse(),
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

// bubble chart
function bubble(selection) {
    urldata.then((data) => {

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
    urldata.then((data) => {

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

// option changed
function optionChanged(selection) {
    demo(selection);
    bar(selection);
    bubble(selection)
}

init();

