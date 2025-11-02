// Init AOS
AOS.init({duration:700,once:true,easing:'ease-out-cubic'});

// Swiper init
const swiper = new Swiper('.mySwiper', {
loop: true,
autoplay: { delay: 3500, disableOnInteraction: false },
pagination: { el: '.swiper-pagination', clickable: true },
navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
});


// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();


// Simple mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.querySelector('.main-nav');
navToggle && navToggle.addEventListener('click', ()=>{
mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
});


// Contact form handler (no backend) — simple client-side confirmation and clearing
const contactForm = document.getElementById('contact-form');
contactForm && contactForm.addEventListener('submit', (e)=>{
e.preventDefault();
const name = contactForm.name.value.trim();
const email = contactForm.email.value.trim();
const message = contactForm.message.value.trim();
if(!name||!email||!message){
alert('Please fill all fields.');
return;
}
// On Vercel you can later wire this to a serverless function or form service (Formspree, Netlify Forms)
alert(`Thank you, ${name}! Your message has been received. We will contact you at ${email}.`);
contactForm.reset();
});


// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener('click', function(e){
const href = this.getAttribute('href');
if(href.length>1){
e.preventDefault();
document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});
}
});
});


// Add subtle parallax effect to sections
window.addEventListener('scroll', ()=>{
document.querySelectorAll('.hero, .section').forEach(el=>{
const speed = 0.02; // small parallax
const offset = window.pageYOffset * speed;
el.style.backgroundPosition = `center ${-offset}px`;
});
});