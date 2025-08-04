//carousel

var sliderMain = document.getElementById("carousel");
var item = sliderMain.getElementsByClassName("card");

function next(){
    sliderMain.append(item[0]);
}
function prev(){
    sliderMain.prepend(item[item.length - 1]);
}


// video play/pause 

const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPauseBtn");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");

playPauseBtn.addEventListener("click", (e) => {
  e.stopPropagation(); 
  if (video.paused) {
    video.play();
  } else {
    video.pause();
    playPauseBtn.style.display = "block";
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
});
video.addEventListener("click", () => {
  if (!video.paused) {
    video.pause();
    playPauseBtn.style.display = "block";
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
});
video.addEventListener("play", () => {
  playPauseBtn.style.display = "none";
});
video.addEventListener("ended", () => {
  playPauseBtn.style.display = "block";
  playIcon.style.display = "block";
  pauseIcon.style.display = "none";
});


// request a dish modal

function openModal() {
  document.getElementById("requestDishModal").style.display = "flex";
  document.body.style.overflow = "hidden";
  document.body.classList.add("blurred");
}

function closeModal() {
  document.getElementById("requestDishModal").style.display = "none";
  document.body.style.overflow = "auto";
  document.body.classList.remove("blurred");
}



