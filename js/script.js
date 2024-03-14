// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('hamburger').addEventListener('click', function() {
    var nav = document.getElementById('navbar');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});

document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        console.log('Link clicked:', this.href); // Add this line
        e.preventDefault();
        
        const confirmRedirect = confirm('Do you want to be forwarded to this project?');
        
        if (confirmRedirect) {
            window.location.href = this.getAttribute('href');
        }
    });
});

