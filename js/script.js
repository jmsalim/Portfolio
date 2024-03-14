// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
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

// Initialize the gallery
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded');
    const images = ['assets/images/image1.jpeg', 'assets/images/image2.png', 'assets/images/image3.jpg'];
    console.log('Images array:', images);
    const slidesContainer = document.querySelector('.slides');
    const dotsContainer = document.getElementById('dots');
    
    let currentIndex = 0;

    function initGallery() {
        console.log('Initializing gallery');
        images.forEach((image, index) => {
            let imgElement = document.createElement('img');
            imgElement.src = image;
            console.log(`Adding image: ${image}`);
            if (index === 0) imgElement.classList.add('active');
            slidesContainer.appendChild(imgElement);

            let dotElement = document.createElement('span');
            dotElement.classList.add('dot');
            if (index === 0) dotElement.classList.add('active');
            dotElement.setAttribute('data-index', index);
            dotElement.addEventListener('click', function() {
                console.log(`Dot clicked: index ${index}`);
                currentIndex = parseInt(this.getAttribute('data-index'));
                updateGallery();
            });
            dotsContainer.appendChild(dotElement);
        });

        updateGallery();
    }

    function updateGallery() {
        console.log(`Updating gallery to show image at index: ${currentIndex}`);
        document.querySelectorAll('.slides img').forEach((img, index) => {
            img.style.display = 'none';
            if (index === currentIndex) {
                img.style.display = 'block';
            }
        });

        document.querySelectorAll('.dots .dot').forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) dot.classList.add('active');
        });
    }

    document.getElementById('leftArrow').addEventListener('click', () => {
        console.log('Left arrow clicked');
        currentIndex = (currentIndex + images.length - 1) % images.length;
        updateGallery();
    });

    document.getElementById('rightArrow').addEventListener('click', () => {
        console.log('Right arrow clicked');
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    });

    setInterval(() => {
        console.log('Changing image automatically');
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    }, 3000); // Change image every 3 seconds

    initGallery();
});
