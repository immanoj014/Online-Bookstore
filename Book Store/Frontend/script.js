document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('.home, .featured, .arrivals, .reviews, .blogs');

    function updateActiveNavLink() {
      sections.forEach((section, index) => {
        const navLink = navLinks[index];
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    window.addEventListener('beforeunload', function() {
      localStorage.setItem("scrollPosition", window.scrollY);
    });

    var scrollPosition = localStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
    }

    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        navLinks.forEach(function(link) {
          link.classList.remove("active");
        });
        link.classList.add("active");
        document.body.style.scrollBehavior = "";
        var targetId = link.getAttribute("href");
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
          localStorage.setItem("scrollPosition", window.scrollY);
          setTimeout(function() {
            document.body.style.scrollBehavior = "smooth";
          }, 1000);
        }
      });
    });

    window.addEventListener('scroll', function() {
      var sections = document.querySelectorAll('section');
      var navbarLinks = document.querySelectorAll('.navbar a');
      sections.forEach(function(section, index) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          navbarLinks.forEach(function(link) {
            link.classList.remove('active');
          });
          navbarLinks[index].classList.add('active');
        }
      });
    });

    window.addEventListener('scroll', function() {
      var searchForm = document.querySelector('.search-form');
      searchForm.classList.remove('active');
      if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
      } else {
        document.querySelector('.header .header-2').classList.remove('active');
      }
    });

    let loginform=document.querySelector('.login-form-container');
    document.querySelector('#login-btn').onclick=()=>{
      loginform.classList.toggle('active');
    }
 
    document.querySelector('#close-login-btn').onclick=()=>{
      loginform.classList.remove('active');
    }


    var swiperFeatured = new Swiper(".featured-slider", {
      direction: 'horizontal',
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }
    });

    var swiperArrivals = new Swiper(".arrivals-slider", {
      direction: 'horizontal',
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }
    });

    var swiperReviews = new Swiper(".reviews-slider", {
      direction: 'horizontal',
      spaceBetween: 10,
      grabCurser: true,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }
    });

    var swiperBlogs = new Swiper(".blogs-slider", {
      direction: 'horizontal',
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }
    });

});
