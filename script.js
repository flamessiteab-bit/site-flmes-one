// =========================
// LOADER 🔥
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if(loader) {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
  }
  document.body.style.opacity = "1";
});

// =========================
// COUNTDOWN 🔥
function updateCountdown() {
  const countdownElement = document.getElementById("countdown");
  const eventDate = new Date("April 4, 2026 19:00:00").getTime();
  const now = new Date().getTime();
  const gap = eventDate - now;

  if (gap <= 0) {
    if(countdownElement) countdownElement.innerHTML = "🔥 É HOJE 🔥";
    return;
  }

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((gap / (1000 * 60)) % 60);
  const seconds = Math.floor((gap / 1000) % 60);

  if(countdownElement) countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);

// =========================
// PARTICLES DE FUNDO 🔥
const canvasBg = document.getElementById("particles");
if(canvasBg){
  const ctxBg = canvasBg.getContext("2d");

  function resizeCanvas() {
    canvasBg.width = window.innerWidth;
    canvasBg.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const particles = [];
  const particleCount = 120;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvasBg.width,
      y: Math.random() * canvasBg.height,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random()
    });
  }

  function drawParticles() {
    ctxBg.clearRect(0, 0, canvasBg.width, canvasBg.height);
    particles.forEach((p, i) => {
      p.y -= p.speed;
      p.opacity -= 0.005;
      if (p.y < 0 || p.opacity <= 0) {
        p.y = canvasBg.height;
        p.x = Math.random() * canvasBg.width;
        p.opacity = 1;
      }
      ctxBg.fillStyle = `rgba(255, 120, 0, ${p.opacity})`;
      ctxBg.beginPath();
      ctxBg.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctxBg.fill();
    });
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
}

// =========================
// SCROLL REVEAL 🔥
const fadeElements = document.querySelectorAll('.fade-in');

function revealOnScroll() {
  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// =========================
// PARALLAX DO VIDEO 🔥
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const video = document.querySelector(".bg-video");
  if (video) {
    video.style.transform = `translateY(${scroll * 0.25}px) scale(1.1)`;
  }
});

// =========================
// SCROLL SUAVE 🔥
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =========================
// CARDS 3D 🔥
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y - rect.height / 2) / 15;
    const rotateY = (x - rect.width / 2) / 15;
    card.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// =========================
// BOTÕES MICRO INTERAÇÃO 🔥
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.letterSpacing = "2px";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.letterSpacing = "0px";
  });
});

// =========================
// DIGITAÇÃO HERO 🔥
const heroTitle = document.querySelector(".hero-title");

if (heroTitle) {
  const text = "ONE FIRE 🔥";
  heroTitle.innerHTML = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      heroTitle.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }

  type();
}

// =========================
// INSTAGRAM INTERATIVO 🔥
const instaCanvas = document.getElementById('instaParticles');
const instaCard = document.getElementById('instaCard');

if(instaCanvas && instaCard){
  const ctxI = instaCanvas.getContext('2d');
  instaCanvas.width = instaCard.offsetWidth;
  instaCanvas.height = instaCard.offsetHeight;
  let particlesI = [];

  instaCard.addEventListener('mousemove', (e) => {
    const rect = instaCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    particlesI.push({
      x, y,
      radius: Math.random() * 3 + 2,
      vx: (Math.random() - 0.5) * 2,
      vy: -Math.random() * 2,
      alpha: 1
    });
  });

  function animateInsta() {
    ctxI.clearRect(0,0,instaCanvas.width, instaCanvas.height);
    particlesI.forEach((p,i) => {
      ctxI.beginPath();
      ctxI.arc(p.x, p.y, p.radius, 0, Math.PI*2);
      ctxI.fillStyle = `rgba(255,77,77,${p.alpha})`;
      ctxI.fill();
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.02;
      if(p.alpha <=0) particlesI.splice(i,1);
    });
    requestAnimationFrame(animateInsta);
  }
  animateInsta();

  window.addEventListener('resize', () => {
    instaCanvas.width = instaCard.offsetWidth;
    instaCanvas.height = instaCard.offsetHeight;
  });
}