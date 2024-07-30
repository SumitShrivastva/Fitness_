document.addEventListener('DOMContentLoaded', function() {
    // Profile form submission
    document.getElementById('profile-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const weight = document.getElementById('weight').value;
        const height = document.getElementById('height').value;
        // Process and store profile data
        alert(`Profile updated: ${name}, ${age} years old, ${weight} kg, ${height} cm`);
    });

    // Activity form submission
    document.getElementById('activity-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const date = document.getElementById('date').value;
        const steps = document.getElementById('steps').value;
        const distance = document.getElementById('distance').value;
        const calories = document.getElementById('calories').value;
        // Process and store activity data
        alert(`Activity logged for ${date}: ${steps} steps, ${distance} km, ${calories} calories`);
    });

    // Workout form submission
    document.getElementById('workout-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const workoutName = document.getElementById('workout-name').value;
        const duration = document.getElementById('duration').value;
        const intensity = document.getElementById('intensity').value;
        // Process and store workout data
        alert(`Workout added: ${workoutName}, ${duration} minutes, ${intensity} intensity`);
    });

    // Sample data for the chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Steps',
            data: [3000, 5000, 7000, 6000, 8000, 12000, 9000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    // Chart configuration
    const config = {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Render chart
    const chartCtx = document.getElementById('activityChart').getContext('2d');
    new Chart(chartCtx, config);
});
