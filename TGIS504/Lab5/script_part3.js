var countries = ["Sub-Saharan Africa", "North America", "South Asia", "Middle East & North Africa", "Latin America & Caribbean", "Europe & Central Asia", "East Asia & Pacific"];
var nineteenninety = [29.43, 35.65, 16.51, 2.15, 59.34, 9.52, 28.69];
var twothousand = [27.98, 35.68, 16.56, 2.20, 56.87, 9.76, 28.51];
var twothousandten = [26.58, 35.96, 17.33, 2.51, 54.45, 10.16, 29.60]

var cth = document.getElementById("forestChart");
var forestChart = new Chart(cth, {
    type: 'bar',
    data: {
      labels: countries,
      datasets: [
        {
          label: "1990",
          backgroundColor: "#78c679",
          data: nineteenninety
        },
        {
          label: "2000",
          backgroundColor: "#31a354",
          data: twothousand
        },
        {
          label: "2010",
          backgroundColor: "#006837",
          data: twothousandten
        }
      ]
    },
    options: {
      scales:{
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Forest Area (% of land area)"
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          },
          scaleLabel: {
            display: true,
            labelString: "Country"
          }
        }]
      }
    }
});

var year = ["1990", "1995", "2000", "2005", "2010"];
var ssa = [447994.28, 487866.00, 550435.75, 622506.25, 708288.38];
var na = [5259336.08, 5606003.26, 6236807.93, 6358677.01, 5905450.48];
var sa = [782138.10, 1037078.94, 1336133.79, 1603095.06, 2197647.77];
var mena = [559387.67, 717856.75, 872980.69, 1088875.31, 1286882.31];
var lac = [700239.32, 790238.50, 932041.39, 1033646.63, 1177514.04];
var eca = [0, 1291565.10, 1128006.48, 1245051.96, 1342906.99];
var eap = [2891961.35, 4009799.78, 4213074.30, 6854215.10, 9559083.33]

var ctx = document.getElementById("co2Chart");
var co2Chart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: year,
      datasets: [
          {
              label: "Sub-Saharan Africa",
              data: ssa,
              borderColor: "#c20000",
              fill: false
          },
          {
              label: "North America",
              data: na,
              borderColor: "#374c80",
              fill: false
          },
          {
              label: "South Asia",
              data: sa,
              borderColor: "#7a5195",
              fill: false
          },
          {
              label: "Middle East & North Africa",
              data: mena,
              borderColor: "#ff764a",
              fill: false
          },
          {
              label: "Latin America & Caribbean",
              data: lac,
              borderColor: "#003f5c",
              fill: false
          },
          {
              label: "Europe & Central Asia",
              data: eca,
              borderColor: "#ffa600",
              fill: false
          },
          {
              label: "East Asia & Pacific",
              data: eap,
              borderColor: "#ef5675",
              fill: false
          }
      ]
    },
    options: {
      scales:{
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Carbon Dioxide Emissions (kt)"
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          },
          scaleLabel: {
            display: true,
            labelString: "Year"
          }
        }]
      }
    }
  });
