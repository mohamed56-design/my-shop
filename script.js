
// 🎥 هنا كتزيد الفيديوهات ديالك بسهولة
const videos = [
  {
    title: "Monkey Police Story",
    src: "video1.mp4",
    img: "https://picsum.photos/400/700?1"
  },
  {
    title: "Scary AI Night",
    src: "video2.mp4",
    img: "https://picsum.photos/400/700?2"
  },
  {
    title: "Funny Street AI",
    src: "video3.mp4",
    img: "https://picsum.photos/400/700?3"
  }
];

// 📺 عرض الفيديوهات تلقائياً
let feed = document.getElementById("feed");

videos.forEach(video => {
  feed.innerHTML += `
    <div class="video-card">
      <img src="${video.img}">
      <h3>${video.title}</h3>
      <button onclick="playVideo('${video.src}')">▶ Play</button>
    </div>
  `;
});

// ▶ تشغيل الفيديو
function playVideo(src){
    let modal = document.getElementById("videoModal");
    let video = document.getElementById("videoPlayer");

    video.src = src;
    modal.style.display = "flex";
    video.play();
}

// ✖ إغلاق الفيديو
function closeVideo(){
    let modal = document.getElementById("videoModal");
    let video = document.getElementById("videoPlayer");

    video.pause();
    modal.style.display = "none";
}{
  title: "AI Story 1",
  src: "video1.mp4",
  img: "thumb1.jpg"
}

