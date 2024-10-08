document.addEventListener("DOMContentLoaded", function() {
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
   });

   // fade in animation on scroll
   const fadeInElements = document.querySelectorAll('.fade-in');

   const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    })
   }, {
    threshold: 0.5
   });

   fadeInElements.forEach(element => {
    observer.observe(element);
   });
});