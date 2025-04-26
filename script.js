console.log("Professional Portfolio script loaded.");

// --- Optional: Active Navigation Link Highlighting on Scroll ---
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("header nav ul li a");

function setActiveLink() {
  let currentSection = "";
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop =
      section.offsetTop -
      (document.getElementById("main-header").offsetHeight + 50); // Offset by header height + margin
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSection = sectionId;
    }
    // Handle edge case for bottom section filling the screen
    else if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      sectionId === sections[sections.length - 1].getAttribute("id")
    ) {
      currentSection = sectionId;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
  // Handle case where no section is active (top of page) - highlight Home
  if (
    currentSection === "" &&
    scrollY <
      sections[0].offsetTop -
        (document.getElementById("main-header").offsetHeight + 50)
  ) {
    const homeLink = document.querySelector('header nav ul li a[href="#hero"]');
    if (homeLink) homeLink.classList.add("active");
  }
}

// Add listener after DOM is fully loaded
window.addEventListener("load", setActiveLink); // Set initial state
window.addEventListener("scroll", setActiveLink); // Update on scroll
