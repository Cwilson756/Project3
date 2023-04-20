anychart.onDocumentReady(function () {
  anychart.data.loadCsvFile("data/PopulationAndPriceChange.csv", function(data) {
    // The main scatter plot visualization code will be here.
    let chart = anychart.scatter();

    let marker = chart.marker(data);
    console.log(data);
    marker.type("circle").size(3);
    chart.container("container");
    chart.draw();
    marker
    .tooltip()
    .format(function () {
      return (
        "\nState: " +
        this.column == [2] +
        "\nPopulation Percent Change: " +
        this.getData("PercentChangeInResidentPopulation") +
        "%" +
        "\nHouse Sale Percent Change: " +
        this.SalesPercentChange +
        "%"
      );
    });
    chart.xScale().minimum(0).maximum(120).ticks({ interval: 10 });
    chart.yScale().minimum(-7).maximum(21).ticks({ interval: 10 });
    chart.background().fill("#0d468f");
    marker.type("circle").size(4).fill("#c6e3f9").stroke("#3e5ca6");
    // set the chart title
    chart
    .title()
    .enabled(true)
    .useHtml(true)
    .text(
      '<span style = "color: #c6e3f9; font-size:18px;">House Sales Percent Change vs Population Percent Change</span>'
    );

    // set the titles of the axes
    chart
    .yAxis()
    .title()
    .enabled(true)
    .useHtml(true)
    .text(
      '<span style = "color: #b3b3b3;">House Sales Percent Change from 2010 to 2020</span>'
    );
    chart
    .xAxis()
    .title()
    .enabled(true)
    .useHtml(true)
    .text(
      '<span style = "color: #b3b3b3;">Populaiton Percent Change from 2010 to 2020</span>'
    );

  }
  );
});
