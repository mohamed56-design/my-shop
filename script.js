function playVideo(src){
    let modal = document.getElementById("videoModal");
    let video = document.getElementById("videoPlayer");

    video.src = src;
    modal.style.display = "flex";
    video.play();
}

function closeVideo(){
    let modal = document.getElementById("videoModal");
    let video = document.getElementById("videoPlayer");

    video.pause();
    modal.style.display = "none";
}
