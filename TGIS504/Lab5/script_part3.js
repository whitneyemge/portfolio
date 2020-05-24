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
          backgroundColor: "#4dc247",
          data: nineteenninety
        },
        {
          label: "2000",
          backgroundColor: "#2e742b",
          data: twothousand
        },
        {
          label: "2010",
          backgroundColor: "#0f270e",
          data: twothousandten
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Forest Area (% of land area)"
      }
    }
});

var countries = ["Sub-Saharan Africa", "North America", "South Asia", "Middle East & North Africa", "Latin America & Caribbean", "Europe & Central Asia", "East Asia & Pacific"];
var ninety = [447994.28, 5259336.08, 782138.10, 559387.67, 700239.32, 0, 2891961.35];
var ninetyfive = [487866.00, 5606003.26, 1037078.94, 717856.75, 790238.50, 1291565.10, 4009799.78];
var two = [550435.75, 6236807.93, 1336133.79, 872980.69, 932041.39, 1128006.48, 4213074.30];
var twofive = [622506.25, 6358677.01, 1603095.06, 1088875.31, 1033646.63, 1245051.96, 6854215.10];
var twoten = [708288.38, 5905450.48, 2197647.77, 1286882.31, 1177514.04, 1342906.99, 9559083.33]

var ctx = document.getElementById("co2Chart");
var co2Chart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: countries,
      datasets: [
          {
              label: "1990",
              data: ninety,
              borderColor: "rgba(7, 95, 54, 1)",
          },
          {
              label: "1995",
              data: ninetyfive,
              borderColor: "rgba(7, 77, 95, 1)",
          },
          {
              label: '2000',
              data: two,
              borderColor: "rgba(14, 7, 95, 1)",
          },
          {
              label: '2005',
              data: twofive,
              borderColor: "rgba(79, 7, 95, 1)",
          },
          {
              label: '2010',
              data: twoten,
              borderColor: "rgba(95, 7, 7, 1)",
          }
      ]
    }
  });
