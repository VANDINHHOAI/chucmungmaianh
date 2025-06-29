// fireworks.js - Hiệu ứng pháo hoa đơn giản

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.radius = 2 + Math.random() * 2;
    this.color = color;
    this.speed = Math.random() * 5 + 2;
    this.angle = Math.random() * 2 * Math.PI;
    this.gravity = 0.05;
    this.opacity = 1;
    this.fade = Math.random() * 0.01 + 0.005;
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed + this.gravity;
    this.opacity -= this.fade;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.globalAlpha = this.opacity;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

const canvas = document.getElementById("fireworks-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const colors = ["#ff4444", "#44ff44", "#4444ff", "#ffff44", "#ff44ff"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  for (let i = 0; i < 30; i++) {
    particles.push(new Particle(x, y, color));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "rgba(224, 238, 238, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.update();
    p.draw(ctx);
    if (p.opacity <= 0) particles.splice(i, 1);
  });

  if (Math.random() < 0.05) {
    createFirework();
  }
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
