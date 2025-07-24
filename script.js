$(document).ready(function () {
  // Smooth scroll
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Mobile menu toggle
  $(".menu-toggle").click(function () {
    $(".nav-links").toggleClass("show");
  });

  // Button click animation
  $(".btn").on("click", function () {
    $(this).addClass("clicked");
    setTimeout(() => $(this).removeClass("clicked"), 200);
  });

  // Fade-in on scroll using IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });
});
