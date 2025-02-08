// AOS Initialization (Animate on Scroll)
AOS.init();

// Toggle Mobile Navigation Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open'); // Toggle the 'open' class to show/hide the menu
}

// Back to Top Button Functionality
const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Function to open the modal and display the clicked image
function openModal(src, x, y) {
  const modal = document.getElementById('photoModal');
  const modalContent = document.getElementById('photoModalContent'); // Unique ID for modal-content
  const enlargedPhoto = document.getElementById('enlargedPhoto');

  enlargedPhoto.src = src;

  // Display the modal
  modal.style.display = 'flex';
  modal.style.opacity = '1';

  // Set initial position where the image was clicked
  modalContent.style.transformOrigin = `${x}px ${y}px`;
  modalContent.style.transform = 'scale(1)';

  // Add the "show" class for smooth transition
  setTimeout(() => {
      modal.classList.add('show');
      modalContent.classList.add('show');
  }, 10);
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('photoModal');
  const modalContent = document.getElementById('photoModalContent');

  modalContent.classList.remove('show');

  setTimeout(() => {
      modal.style.opacity = '0';
      modal.style.display = 'none';
  }, 300);
}

// Add click event listeners to all images
const photoContainers = document.querySelectorAll('.photo-container');
photoContainers.forEach(container => {
  container.addEventListener('click', function (event) {
      const imgSrc = this.querySelector('img').src;
      const x = event.clientX;
      const y = event.clientY;
      openModal(imgSrc, x, y);
  });
});

// Close the modal when clicking outside of the image
const modal = document.getElementById('photoModal');
modal.addEventListener('click', function (event) {
  const modalContent = document.getElementById('photoModalContent');
  if (!modalContent.contains(event.target)) {
      closeModal();
  }
});

// Accordion Functionality
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const content = accordionItem.querySelector('.accordion-content');

        // Toggle the active class
        accordionItem.classList.toggle('active');

        // Check if the accordion item is active, adjust maxHeight accordingly
        if (accordionItem.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px'; // Expand content
        } else {
            content.style.maxHeight = 0; // Collapse content
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    const offset = 200; // Adjust to match your navbar height
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  });
});

//Band Member Modal
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('[data-bs-toggle="band-member-modal"]').forEach(function (trigger) {
      trigger.addEventListener("click", function (event) {
          event.preventDefault();
          let target = this.getAttribute("data-bs-target");
          let modal = document.querySelector(target);
          if (modal) {
              modal.classList.add("show");
          }
      });
  });

  document.querySelectorAll(".btn-close").forEach(function (closeBtn) {
      closeBtn.addEventListener("click", function () {
          this.closest(".band-member-modal").classList.remove("show");
      });
  });

  document.addEventListener("click", function (event) {
      if (event.target.classList.contains("band-member-modal")) {
          event.target.classList.remove("show");
      }
  });
});

// Scroll Photos Functionality
function scrollPhotos(direction) {
  const container = document.getElementById("photoScroll");
  const scrollAmount = 300; // Adjust scroll distance per click

  if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}