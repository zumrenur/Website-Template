document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mesajınız başarıyla gönderildi!");
  });

  const socialIcons = document.querySelectorAll(".social-icons a");

socialIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "rotate(360deg)";
    icon.style.transition = "transform 0.5s ease";
  });

  icon.addEventListener("mouseout", () => {
    icon.style.transform = "rotate(0deg)";
  });
});

window.addEventListener('load', function() {
  // 3 saniye sonra loading kısmını gizle ve içerikleri göster
  setTimeout(function() {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('content').style.display = 'block';
  }, 3000); // 3000 ms = 3 saniye
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