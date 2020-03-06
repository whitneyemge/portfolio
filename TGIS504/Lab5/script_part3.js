var cities = ["Bellingham", "Seattle", "Tacoma", "Olympia", "Portland"];
var list_price = [415, 685, 300, 357, 449];
var sell_price = [407, 673, 291, 321, 415];

var cth = document.getElementById("homeChart");
var homeChart = new Chart(cth, {
    type: 'bar',
    data: {
      labels: cities,
      datasets: [
        {
          label: "Listing Price",
          backgroundColor: "#3e95cd",
          data: list_price
        },
        {
          label: "Selling Price",
          backgroundColor: "#8e5ea2",
          data: sell_price
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "House listing and selling prices (in thousands of dollars)"
      }
    }
});
