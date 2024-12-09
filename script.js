const planets = document.querySelectorAll(".planet-icon");

planets.forEach((planet) => {
  planet.addEventListener("mouseenter", () => {
    planet.style.transform = "scale(1.2)";
  });

  planet.addEventListener("mouseleave", () => {
    planet.style.transform = "scale(1)";
  });
});
