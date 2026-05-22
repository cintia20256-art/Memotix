*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial;
}

body{
  background:#f6f1eb;
  color:#222;
  overflow:hidden;
}

.page{
  width:100%;
  height:100vh;
  display:none;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  gap:20px;
}

.page.active{
  display:flex;
}

/* COVER */

.cover-image{
  position:absolute;
  width:100%;
  height:100%;
  object-fit:cover;
  animation:fade 5s infinite alternate;
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
