document.addEventListener('DOMContentLoaded', function () {
    // Setup smooth scrolling for internal links
    setupSmoothScrolling();

    // Setup toggling for service descriptions
    toggleServiceDescriptions();

    // Initialize parallax effect for image
    initializeParallaxEffect();

    // Initialize lightbox for photo gallery
    setupLightbox();

    // Initialize carousel
    initializeCarousel();

    // Adjust scroll speed for slider based on screen size
    adjustScrollSpeed();
});

// Function to initialize smooth scrolling for internal links
function setupSmoothScrolling() {
    document.querySelectorAll('a.nav-link, .dropdown-item').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();  // Prevent default link behavior
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Scroll smoothly to the target element
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,  // Adjust for navbar height
                        behavior: "smooth"
                    });
                } else {
                    console.error('No element found for ID:', targetId);
                }
            }
        });
    });
}

// Function to toggle service descriptions based on user click
function toggleServiceDescriptions() {
    document.querySelectorAll('.service-item').forEach(item => {
        item.addEventListener('click', function () {
            const serviceId = this.getAttribute('data-service');
            document.querySelectorAll('.service-description').forEach(description => {
                if (description.id === serviceId) {
                    // Toggle visibility of the corresponding service description
                    description.style.display = description.style.display === 'block' ? 'none' : 'block';
                } else {
                    // Hide all other descriptions
                    description.style.display = 'none';
                }
            });
        });
    });
}

// Function to initialize parallax effect for image
function initializeParallaxEffect() {
    var img = document.getElementById('animated-image');
    if (img) {
        img.style.opacity = 1; // Fades in the image after the DOM is loaded
        window.addEventListener('scroll', function () {
            var scrollPosition = window.pageYOffset;
            img.style.transform = "translateY(" + (scrollPosition * 0.5) + "px)";
        });
    }
}

// Function to initialize the lightbox for the photo gallery
function setupLightbox() {
    var galleryItems = document.querySelectorAll('.photo-item img');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var closeBtn = document.querySelector('.lightbox .close');

    galleryItems.forEach(function (img) {
        img.addEventListener('click', function () {
            lightbox.style.display = 'flex'; // Show the lightbox
            lightboxImg.src = this.src; // Set the clicked image as the source
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            lightbox.style.display = 'none'; // Hide the lightbox
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', function (event) {
            if (event.target === lightbox) {
                lightbox.style.display = 'none'; // Close lightbox if clicked outside the image
            }
        });
    }
}

// Function to initialize the carousel
function initializeCarousel() {
    $('#musicCarousel').carousel({
        interval: 2000 // Auto-slide interval
    });

    document.querySelector(".left.carousel-control").addEventListener('click', function () {
        $('#musicCarousel').carousel('prev');
    });

    document.querySelector(".right.carousel-control").addEventListener('click', function () {
        $('#musicCarousel').carousel('next');
    });
}

// Function to adjust the slider scroll speed based on screen width
function adjustScrollSpeed() {
    const slider = document.querySelector('.slider');
    if (slider) {
        const screenWidth = window.innerWidth;
        
        if (screenWidth < 480) {
            slider.style.animationDuration = '60s'; // Slower speed for small screens
        } else if (screenWidth < 768) {
            slider.style.animationDuration = '40s'; // Medium speed for tablets
        } else {
            slider.style.animationDuration = '20s'; // Normal speed for larger screens
        }
    }
}