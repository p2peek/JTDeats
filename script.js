var sliderMain = document.getElementById("carousel");
var item = sliderMain.getElementsByClassName("card");

function next(){
    sliderMain.append(item[0]);
}
function prev(){
    sliderMain.prepend(item[item.length - 1]);
}



const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPauseBtn");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");

// Toggle video play/pause on button click
playPauseBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent click from reaching video
  if (video.paused) {
    video.play();
  } else {
    video.pause();
    playPauseBtn.style.display = "block";
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
});

// Pause video on click while it's playing
video.addEventListener("click", () => {
  if (!video.paused) {
    video.pause();
    playPauseBtn.style.display = "block";
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
});

// Hide button when video starts playing
video.addEventListener("play", () => {
  playPauseBtn.style.display = "none";
});

// Show button again when video ends
video.addEventListener("ended", () => {
  playPauseBtn.style.display = "block";
  playIcon.style.display = "block";
  pauseIcon.style.display = "none";
});
