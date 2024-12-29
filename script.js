const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

function createSnowflake() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 4 + 1,
    speed: Math.random() * 3 + 1,
    opacity: Math.random(),
  };
}

function drawSnowflake(flake) {
  ctx.beginPath();
  ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
  ctx.fill();
}

function updateSnowflake(flake) {
  flake.y += flake.speed;
  if (flake.y > canvas.height) {
    flake.y = 0;
    flake.x = Math.random() * canvas.width;
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowflakes.forEach((flake) => {
    drawSnowflake(flake);
    updateSnowflake(flake);
  });
  requestAnimationFrame(animate);
}

for (let i = 0; i < 100; i++) {
  snowflakes.push(createSnowflake());
}

animate();

function test() {
  console.log("Hello!");
}
