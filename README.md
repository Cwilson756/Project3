# Project3
<!--Our repo for project 3, housing data visualizations.-->


<h2 style="font-size: 24px;"> Housing by State Interactive Dashboard </h2>


**The Topic**

We are going to build an interactive dashboard showing home prices compared to the national average, home price appreciation compared to population growth, and affordability by state. This will include a dropdown on the interactive dashboard to select a state and a button to go to the choropleth map. We are doing this to highlight housing trends in the US States and to desplay the information in a clean and convient way.

**Starting the Dashboard**

To start the dashboard, open the 'index.html' file located in the 'Graphs Webpage' folder using a live server. To open the choropleth map on its own, you can either use the interactive button on the main index page, or open the 'choroplethMap.html' file in the 'Map' folder using a live server.

**The Datasets**

State home values by year: https://www.zillow.com/research/data/ 
Census Data: https://www.census.gov/data/tables/time-series/dec/popchange-data-text.html
National home value data: https://fred.stlouisfed.org/series/MSPUS
Income by state/county: https://www.bea.gov/data/income-saving/personal-income-county-metro-and-other-areas
US States Geojson: https://eric.clst.org/tech/usgeojson/


**The Visualizations**
<ul>
<li>Visualization 1: Line graph with two lines: National average home value and state specific average home value. The state to be displayed will be selected with a dropdown menu located at the top of the page. This visualization is interactive, showing year and average home value on mouse over. </li>

<li>Visualization 2: Scatter plot with all states with an X axis of State Home Value Growth and a Y axis of state population growth between 2010 and 2020. We did this to display how population growth and home value growth are correlated. This graph is interactive, with each scatter point displaying the following info: State Name, Percent Home Value Growth 2010-2020, Percent Population Growth 2010-2020. </li>

<li>Visualization 3: Choropleth map of the States colored based on years of income needed to buy a home. We did this by taking the average home value in the state and divided it by the average income for the state. This led to a range of 3-11 years, which we broke down into color brackets.The choropleth chart is interactive, with each state being clickable and displaying the following information: State Name, Average Home Value, Average Income, and Years to Purchase.</li>
</ul>

**Additional Information**
<ul>
<li>Two jupyter notebooks were used for the map and graphs data cleaning which push out files to the data folder. A SQL Schema for the data is also included in the main repo. Our Geojson was edited to include additional properties using 'geojson.io'.</li>