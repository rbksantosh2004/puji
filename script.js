
        function toggleEducation(id) {
            document.querySelectorAll('.education-card').forEach(card => {
                card.classList.remove('active');
            });
            document.getElementById(id).classList.add('active');
        }

        function toggleSkill(element) {
            document.querySelectorAll('.skill-box').forEach(box => {
                box.classList.remove('active');
            });
            element.classList.add('active');
        }

        // Function to add 'active' class to project boxes
        function activateProjects() {
            document.querySelectorAll('.project-box').forEach((box, index) => {
                setTimeout(() => {
                    box.classList.add('active');
                }, index * 200); // Staggered effect
            });
        }

        // Call the function to activate project boxes when the page loads
        document.addEventListener('DOMContentLoaded', activateProjects);