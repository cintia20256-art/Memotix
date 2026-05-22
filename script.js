const pages =
document.querySelectorAll(".page");

/* PAGE */

function showPage(id){

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document
  .getElementById(id)
  .classList.add("active");
}

/* SETTINGS */

const settingsBtn =
document.getElementById("settingsBtn");

const settingsPanel =
document.getElementById("settingsPanel");

settingsBtn.addEventListener("click", () => {

  settingsPanel.classList.toggle("active");

});

/* FULLSCREEN */

document
.getElementById("fullscreenBtn")
.addEventListener("click", () => {

  if(!document.fullscreenElement){

    document.documentElement.requestFullscreen();

  }

  else{

    document.exitFullscreen();

  }

});

/* START */

document
.getElementById("startBtn")
.addEventListener("click", () => {

  showPage("templatePage");

});

/* COVER UPLOAD */

document
.getElementById("coverUpload")
.addEventListener("change", e => {

  const file =
  e.target.files[0];

  const url =
  URL.createObjectURL(file);

  document
  .getElementById("cover")
  .style.background =
  `url(${url}) center/cover`;

});

/* ADD TEMPLATE */

document
.getElementById("templateUpload")
.addEventListener("change", e => {

  const file =
  e.target.files[0];

  const url =
  URL.createObjectURL(file);

  const card =
  document.createElement("div");

  card.className =
  "template-card";

  card.innerHTML = `
    <img src="${url}">
    <h3>Custom</h3>
    <span>Custom Frame</span>
  `;

  document
  .getElementById("templatesContainer")
  .appendChild(card);

});

/* ADD STICKER */

document
.getElementById("stickerUpload")
.addEventListener("change", e => {

  const file =
  e.target.files[0];

  const url =
  URL.createObjectURL(file);

  const sticker =
  document.createElement("img");

  sticker.src = url;

  sticker.className =
  "sticker";

  document
  .getElementById("stickersContainer")
  .appendChild(sticker);

});

/* TEMPLATE CLICK */

document.addEventListener("click", e => {

  if(
    e.target.closest(".template-card")
  ){

    startCamera();

    showPage("cameraPage");

  }

});

/* CAMERA */

const video =
document.getElementById("video");

async function startCamera(){

  const stream =
  await navigator.mediaDevices.getUserMedia({
    video:true
  });

  video.srcObject = stream;
}

const canvas =
document.getElementById("canvas");

const ctx =
canvas.getContext("2d");

canvas.width = 350;
canvas.height = 500;

/* CAPTURE */

document
.getElementById("captureBtn")
.addEventListener("click", () => {

  ctx.drawImage(
    video,
    0,
    0,
    350,
    500
  );

  showPage("editPage");

});

/* FILTER */

document
.querySelectorAll(".filters button")
.forEach(button => {

  button.addEventListener("click", () => {

    canvas.style.filter =
    button.dataset.filter;

  });

});

/* STICKER */

document.addEventListener("click", e => {

  if(
    e.target.classList.contains("sticker")
  ){

    const img =
    new Image();

    img.src =
    e.target.src;

    img.onload = () => {

      ctx.drawImage(
        img,
        250,
        20,
        80,
        80
      );

    };

  }

});

/* NEXT */

document
.getElementById("nextBtn")
.addEventListener("click", () => {

  generateReceipt();

  showPage("resultPage");

});

/* FINAL */

const finalCanvas =
document.getElementById("finalCanvas");

const finalCtx =
finalCanvas.getContext("2d");

finalCanvas.width = 400;
finalCanvas.height = 700;

function generateReceipt(){

  finalCtx.fillStyle = "white";

  finalCtx.fillRect(
    0,
    0,
    400,
    700
  );

  finalCtx.fillStyle = "black";

  finalCtx.font =
  "bold 30px Arial";

  finalCtx.fillText(
    "MEMOTIX",
    120,
    50
  );

  finalCtx.drawImage(
    canvas,
    25,
    100,
    350,
    500
  );

  const imageURL =
  finalCanvas.toDataURL();

  document
  .getElementById("downloadBtn")
  .href = imageURL;

  document
  .getElementById("qrcode")
  .innerHTML = "";

  new QRCode(

    document.getElementById("qrcode"),

    {
      text:imageURL,
      width:150,
      height:150
    }

  );
}.page.active{
  display:flex;
}

/* SETTINGS */

#settingsBtn{

  position:fixed;

  top:15px;
  left:15px;

  z-index:9999;

  width:50px;
  height:50px;

  border:none;

  border-radius:50%;

  background:white;

  cursor:pointer;

  font-size:1.2rem;
}

#settingsPanel{

  position:fixed;

  top:0;
  left:-100%;

  width:300px;
  height:100%;

  background:white;

  z-index:99999;

  padding:30px;

  transition:0.4s;

  overflow:auto;
}

#settingsPanel.active{
  left:0;
}

.setting-group{

  margin-top:25px;
}

.setting-group label{

  display:block;

  margin-bottom:10px;

  font-weight:bold;
}

/* FULLSCREEN */

#fullscreenBtn{

  position:fixed;

  top:15px;
  right:15px;

  z-index:9999;

  width:50px;
  height:50px;

  border:none;

  border-radius:50%;

  background:white;

  cursor:pointer;
}

/* COVER */

#cover{

  background:
  linear-gradient(
    180deg,
    #ffd56f,
    #ffb42e
  );
}

.grid-bg{

  position:absolute;

  width:100%;
  height:100%;

  background-image:
  linear-gradient(
    rgba(0,0,0,0.08) 1px,
    transparent 1px
  ),
  linear-gradient(
    90deg,
    rgba(0,0,0,0.08) 1px,
    transparent 1px
  );

  background-size:35px 35px;

  pointer-events:none;
}

.paper-top{

  position:absolute;

  top:0;

  width:100%;
  height:180px;

  background:#f5f1ea;

  pointer-events:none;
}

.paper-bottom{

  position:absolute;

  bottom:0;

  width:100%;
  height:240px;

  background:#f5f1ea;

  pointer-events:none;
}

.camera-icon{

  position:absolute;

  top:110px;
  left:40px;

  width:90px;

  pointer-events:none;
}

.cover-content{

  position:relative;

  z-index:1000;

  text-align:center;
}

.small-title{

  color:white;

  letter-spacing:10px;

  margin-bottom:10px;
}

.cover-content h1{

  color:white;

  font-size:4rem;

  font-weight:900;
}

#startBtn{

  margin-top:40px;

  padding:15px 55px;

  border-radius:999px;

  border:none;

  background:white;

  cursor:pointer;

  font-weight:bold;
}

/* TEMPLATE */

#templatePage{
  background:#fff7e7;
}

.template-header{
  text-align:center;
  margin-top:40px;
}

.templates{

  width:100%;

  display:grid;

  grid-template-columns:
  repeat(2,1fr);

  gap:15px;

  padding:20px;

  overflow:auto;
}

.template-card{

  background:white;

  border-radius:20px;

  padding:12px;

  text-align:center;

  cursor:pointer;
}

.template-card img{

  width:100%;

  border-radius:15px;
}

.template-card span{

  display:inline-block;

  margin-top:8px;

  background:#efe3ff;

  padding:7px 12px;

  border-radius:999px;
}

/* CAMERA */

video{

  width:320px;

  border-radius:25px;
}

/* BUTTON */

#captureBtn,
#nextBtn,
#downloadBtn{

  margin-top:20px;

  padding:15px 40px;

  border:none;

  border-radius:999px;

  background:#ffb52e;

  color:white;

  cursor:pointer;
}

/* CANVAS */

canvas{

  width:320px;

  border-radius:20px;

  background:white;
}

/* FILTERS */

.filters,
.stickers{

  display:flex;

  gap:10px;

  margin-top:15px;

  flex-wrap:wrap;

  justify-content:center;
}

.filters button{

  padding:10px 18px;

  border:none;

  border-radius:999px;

  background:#ffb52e;

  color:white;

  cursor:pointer;
}

.sticker{

  width:60px;

  cursor:pointer;
}

/* QR */

#qrcode{

  margin-top:20px;

  background:white;

  padding:15px;

  border-radius:20px;
}
@keyframes fade{
  from{
    opacity:0.7;
  }
  to{
    opacity:1;
  }
}

.overlay{
  z-index:2;
  text-align:center;
}

.overlay h1{
  font-size:5rem;
  color:white;
  letter-spacing:5px;
}

#startBtn{
  margin-top:20px;
  padding:15px 40px;
  border:none;
  border-radius:50px;
  font-size:1.2rem;
  cursor:pointer;

  animation:bounce 1s infinite;
}

@keyframes bounce{
  0%{
    transform:translateY(0);
  }

  50%{
    transform:translateY(-10px);
  }

  100%{
    transform:translateY(0);
  }
}

/* TEMPLATE */

.templates{
  display:flex;
  gap:20px;
  overflow-x:auto;
  padding:20px;
}

.template-card{
  width:180px;
  background:white;
  border-radius:20px;
  overflow:hidden;
  cursor:pointer;
  transition:0.3s;
}

.template-card:hover{
  transform:scale(1.05);
}

.template-card img{
  width:100%;
}

/* CAMERA */

video{
  width:350px;
  border-radius:20px;
}

/* EDIT */

canvas{
  width:350px;
  background:white;
  border-radius:20px;
}

.filters,
.stickers{
  display:flex;
  gap:10px;
}

.filters button{
  padding:10px;
  border:none;
  border-radius:10px;
}

.sticker{
  width:60px;
  cursor:pointer;
}

/* RESULT */

#downloadBtn{
  padding:15px 30px;
  background:black;
  color:white;
  border-radius:20px;
  text-decoration:none;
}
