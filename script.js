document.addEventListener('DOMContentLoaded', () => {
});

$(document).ready(function() {
    $('nav ul li a').smoothScroll();

    $('.dropbtn').on('click', function() {
        $(this).next('.dropdown-content').toggle();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown-content').hide();
        }
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