
let videos = [
  {
    title: "Monkey Police Story",
    url: "video1.mp4"
  },
  {
    title: "Funny AI Street",
    url: "video2.mp4"
  }
];

let index = 0;

let player = document.getElementById("videoPlayer");

function loadVideo(){
    player.src = videos[index].url;
}

function nextVideo(){
    index++;
    if(index >= videos.length) index = 0;
    loadVideo();
}

function prevVideo(){
    index--;
    if(index < 0) index = videos.length - 1;
    loadVideo();
}

function addVideo(){
    let title = document.getElementById("title").value;
    let url = document.getElementById("url").value;

    videos.push({title, url});

    document.getElementById("title").value = "";
    document.getElementById("url").value = "";

    alert("Video added 🔥");url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  
}

// load first video
loadVideo();

