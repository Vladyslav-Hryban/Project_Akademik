
document.addEventListener("DOMContentLoaded", function () {
  // Ustaw dzisiejszą datę jako minimalną w input[type=date]
  const dateInput = document.getElementById("date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }


  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  const form = document.querySelector(".reservation-form");
  if (form) {
    observer.observe(form);
  }


  const reservationForm = document.getElementById("reservationForm");
  if (reservationForm) {
    reservationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("✅ Twoja rezerwacja została zapisana!");
      reservationForm.reset();
    });
  }
});
