*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial;
}

html,
body{

  width:100%;
  height:100%;

  overflow:hidden;

  background:#ffcb5c;
}

/* PAGE */

.page{

  width:100%;
  height:100vh;

  display:none;

  justify-content:center;
  align-items:center;
  flex-direction:column;

  position:absolute;

  overflow:hidden;
}

.page.active{
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
