window.addEventListener("scroll", function () {
  const logo = document.getElementById("logo");
  const headerLogo = document.getElementById("header-logo");
  const designText = document.getElementById("design-text");
  const heroSection = document.querySelector(".hero-section");

  if (window.scrollY > heroSection.offsetHeight / 2) {
      document.body.classList.add("scrolled");
      headerLogo.style.display = "inline"; // Navbar logosunu göster
      designText.style.marginLeft = "10px";
  } else {
      document.body.classList.remove("scrolled");
      headerLogo.style.display = "none"; // Navbar logosunu gizle
      designText.style.marginLeft = "0";
  }
});
    
    document.getElementById('next').addEventListener('click', function() {
      const galleryContainer = document.querySelector('.gallery-container');
      galleryContainer.scrollBy({
        left: 400, // Kaydırma miktarı
        behavior: 'smooth'
      });
    });
    
    document.getElementById('prev').addEventListener('click', function() {
      const galleryContainer = document.querySelector('.gallery-container');
      galleryContainer.scrollBy({
        left: -400, // Kaydırma miktarı
        behavior: 'smooth'
      });
    });
    
    window.addEventListener('scroll', function() {
      var image = document.querySelector('.we-image');
      var imagePosition = image.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
    
      if (imagePosition < windowHeight) {
        image.classList.add('animate');
      }
    });
    
    
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "flex";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });

    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

 