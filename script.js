// ---------------------------------------------------------
// Footer year
// ---------------------------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------------------------------------------------------
// Mobile nav toggle
// ---------------------------------------------------------
const navToggle = document.getElementById("navToggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ---------------------------------------------------------
// One-time "typed" hero eyebrow
// Respects prefers-reduced-motion: shows the full text instantly.
// ---------------------------------------------------------
const eyebrowEl = document.getElementById("typedEyebrow");
const fullText = "Mahasiswa Teknik Informatika - Universitas Gunadarma";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (eyebrowEl) {
  if (prefersReducedMotion) {
    eyebrowEl.textContent = fullText;
  } else {
    let i = 0;
    const typeSpeed = 28;
    const type = () => {
      if (i <= fullText.length) {
        eyebrowEl.textContent = fullText.slice(0, i);
        i++;
        setTimeout(type, typeSpeed);
      }
    };
    type();
  }
}

// ---------------------------------------------------------
// Scroll reveal animation
// ---------------------------------------------------------
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll("section.reveal").forEach(section => {
  observer.observe(section);
});

// ---------------------------------------------------------
// Header scroll effect
// ---------------------------------------------------------
const header = document.querySelector(".site-header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.background = "rgba(10,14,20,0.95)";
  } else {
    header.style.background = "rgba(10,14,20,0.88)";
  }
  
  lastScroll = currentScroll;
});

// ---------------------------------------------------------
// Smooth parallax for hero glow
// ---------------------------------------------------------
const heroGlow = document.querySelector(".hero::before");
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  if (heroGlow) {
    heroGlow.style.transform = `translateX(-50%) translateY(${scrolled * 0.3}px)`;
  }
});

// ---------------------------------------------------------
// Certificate Modal
// ---------------------------------------------------------
const certModal = document.getElementById("certModal");
const certFrame = document.getElementById("certFrame");
const certImg = document.getElementById("certImg");
const certDownload = document.getElementById("certDownload");
const certModalClose = document.querySelector(".cert-modal-close");
const certModalOverlay = document.querySelector(".cert-modal-overlay");

function openCert(file) {
  const isImage = file.match(/\.(png|jpg|jpeg|gif|webp)$/i);
  
  if (isImage) {
    certFrame.style.display = "none";
    certImg.style.display = "block";
    certImg.src = file;
  } else {
    certImg.style.display = "none";
    certFrame.style.display = "block";
    certFrame.src = file;
  }
  
  certDownload.href = file;
  certModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

document.querySelectorAll(".cert-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const file = btn.getAttribute("data-file");
    openCert(file);
  });
});

function closeCertModal() {
  certModal.classList.remove("active");
  document.body.style.overflow = "";
  certFrame.src = "";
  certImg.src = "";
}

certModalClose.addEventListener("click", closeCertModal);
certModalOverlay.addEventListener("click", closeCertModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && certModal.classList.contains("active")) {
    closeCertModal();
  }
});

// ---------------------------------------------------------
// Project buttons - show alert for未 uploaded projects
// ---------------------------------------------------------
document.querySelectorAll(".project-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    if (btn.getAttribute("href") === "#") {
      e.preventDefault();
      alert("Project belum di upload");
    }
  });
});
