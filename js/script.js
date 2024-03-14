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
        // Prevent the default link behavior
        e.preventDefault();
        
        // Get the link's URL
        const href = this.getAttribute('href');
        
        // Show a confirmation dialog
        const confirmRedirect = confirm('Do you want to be forwarded to this project?');
        
        // If the user clicks "OK", redirect to the link
        if (confirmRedirect) {
            window.location.href = href;
        }
    });
});
