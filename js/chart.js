    
'use strict';
document.addEventListener("DOMContentLoaded", () => {
    const chart = document.getElementById('chart').getContext('2d');
    const trafficChartMenu = document.querySelector('.traffic-chart-menu');
    const selectItems = (parent, item) => parent.querySelectorAll(item);

    const hourlyLabels = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'];
    const hourlyData =  [1500, 2550, 1750, 3500, 2000, 1500, 2500, 1250, 1800, 500, 1700, 2700, 1500];
    const dailyLabels = ['Monday', 'Tuesdy', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dailyData =  [500, 3500, 1750, 5500, 2500, 1700, 1500];
    const weeklyLabels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
    const weeklyData =  [500, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750];
    const monthlyLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthlyData =  [25000, 35000, 85000, 25000, 90000, 50500, 52000, 20550, 35000, 75000, 32500, 100000 ];
    
    const createChart = (type = 'line', labels, data, stepSize, max) => {
        new Chart(chart, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: 'rgba(226, 227, 246, 0.7)',
                    borderColor: 'rgba(116, 119, 191, 1)',
                    borderWidth: .5
                }]
            },
            options: {
                scales: {
                    yAxes: [{ ticks: { beginAtZero: true, stepSize: stepSize,max: max}}],
                    xAxes: [{ ticks: { maxTicksLimit: 115 } }]
                },
                maintainAspectRatio: false,
                responsive: true,
                legend: { display: false },
                elements: {
                line: { tension: 0 },
                point: {radius: 4 }
            }
        }
        });
    };

    createChart("line", weeklyLabels, weeklyData, 500, 3000); 
    
        trafficChartMenu.addEventListener('click', e => {
            const selectedItem = e.target.className;
            const items = selectItems(trafficChartMenu, 'p');

            const menuAction = {
                hourly: () => createChart('line', hourlyLabels, hourlyData, 500, 4000),
                daily: () => createChart('line',dailyLabels, dailyData, 1000, 6000),
                weekly: () => createChart('line',weeklyLabels, weeklyData, 500, 3000),
                monthly: () => createChart('line',monthlyLabels, monthlyData, 20000, 100000)
            };

            const resetMenuItems = () => {
                items.forEach(element => {
                    element.id =
                      selectedItem == element.className
                        ? 'item-selected'
                        : 'item-deselected';
                  });
            };

            menuAction[selectedItem]();
            resetMenuItems();
    });
});