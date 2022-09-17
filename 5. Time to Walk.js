function solve (steps,footStep,speedKPH) {
  let distance = steps * footStep;
  let speed = speedKPH * 1000 / 3600;
  let rest = Math.floor(distance / 500) * 60;
  let time = (distance / speed) + rest;

  let hours = Math.floor(time / 3600).toFixed(0).padStart(2, "0");
  let min = Math.floor(time / 60).toFixed(0).padStart(2, '0');
  let sec = (time % 60).toFixed(0).padStart(2, '0');

  console.log(`${hours}:${min}:${sec}`);
}
solve (4000, 0.60, 5)