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

settingsBtn.onclick = () => {

  settingsPanel.classList.toggle("active");

};

/* FULLSCREEN */

document
.getElementById("fullscreenBtn")
.onclick = () => {

  if(!document.fullscreenElement){

    document.documentElement.requestFullscreen();

  }else{

    document.exitFullscreen();

  }

};

/* START BUTTON FIX */

const startBtn =
document.getElementById("startBtn");

startBtn.onclick = () => {

  console.log("START CLICKED");

  showPage("templatePage");

};

/* TEMPLATE */

document.addEventListener("click", e => {

  const card =
  e.target.closest(".template-card");

  if(card){

    startCamera();

    showPage("cameraPage");

  }

});

/* CAMERA */

const video =
document.getElementById("video");

async function startCamera(){

  try{

    const stream =
    await navigator.mediaDevices.getUserMedia({
      video:true
    });

    video.srcObject = stream;

  }

  catch(error){

    alert(
      "Camera permission denied"
    );

  }

}

/* CAPTURE */

const canvas =
document.getElementById("canvas");

const ctx =
canvas.getContext("2d");

canvas.width = 350;
canvas.height = 500;

document
.getElementById("captureBtn")
.onclick = () => {

  ctx.drawImage(
    video,
    0,
    0,
    350,
    500
  );

  showPage("editPage");

};

/* FILTER */

document
.querySelectorAll(".filters button")
.forEach(button => {

  button.onclick = () => {

    canvas.style.filter =
    button.dataset.filter;

  };

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
.onclick = () => {

  generateReceipt();

  showPage("resultPage");

};

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
  "bold 32px Arial";

  finalCtx.fillText(
    "MEMOTIX",
    115,
    60
  );

  finalCtx.drawImage(
    canvas,
    25,
    110,
    350,
    500
  );

  finalCtx.font =
  "18px Arial";

  finalCtx.fillText(
    "thank you for memories",
    70,
    660
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

}

/* COVER BACKGROUND */

document
.getElementById("coverUpload")
.onchange = e => {

  const file =
  e.target.files[0];

  if(!file) return;

  const url =
  URL.createObjectURL(file);

  document
  .getElementById("cover")
  .style.background =
  `url(${url}) center/cover`;

};

/* ADD TEMPLATE */

document
.getElementById("templateUpload")
.onchange = e => {

  const file =
  e.target.files[0];

  if(!file) return;

  const url =
  URL.createObjectURL(file);

  const card =
  document.createElement("div");

  card.className =
  "template-card";

  card.innerHTML = `
    <img src="${url}">
    <p>Custom</p>
  `;

  document
  .getElementById("templatesContainer")
  .appendChild(card);

};

/* ADD STICKER */

document
.getElementById("stickerUpload")
.onchange = e => {

  const file =
  e.target.files[0];

  if(!file) return;

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

};
