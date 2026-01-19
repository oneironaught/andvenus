// AOS Initialization (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
});

// Toggle Mobile Navigation Menu
function toggleMenu() {
    const nav = document.getElementById('scrollNav');
    if (nav) {
        nav.classList.toggle('show-menu');
    }
}

// Back to Top Button Functionality
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    if (!backToTopBtn) return;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Function to open the modal and display the clicked image
function openModal(src, x, y) {
    const modal = document.getElementById('photoModal');
    const enlargedPhoto = document.getElementById('enlargedPhoto');

    if (!modal || !enlargedPhoto) return;

    enlargedPhoto.src = src;
    
    // Prevent background scrolling
    document.body.classList.add('modal-open');
    
    // Display the modal with fade-in effect
    modal.classList.add('show');
    
    // Focus trap for accessibility
    modal.focus();
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('photoModal');
    
    if (!modal) return;
    
    modal.classList.remove('show');
    
    // Re-enable background scrolling
    document.body.classList.remove('modal-open');
}

// Initialize photo gallery functionality
function initPhotoGallery() {
    // Add click event listeners to all images
    const photoContainers = document.querySelectorAll('.photo-container');
    photoContainers.forEach(container => {
        container.addEventListener('click', function(event) {
            const img = this.querySelector('img');
            if (img) {
                const imgSrc = img.src;
                const rect = img.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;
                openModal(imgSrc, x, y);
            }
        });
        
        // Add keyboard accessibility
        container.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const img = this.querySelector('img');
                if (img) {
                    openModal(img.src, 0, 0);
                }
            }
        });
        
        // Make containers focusable
        container.setAttribute('tabindex', '0');
        container.setAttribute('role', 'button');
    });

    // Close the modal when clicking outside of the image
    const modal = document.getElementById('photoModal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
        
        // Close with Escape key
        modal.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });
    }

    // Close button functionality
    const closeBtn = document.querySelector('#photoModal .close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
}

// Accordion Functionality (if used)
function initAccordion() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const content = accordionItem.querySelector('.accordion-content');
            
            if (!content) return;
            
            // Toggle the active class
            accordionItem.classList.toggle('active');
            
            // Check if the accordion item is active, adjust maxHeight accordingly
            if (accordionItem.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                const offset = 80; // Adjust to match your navbar height
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const nav = document.getElementById('scrollNav');
                if (nav && nav.classList.contains('show-menu')) {
                    nav.classList.remove('show-menu');
                }
            }
        });
    });
}

// Band Member Modal
function initBandMemberModals() {
    // Handle modal triggers
    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(function(trigger) {
        trigger.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("data-bs-target");
            const modal = document.querySelector(targetId);
            
            if (modal) {
                // Show modal using Bootstrap's modal method if available
                if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
                    const bsModal = new bootstrap.Modal(modal);
                    bsModal.show();
                } else {
                    // Fallback for manual modal handling
                    modal.classList.add("show");
                    modal.style.display = "block";
                    document.body.classList.add('modal-open');
                }
            }
        });
    });

    // Handle modal close buttons
    document.querySelectorAll(".btn-close, [data-bs-dismiss='modal']").forEach(function(closeBtn) {
        closeBtn.addEventListener("click", function() {
            const modal = this.closest(".modal");
            if (modal) {
                if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
                    const bsModal = bootstrap.Modal.getInstance(modal);
                    if (bsModal) bsModal.hide();
                } else {
                    modal.classList.remove("show");
                    modal.style.display = "none";
                    document.body.classList.remove('modal-open');
                }
            }
        });
    });

    // Close modals when clicking outside
    document.querySelectorAll(".modal").forEach(function(modal) {
        modal.addEventListener("click", function(event) {
            if (event.target === modal) {
                if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
                    const bsModal = bootstrap.Modal.getInstance(modal);
                    if (bsModal) bsModal.hide();
                } else {
                    modal.classList.remove("show");
                    modal.style.display = "none";
                    document.body.classList.remove('modal-open');
                }
            }
        });
    });
}

// Scroll Photos Functionality
function scrollPhotos(direction) {
    const container = document.getElementById("photoScroll");
    
    if (!container) return;
    
    const scrollAmount = 300;
    
    if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
}

// Sticky Navigation
function initStickyNavigation() {
    const nav = document.getElementById('scrollNav');
    const landing = document.getElementById('landing');
    
    if (!nav || !landing) return;
    
    const landingHeight = landing.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > landingHeight - 50) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    });
    
    // Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            nav.classList.toggle('show-menu');
        });
    }
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initBackToTop();
    initPhotoGallery();
    initAccordion();
    initSmoothScrolling();
    initBandMemberModals();
    initStickyNavigation();
    
    // Add keyboard accessibility to hamburger menu
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleMenu();
            }
        });
    }
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    // Close mobile menu on resize if open
    const nav = document.getElementById('scrollNav');
    if (nav && window.innerWidth > 768 && nav.classList.contains('show-menu')) {
        nav.classList.remove('show-menu');
    }
});
