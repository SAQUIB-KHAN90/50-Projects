const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currenetActive = 1;

next.addEventListener("click", () => {
  currenetActive++;

  if (currenetActive > circles.length) {
    currenetActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currenetActive--;

  if (currenetActive < 1) {
    currenetActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currenetActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currenetActive === 1) {
    prev.disabled = true;
  } else if (currenetActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
