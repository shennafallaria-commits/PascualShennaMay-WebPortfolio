
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, 
          behavior: 'smooth'
        });
      }
    });
  });
  
  
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.menu a');
  
  window.addEventListener('scroll', () => {
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.clientHeight;
  
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  });
  
  
  const exploreBtn = document.querySelector('.primary-btn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      console.log("Explore Portfolio button clicked!");
    });
  }
  
 