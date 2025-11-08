// ========================================
// LEADUWARDEN 2.0 - PRESENTATION SCRIPT
// ========================================

// Configuration
const totalSlides = 7;
let currentSlide = 1;

// Get DOM elements
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideCounter = document.getElementById('slideCounter');

// Initialize presentation
function init() {
    showSlide(currentSlide);
    updateNavigation();
}

// Show specific slide
function showSlide(n) {
    // Remove active class from all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Add active class to current slide
    slides[n - 1].classList.add('active');

    // Update counter
    slideCounter.textContent = `${n} / ${totalSlides}`;

    // Update current slide number
    currentSlide = n;

    // Update navigation buttons
    updateNavigation();
}

// Update navigation button states
function updateNavigation() {
    // Disable previous button on first slide
    if (currentSlide === 1) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    // Disable next button on last slide
    if (currentSlide === totalSlides) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

// Navigate to next slide
function nextSlide() {
    if (currentSlide < totalSlides) {
        showSlide(currentSlide + 1);
    }
}

// Navigate to previous slide
function prevSlide() {
    if (currentSlide > 1) {
        showSlide(currentSlide - 1);
    }
}

// Event Listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
            prevSlide();
            break;
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':  // Spacebar
            e.preventDefault();
            nextSlide();
            break;
        case 'Home':
            showSlide(1);
            break;
        case 'End':
            showSlide(totalSlides);
            break;
    }
});

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

const slideWrapper = document.querySelector('.slide-wrapper');

slideWrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

slideWrapper.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;

    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - next slide
        nextSlide();
    }

    if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - previous slide
        prevSlide();
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', init);

// Optional: Add smooth scroll for slide content
slides.forEach(slide => {
    slide.style.scrollBehavior = 'smooth';
});

console.log('Leaduwarden 2.0 Presentation loaded successfully!');
console.log(`Total slides: ${totalSlides}`);
