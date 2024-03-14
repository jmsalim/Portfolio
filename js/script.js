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

document.querySelectorAll('.project-link-out').forEach(link => {
    link.addEventListener('click', function(e) {
        console.log('Link clicked:', this.href);
        e.preventDefault();
        
        const confirmRedirect = confirm('This link will take you to a third party website, do you wish to continue?');
        
        if (confirmRedirect) {
            window.location.href = this.getAttribute('href');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = ['assets/images/image1.jpg', 'assets/images/image2.jpg', 'assets/images/image3.jpg']; // Add your images here
    const slidesContainer = document.querySelector('.slides');
    const dotsContainer = document.getElementById('dots');
    
    let currentIndex = 0;

    // Function to initialize the gallery
    function initGallery() {
        images.forEach((image, index) => {
            let imgElement = document.createElement('img');
            imgElement.src = image;
            // Set the first image as active
            if (index === 0) imgElement.classList.add('active');
            slidesContainer.appendChild(imgElement);

            let dotElement = document.createElement('span');
            dotElement.classList.add('dot');
            // Set the first dot as active
            if (index === 0) dotElement.classList.add('active');
            dotElement.setAttribute('data-index', index);
            dotElement.addEventListener('click', function() {
                currentIndex = parseInt(this.getAttribute('data-index'));
                updateGallery();
            });
            dotsContainer.appendChild(dotElement);
        });

        updateGallery();
    }

    // Function to update gallery based on currentIndex
    function updateGallery() {
        document.querySelectorAll('.slides img').forEach((img, index) => {
            img.style.display = 'none'; // Hide all images
            if (index === currentIndex) {
                img.style.display = 'block'; // Show only active image
            }
        });

        document.querySelectorAll('.dots .dot').forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) dot.classList.add('active');
        });
    }

    // Arrow navigation
    document.getElementById('leftArrow').addEventListener('click', () => {
        currentIndex = (currentIndex + images.length - 1) % images.length;
        updateGallery();
    });

    document.getElementById('rightArrow').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    });

    // Auto-cycle through images
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    }, 3000); // Change image every 3 seconds

    initGallery();
});