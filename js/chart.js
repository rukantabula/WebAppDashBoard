    
'use strict';
document.addEventListener("DOMContentLoaded", () => {
    const trafficChart = document.getElementById('line-chart').getContext('2d');
    const dailyTrafficChart = document.getElementById('bar-chart').getContext('2d');
    const mobileUserChart = document.getElementById('doughnut-chart').getContext('2d');
    const trafficChartMenu = document.querySelector('.traffic-chart-menu');

    const hourlyLabels = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'];
    const hourlyData =  [1500, 2550, 1750, 3500, 2000, 1500, 2500, 1250, 1800, 500, 1700, 2700, 1500];
    const dailyLabels = ['Monday', 'Tuesdy', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dailyData =  [500, 3500, 1750, 5500, 2500, 1700, 1500];
    const weeklyLabels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
    const weeklyData =  [500, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750];
    const monthlyLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthlyData =  [25000, 35000, 85000, 25000, 90000, 50500, 52000, 20550, 35000, 75000, 32500, 100000 ];
    const dailyTrafficLabels = ['S','M', 'T', 'W', 'T', 'F', 'S'];
    const dailyTrafficData =  [75, 100, 175, 125, 225, 200, 100];
    const mobileUserLabels = ['Tablet','Phone', 'Desktop'];
    const mobileUserData =  [20, 25, 145];

    const selectItems = (parent, item) => parent.querySelectorAll(item);

    
    const createChart = (labels, data, bgOpacity = .3, brdrOpacity = .7, chartName = trafficChart, type = 'line', isDoughnut = false) => {
        const max = Math.max.apply(null,  data);
        const stepSize = Math.min.apply(null,  data);

        new Chart(chartName, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: isDoughnut ? [ '#81c98f', '#74b1bf','#7377bf'] : `rgba(115, 119, 191, ${bgOpacity})`,
                    borderColor: `rgba(115, 119, 191, ${brdrOpacity})`,
                    borderWidth: .5
                }]
            },
            options: {
                scales: {
                    yAxes: [{ ticks: { 
                        beginAtZero: true,
                         stepSize: isDoughnut ? 50 : stepSize, max: isDoughnut ? max + 300 : max
                        }
                    }],
                    xAxes: [{ ticks: { maxTicksLimit: data.length } }]
                },
                maintainAspectRatio: false,
                responsive: true,
                legend: { display: isDoughnut ? true : false , position: 'right',
                labels: { boxWidth: 15, fontSize: 16}
                },
                elements: {
                line: { tension: 0 },
                point: { radius: 5 }
            }
        }
        });
    };

        const viewChart = {
            hourly: () => createChart(hourlyLabels, hourlyData),
            daily: () => createChart(dailyLabels, dailyData),
            weekly: () => createChart(weeklyLabels, weeklyData),
            monthly: () => createChart(monthlyLabels, monthlyData),
            dailyTraffic: () => createChart(dailyTrafficLabels, dailyTrafficData, 1, .8, dailyTrafficChart, 'bar'),
            mobileUser: () => createChart (mobileUserLabels, mobileUserData, .8, .7, mobileUserChart, 'doughnut', true)
        };

        viewChart['weekly']();
        viewChart['dailyTraffic']();
        viewChart['mobileUser']();
    
        trafficChartMenu.addEventListener("click", e => {
          const selectedItem = e.target.className;

          viewChart[selectedItem]();

          selectItems(trafficChartMenu, "p").forEach(element => {
            element.id =
              selectedItem == element.className
                ? "item-selected"
                : "item-deselected";
          });
        });
     });