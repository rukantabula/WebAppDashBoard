  
  
    const trafficChart = document.getElementById('line-chart').getContext('2d');
    const dailyTrafficChart = document.getElementById('bar-chart').getContext('2d');
    const mobileUserChart = document.getElementById('doughnut-chart').getContext('2d');
    const trafficChartMenu = document.querySelector('.traffic-chart-menu');
    const chartMenuItems = trafficChartMenu.querySelectorAll('p');
    const chart = chartData();
    
    const createChart = (labels, data, bgOpacity = .3, chartName = trafficChart, type = 'line', isDoughnut = false) => {
        new Chart(chartName, {
          type: type,
          data: {
            labels: labels,
            datasets: [
              {
                data: data,
                backgroundColor: isDoughnut
                  ? ["#81c98f", "#74b1bf", "#7377bf"]
                  : `rgba(115, 119, 191, ${bgOpacity})`,
                borderColor: "#7377bf",
                borderWidth: .5
              }
            ]
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
              display: isDoughnut ? true : false,
              position: "right",
              labels: { boxWidth: 8, fontSize: 12 }
            },
            elements: { line: { tension: 0 }, point: { radius: 5 } }
          }
        });
    };

        const viewChart = {
            hourly: () => createChart(chart.hourly.labels, chart.hourly.data),
            daily: () => createChart(chart.daily.labels, chart.daily.data),
            weekly: () => createChart(chart.weekly.labels, chart.weekly.data),
            monthly: () => createChart(chart.monthly.labels, chart.monthly.data),
            dailyTraffic: () => createChart(chart.dailyTraffic.labels, chart.dailyTraffic.data, 1, dailyTrafficChart, 'bar'),
            mobileUser: () => createChart (chart.mobileUser.labels, chart.mobileUser.data, .8, mobileUserChart, 'doughnut', true)
        };

        chart.defaultChartList.forEach(type => viewChart[type]());

        trafficChartMenu.addEventListener("click", e => {
          const itemClass = e.target.className;

          viewChart[itemClass]();

          chartMenuItems.forEach(item => {
            item.id =
              item.className == itemClass
                ? "item-selected"
                : "item-deselected";
          });
        });