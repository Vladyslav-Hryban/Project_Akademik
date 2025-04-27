document.addEventListener("DOMContentLoaded", function () {
  const openSidebar = document.getElementById("openSidebar");
  const closeSidebar = document.getElementById("closeSidebar");
  const sidebar = document.getElementById("sidebar");

  openSidebar.addEventListener("click", function () {
    sidebar.classList.add("active");
  });

  closeSidebar.addEventListener("click", function () {
    sidebar.classList.remove("active");
  });

  // Hero slider logic
  const sliderInner = document.getElementById("sliderInner");
  const slides = document.querySelectorAll(".slider-image");
  let index = 0;

  function moveSlider() {
    index++;
    if (index >= slides.length) {
      index = 0;
    }
    sliderInner.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(moveSlider, 2000);

  // Animacja fade-in sekcji przy przewijaniu
  const faders = document.querySelectorAll(".fade-in, .feature-item, .announcement-card");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // FullCalendar initialization
  const calendarEl = document.getElementById('calendar');
  if (calendarEl) {
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'pl',
      firstDay: 1,
      headerToolbar: {
        start: 'prev,next today',
        center: 'title',
        end: ''
      },
      buttonText: {
        today: 'Dzisiaj'
      },
      themeSystem: 'bootstrap5',
      events: [
        {
          title: 'Spotkanie organizacyjne',
          start: '2025-05-05',
          color: '#76c8f2'
        },
        {
          title: 'Impreza studencka',
          start: '2025-05-12',
          color: '#e48c62'
        },
        {
          title: 'Wolontariat - festiwal',
          start: '2025-05-20',
          color: '#76c8f2'
        }
      ]
    });
    calendar.render();
  }
});
