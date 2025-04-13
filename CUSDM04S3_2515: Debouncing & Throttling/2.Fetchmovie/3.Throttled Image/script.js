const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideNumber = document.getElementById("slideNumber");

let currentSlide = 1;
let lastClickTime = 0;
let clickCount = 0;
let throttleDelay = 1000; // 1 second

function loadImage(slide) {
  sliderImage.src = `https://picsum.photos/600/400?random=${slide}`;
  slideNumber.textContent = `Slide #${slide}`;
}

function handleNavigation(direction) {
  const currentTime = Date.now();

  if (currentTime - lastClickTime < throttleDelay) {
    clickCount++;
    if (clickCount > 3) {
      alert("Chill chill, loading it!!");
    }
    return;
  }

  lastClickTime = currentTime;
  clickCount = 1;

  if (direction === "next") {
    currentSlide++;
  } else if (direction === "prev" && currentSlide > 1) {
    currentSlide--;
  }

  loadImage(currentSlide);
}

nextBtn.addEventListener("click", () => handleNavigation("next"));
prevBtn.addEventListener("click", () => handleNavigation("prev"));
