// Script to handle navigation and card interactions

// Load page content dynamically
// function navigateTo(page) {
//     window.location.href = page + '.html';
// }

// // Handle card clicks by dynamically adding event listeners
// document.addEventListener('DOMContentLoaded', function() {
//     const cards = document.querySelectorAll('.card, .schedule > div, .right-panel div');

//     cards.forEach(card => {
//         card.addEventListener('click', function() {
//             const page = this.getAttribute('data-page');
//             if (page) {
//                 navigateTo(page);
//             }
//         });
//     });
// });

// // Navigation for sidebar links
// const sidebarLinks = document.querySelectorAll('nav ul li a');
// sidebarLinks.forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault();
//         const page = this.getAttribute('href').replace('.html', '');
//         navigateTo(page);
//     });
// });

// // Example: Dynamic content insertion (optional)
// // You can use this method to dynamically load content into the dashboard if necessary
// function loadContent(section) {
//     const contentArea = document.getElementById('content');
//     if (section === 'weekly-summary') {
//         contentArea.innerHTML = '<h3>Weekly Summary</h3><p>This is your progress summary for the week.</p>';
//     } else if (section === 'food') {
//         contentArea.innerHTML = '<h3>Food</h3><p>Details about your food intake and diet plan.</p>';
//     }
//     // Add more sections as needed
// }

// // Optionally, trigger animations on card clicks
// cards.forEach(card => {
//     card.addEventListener('click', function() {
//         this.classList.add('active');
//         setTimeout(() => {
//             this.classList.remove('active');
//         }, 200);
//     });
// });
