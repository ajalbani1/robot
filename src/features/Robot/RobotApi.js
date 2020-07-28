let listeners = new Set();
let width;
let height;
let storedSpeed;
let storedDirection;
let crashed;
let x;
let y;
let lastUpdate;

// "Public"
export function on(listener) {
  listeners.add(listener);

  return { width, height };
}

export function off(listener) {
  listeners.delete(listener);
}

export function command(speed, direction) {
  updatePosition();
  storedSpeed = speed;
  storedDirection = direction;
}

const MIN_SIZE = 200;
const MAX_SIZE = 1000;
export function reset() {
  width = Math.floor(Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE);
  height = Math.floor(Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE);
  storedSpeed = 0;
  storedDirection = 0;
  crashed = false;
  x = 0;
  y = 0;
  lastUpdate = Date.now();
  return { width, height };
}

// "Private"
function updatePosition() {
  if (crashed) {
    return;
  }
  const thisUpdate = Date.now();
  const distance = storedSpeed * (thisUpdate - lastUpdate) / 1000;

  x += distance * Math.cos(storedDirection);
  y += distance * Math.sin(storedDirection);
  lastUpdate = thisUpdate;
  if (Math.abs(x) > width / 2) {
    crashed = true;
    x = Math.sign(x) * width / 2;
  }
  if (Math.abs(y) > height / 2) {
    crashed = true;
    y = Math.sign(y) * height / 2;
  }

  listeners.forEach((callback) => callback(x, y, crashed));
}

reset();
setInterval(updatePosition, 50);
