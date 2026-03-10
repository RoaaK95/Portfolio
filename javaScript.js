let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Resume dropdown functionality for mobile/touch devices only
if ('ontouchstart' in window) {
  document.addEventListener("DOMContentLoaded", () => {
    const resumeDropdowns = document.querySelectorAll(".resume-dropdown");

    resumeDropdowns.forEach((dropdown) => {
      const options = dropdown.querySelector(".resume-options");

      dropdown.addEventListener("click", (e) => {
        // Only toggle if clicking on the button area, not the options
        if (!e.target.closest(".resume-options a")) {
          e.preventDefault();
          e.stopPropagation();

          // Close all dropdowns first
          resumeDropdowns.forEach((other) => {
            if (other !== dropdown) {
              other.querySelector(".resume-options").style.visibility = "hidden";
              other.querySelector(".resume-options").style.opacity = "0";
            }
          });

          // Toggle current dropdown
          const isVisible = options.style.visibility === "visible";
          options.style.visibility = isVisible ? "hidden" : "visible";
          options.style.opacity = isVisible ? "0" : "1";
        }
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".resume-dropdown")) {
        resumeDropdowns.forEach((dropdown) => {
          dropdown.querySelector(".resume-options").style.visibility = "hidden";
          dropdown.querySelector(".resume-options").style.opacity = "0";
        });
      }
    });
  });
}
