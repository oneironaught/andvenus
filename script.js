document.addEventListener('DOMContentLoaded', function() {
    // Setup smooth scrolling for internal links
    setupSmoothScrolling();
    // Setup toggling for service descriptions
    toggleServiceDescriptions();
});

document.addEventListener('DOMContentLoaded', function() {
    var img = document.getElementById('animated-image');
    img.style.opacity = 1; // Fades in the image
});

window.addEventListener('scroll', function() {
    var img = document.getElementById('animated-image');
    var scrollPosition = window.pageYOffset;
    // Translate the image based on the scroll position
    img.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
});

document.addEventListener('DOMContentLoaded', function() {
    var galleryItems = document.querySelectorAll('.photo-item img');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var closeBtn = document.querySelector('.lightbox .close');

    // Add click event to each image in the gallery
    galleryItems.forEach(function(img) {
        img.addEventListener('click', function() {
            lightbox.style.display = 'flex'; // Show the lightbox
            lightboxImg.src = this.src; // Set the clicked image as the source
        });
    });

    // Close the lightbox when the close button is clicked
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none'; // Hide the lightbox
    });

    // Close the lightbox if the user clicks outside the image
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

function setupSmoothScrolling() {
    document.querySelectorAll('a.nav-link, .dropdown-item').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            // Proceed only if it's an internal link
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

function toggleServiceDescriptions() {
    document.querySelectorAll('.service-item').forEach(item => {
        item.addEventListener('click', function() {
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

document.addEventListener('DOMContentLoaded', () => {
$(document).ready(function(){
    $('#musicCarousel').carousel({
        interval: 2000 // You can change this value to adjust the carousel's auto-slide interval
    });

    // Ensure the carousel controls work
    $(".left.carousel-control").click(function(){
        $("#musicCarousel").carousel('prev');
    });
    $(".right.carousel-control").click(function(){
        $("#musicCarousel").carousel('next');
    });
    });
});

// Photo scroll container
const slider = document.querySelector('.slider');
if (slider) {
    let speed = 10; // Initial scroll speed

    // Function to change the scroll speed (animation duration)
    function changeSpeed(newSpeed) {
        slider.style.animationDuration = `${newSpeed}s`;
    }

    // Example: Change the speed after 5 seconds
    setTimeout(() => {
        changeSpeed(40); // Slower speed (longer duration = slower)
    }, 5000);
}

// Function to change scroll speed based on screen width
function adjustScrollSpeed() {
    const slider = document.querySelector('.slider');
    const screenWidth = window.innerWidth;
  
    if (screenWidth < 480) {
      // Slower speed for very small screens (e.g., phones)
      slider.style.animationDuration = '60s';
    } else if (screenWidth < 768) {
      // Medium speed for tablets
      slider.style.animationDuration = '40s';
    } else {
      // Normal speed for larger screens
      slider.style.animationDuration = '20s';
    }
  }

