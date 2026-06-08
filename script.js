const siteHeader = document.getElementById('siteHeader');
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const year = document.getElementById('year');

const galleryButtons = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

year.textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
	if (window.scrollY > 40) {
		siteHeader.classList.add('scrolled');
	} else {
		siteHeader.classList.remove('scrolled');
	}
});

navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

siteNav.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	});
});

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				revealObserver.unobserve(entry.target);
			}
		});
	},
	{
		threshold: 0.14,
	},
);

revealElements.forEach((element) => {
	revealObserver.observe(element);
});

galleryButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const imageSource = button.getAttribute('data-image');

		lightboxImage.src = imageSource;
		lightbox.classList.add('active');
		document.body.style.overflow = 'hidden';
	});
});

function closeLightbox() {
	lightbox.classList.remove('active');
	lightboxImage.src = '';
	document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (event) => {
	if (event.target === lightbox) {
		closeLightbox();
	}
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && lightbox.classList.contains('active')) {
		closeLightbox();
	}
});

// News image lightbox
const newsImages = document.querySelectorAll('.news-lightbox-img');
const newsLightbox = document.getElementById('newsLightbox');
const newsLightboxImage = document.getElementById('newsLightboxImage');
const newsLightboxClose = document.getElementById('newsLightboxClose');

newsImages.forEach((image) => {
	image.addEventListener('click', () => {
		const fullImage =
			image.getAttribute('data-full') || image.getAttribute('src');

		newsLightboxImage.src = fullImage;
		newsLightbox.classList.add('active');
		document.body.style.overflow = 'hidden';
	});
});

function closeNewsLightbox() {
	newsLightbox.classList.remove('active');
	newsLightboxImage.src = '';
	document.body.style.overflow = '';
}

newsLightboxClose.addEventListener('click', closeNewsLightbox);

newsLightbox.addEventListener('click', (event) => {
	if (event.target === newsLightbox) {
		closeNewsLightbox();
	}
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && newsLightbox.classList.contains('active')) {
		closeNewsLightbox();
	}
});
