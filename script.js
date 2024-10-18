// Weekly Summary Chart
const ctx = document.getElementById('weeklyChart').getContext('2d');
const weeklyChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Workout Activity (%)',
            data: [30, 40, 50, 80, 40, 60, 50],
            backgroundColor: '#4d79ff',
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

// Food Summary Chart
const ctx2 = document.getElementById('foodChart').getContext('2d');
const foodChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Calories Consumed',
            data: [200, 236, 178, 220, 236, 256, 210],
            borderColor: '#ff6b6b',
            fill: false,
            tension: 0.1
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
