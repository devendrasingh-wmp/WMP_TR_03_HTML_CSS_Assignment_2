document.getElementById('toggle-btn').addEventListener('click', function() {
    const dropDownMenu = document.getElementById('drop-down-menu');
    const toggleBtn = document.getElementById('toggle-btn');
  
    dropDownMenu.classList.toggle('active');
  
    // Toggle between hamburger and cross icon
    if (dropDownMenu.classList.contains('active')) {
      toggleBtn.textContent = '×'; // Change to cross icon
    } else {
      toggleBtn.textContent = '☰'; // Change back to hamburger icon
    }
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null, 
        threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });
});