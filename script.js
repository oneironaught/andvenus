document.addEventListener('DOMContentLoaded', function() {
    // Setup smooth scrolling for internal links
    setupSmoothScrolling();
    // Setup toggling for service descriptions
    toggleServiceDescriptions();
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

// Event details for the .ics file (for iPhone users)
const icsEvent = {
    title: "Live Performance - And Venus",
    description: "Live show with Landlocked Pirates @ Double Trouble, Brownsville, TX",
    location: "Double Trouble, Brownsville, TX",
    start: "20241026T200000",  // Event start date: YYYYMMDDTHHMMSS format (October 26, 2024, 8 PM)
    end: "20241026T230000",    // Event end date: YYYYMMDDTHHMMSS format (October 26, 2024, 11 PM)
  };

  // Google Calendar fallback link
  const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(icsEvent.title)}&details=${encodeURIComponent(icsEvent.description)}&location=${encodeURIComponent(icsEvent.location)}&dates=${icsEvent.start}Z/${icsEvent.end}Z`;

  // Function to detect iPhone/iPad/iOS
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }

  // Function to generate the .ics link for iPhone users
  function generateICSLink() {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${icsEvent.title}
DESCRIPTION:${icsEvent.description}
LOCATION:${icsEvent.location}
DTSTART:${icsEvent.start}
DTEND:${icsEvent.end}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    return url;
  }

  // Set the link based on the device
  const calendarLink = document.getElementById('calendar-link');
  
  if (isIOS()) {
    // Prioritize iPhone users by setting the link to download the .ics file using webcal protocol
    calendarLink.href = generateICSLink();
    calendarLink.download = "event.ics";
  } else {
    // Fallback to Google Calendar for non-iPhone users
    calendarLink.href = googleCalendarLink;
    calendarLink.target = "_blank";  // Open Google Calendar in a new tab
  }