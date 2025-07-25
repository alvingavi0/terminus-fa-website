const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
     } else {
      entry.target.classList.remove('in-view'); // Optionally remove if you want the animation to play again on re-entry
     }
    });
   });
   
   const animatedElements = document.querySelectorAll('.program-card, #impact, #about-us-short, .news-item');
   animatedElements.forEach((el) => observer.observe(el));
   
   // Example for header reveal on scroll
   let lastScrollTop = 0;
   const header = document.querySelector('header');
   
   window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
     header.classList.remove('header-visible');
    } else {
     header.classList.add('header-visible');
    }
    lastScrollTop = scrollTop;
   });