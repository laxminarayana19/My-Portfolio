// Typing Animation
const typewriter = document.getElementById('typewriter');
const text = "Full Stack Developer | Tech Enthusiast | Future-Ready Engineer";
let i = 0;

function typeText() {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(() => {
      typewriter.innerHTML = '';
      i = 0;
      typeText();
    }, 3000);
  }
}

// Create Particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    particlesContainer.appendChild(particle);
  }
}

// Scroll Animations
function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('visible');
    }
  });
}

// Back to Top Button
function handleBackToTop() {
  const backToTopButton = document.getElementById('backToTop');
  
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Back to top functionality
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  this.reset();
});

// Open Resume in New Tab
function openResume() {
  window.open('https://drive.google.com/file/d/1K4A0kSlrkc2EZGGsb6ATYl4xI11yuLIy/view?usp=sharing', '_blank');
}

// Event Listeners
window.addEventListener('scroll', () => {
  animateOnScroll();
  handleBackToTop();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  typeText();
  animateOnScroll();
  
  // Add click event to resume button/link
  const resumeButton = document.getElementById('resumeButton'); // Make sure you have an element with this ID
  if (resumeButton) {
    resumeButton.addEventListener('click', openResume);
  }
});