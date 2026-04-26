

let videos = [
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
];

let index = 0;

let player = document.getElementById("videoPlayer");

function load(){
  player.src = videos[index];
}

function nextVideo(){
  index++;
  if(index >= videos.length) index = 0;
  load();
}

load();
