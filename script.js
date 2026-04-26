

let feed = document.getElementById("feed");

function addVideo(){

let title = document.getElementById("title").value;
let url = document.getElementById("url").value;

feed.innerHTML += `
<div class="video">
<h3>${title}</h3>
<video controls src="${url}"></video>
</div>
`;

document.getElementById("title").value = "";
document.getElementById("url").value = "";

}
