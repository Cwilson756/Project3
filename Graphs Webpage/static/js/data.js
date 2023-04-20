let States = "data/yearlyStateValue1.json"
Statesdata=d3.json(States);

let Country = "data/yearlyUSValue.json"
Counrtydata=d3.json(Country);

let Scatter_Info="data/PopulationAndPriceChange.json"
ScatterData=d3.json(Scatter_Info);

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
            x_arr.push(key);
            y_arr.push(dict[key]);
            }
        }

        var trace1 = {
        x: x_arr,
        y: y_arr,
        mode: 'lines+markers',
        type: 'scatter',
        name: selection
    };
        var x_arr1 = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,
        2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022];
        var y_arr1 = [167550,173100,186025,192125,218150,236550,243750,244950,229550,215650,222700,224900,244400,266225,285775,
        294150,305125,322425,325275,320250,336950,396800,454525];

        var trace2 = {
        x: x_arr1,
        y: y_arr1,
        mode: 'lines+markers',
        type: 'scatter',
        name: "National Average"
    };
  
        var data = [trace1, trace2];

        var layout = {
            title:"2000-2023 Average Housing Prices Per Year",
            xaxis: {title: "Year"},
            yaxis: {title: "Average Housing Price"}
    }
  
    Plotly.newPlot('myDiv', data, layout);

});
}
    
    var x_arr2 = [52.893322084,31.4523564332,90.5741423903,39.7433908699,88.1257337719,90.6995013555,8.4133805983,22.4385353619,
                  88.5040285868,79.5256667461,64.7758428917,63.2237844516,101.7205758815,28.2340318213,50.9664891924,52.7489242446,
                  47.3802202611,40.5932980453,28.04006841,51.0862826097,30.3763719365,47.447509199,87.3968297017,57.7154860558,
                  43.2817440921,43.3461403543,66.2861314716,52.1607430969,48.5723803602,26.0304759362,24.5868992388,41.0068548732,
                  43.3430433187,54.9158288318,43.2364413031,41.2330257056,38.8542835485,44.5716316061,64.4709900784,68.5261346696,
                  63.4039974577,84.8068244077,41.4394932508,35.3830352936,41.0960523432,42.1201597971,37.4050334255];
    var y_arr2 = [5.1,3.3,11.9,3.3,6.1,14.8,0.9,10.2,14.6,14.6,10.6,7.0,17.3,-0.1,4.7,4.7,3.0,3.8,2.7,2.6,7.0,7.4,2.0,7.6,-0.2,2.8,
                  9.6,7.4,15.0,4.6,5.7,2.8,4.2,9.5,15.8,2.3,5.5,10.6,2.4,4.3,10.7,8.9,8.9,15.9,18.4,2.8,7.9,14.6,-3.2,3.6,2.3];

        var trace3 = {
        x: x_arr2,
        y: y_arr2,
        mode: 'markers',
        type: 'scatter',
        name: 'States',
        text: ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida",
        "Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
        "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina",
        "North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah",
        "Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
    };
    
        var data1 = [trace3];

        var layout1 = {
        title:"2010-2020 State Home Value Growth vs State Population Growth",
        xaxis: {title: "State Home Value Growth"},
        yaxis: {title: "State Population Growth"}
    }
            
        Plotly.newPlot('myDiv1', data1, layout1);




function optionChanged(selection) {
    line(selection);
}
init();

