

// Toggle Show More/Show Less for Projects
const toggleButton = document.getElementById('toggle-projects');
const extraProjects = document.querySelector('.extra-projects');

toggleButton.addEventListener('click', () => {
    if (extraProjects.style.display === 'none' || extraProjects.style.display === '') {
        extraProjects.style.display = 'block';
        toggleButton.textContent = 'Show Less';
    } else {
        extraProjects.style.display = 'none';
        toggleButton.textContent = 'Show More';
    }
});

// Hide Header on Scroll Down, Show on Scroll Up
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.classList.add('hidden');
    } else {
        // Scrolling up
        header.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll
});