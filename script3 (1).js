window.onload = function() {
    // Calories Chart
    var caloriesCtx = document.getElementById('caloriesChart').getContext('2d');
    var caloriesChart = new Chart(caloriesCtx, {
        type: 'bar',
        data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [{
                label: 'Calories Burned',
                data: [300, 450, 500, 600, 700, 500, 650],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Weight Chart
    var weightCtx = document.getElementById('weightChart').getContext('2d');
    var weightChart = new Chart(weightCtx, {
        type: 'line',
        data: {
            labels: ['1', '8', '15', '22', '29'],
            datasets: [{
                label: 'Weight (kg)',
                data: [70, 68, 67, 66, 65],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });

    // Water Balance Chart
    var waterCtx = document.getElementById('waterChart').getContext('2d');
    var waterChart = new Chart(waterCtx, {
        type: 'doughnut',
        data: {
            labels: ['Water Drunk', 'Remaining'],
            datasets: [{
                label: 'Water (ml)',
                data: [800, 2250 - 800],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            cutout: '80%'
        }
    });
};
