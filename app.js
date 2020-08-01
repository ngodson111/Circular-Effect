//COLORS
let color = [
  "#444444",
  "red",
  "blue",
  "green",
  "pink",
  "coral",
  "skyblue",
  "purple",
];
let particles;
function setup() {
  createCanvas(1000, 600);
  //   background(0);

  //CREATING PARTICLE ARRAY
  particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push(
      new Particle(
        width / 2,
        height / 2,
        randomIntiger(2, 7),
        color[randomIntiger(0, color.length - 1)]
      )
    );
  }
}
function draw() {
  particles.forEach((item) => {
    item.update();
  });
  //   fillRect(0, 0, width, height);
  //   fillStyle(rgba(0, 0, 0, 0.3));
}

//GENERATING RANDOM NUMBER
function randomIntiger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//MAKING PARTICAL
class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radient = Math.random() * Math.PI;
    this.velocity = 0.05;
    this.random = randomIntiger(70, 130);
    this.lastmouse = { x: x, y: y };
  }

  update(x) {
    //for mouse effect
    this.lastmouse.x += (mouseX - this.lastmouse.x) * 0.05;
    this.lastmouse.y += (mouseY - this.lastmouse.y) * 0.05;
    this.radient += this.velocity;
    this.x = this.lastmouse.x + Math.cos(this.radient) * this.random;
    this.y = this.lastmouse.y + Math.sin(this.radient) * this.random;
    this.draw();
  }

  draw() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}
console.log(document.querySelector("main"));
