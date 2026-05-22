const pages = document.querySelectorAll(".page");

function showPage(id){

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(id)
  .classList.add("active");
}

/* =========================
   START BUTTON
========================= */

document.getElementById("startBtn")
.addEventListener("click", () => {

  showPage("templatePage");

});

/* =========================
   TEMPLATE SELECT
========================= */

let selectedShots = 1;

document.querySelectorAll(".template-card")
.forEach(card => {

  card.addEventListener("click", () => {

    selectedShots = card.dataset.shots;

    startCamera();

    showPage("cameraPage");

  });

});

/* =========================
   CAMERA
========================= */

const video = document.getElementById("video");

async function startCamera(){

  const stream =
  await navigator.mediaDevices.getUserMedia({
    video:true
  });

  video.srcObject = stream;
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 350;
canvas.height = 500;

document.getElementById("captureBtn")
.addEventListener("click", () => {

  ctx.drawImage(video,0,0,350,500);

  showPage("editPage");

});

/* =========================
   FILTERS
========================= */

document.querySelectorAll(".filters button")
.forEach(button => {

  button.addEventListener("click", () => {

    canvas.style.filter =
    button.dataset.filter;

  });

});

/* =========================
   STICKERS
========================= */

document.querySelectorAll(".sticker")
.forEach(sticker => {

  sticker.addEventListener("click", () => {

    const img = new Image();

    img.src = sticker.src;

    img.onload = () => {

      ctx.drawImage(img,250,20,80,80);

    };

  });

});

/* =========================
   NEXT STEP
========================= */

document.getElementById("nextBtn")
.addEventListener("click", () => {

  generateReceipt();

  showPage("resultPage");

});

/* =========================
   FINAL RECEIPT
========================= */

const finalCanvas =
document.getElementById("finalCanvas");

const finalCtx =
finalCanvas.getContext("2d");

finalCanvas.width = 400;
finalCanvas.height = 700;

function generateReceipt(){

  finalCtx.fillStyle = "white";
  finalCtx.fillRect(0,0,400,700);

  finalCtx.fillStyle = "black";

  finalCtx.font = "30px monospace";

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

  finalCtx.font = "18px monospace";

  finalCtx.fillText(
    "thank you for memories",
    65,
    650
  );

  const imageURL =
  finalCanvas.toDataURL();

  document.getElementById("downloadBtn")
  .href = imageURL;

  document.getElementById("qrcode")
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
