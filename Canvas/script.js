var px=0;
var dir=1;
var py=0;
var dy=1;
var Direita=false;
var Esquerda=false;

var playerX = 0;

function GO(){
    var TelaW=700;
    var TelaH=400;
    var canvas = document.getElementById("Tela");
    var ctx = canvas.getContext("2d");
    px+=dir;
    py+=dy;
    if(px>650||px<0){
        dir=dir*-1;
    }
    if(py>350||py<0){
        dy=dy*-1;
    }
    if(Direita){
        playerX+=10;
    }
    if(Esquerda){
        playerX-=10;
    }
    ctx.clearRect(0,0,300,150);
    ctx.fillStyle = "#00ffff";
    ctx.fillRect(0,0,TelaW,TelaH);
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(playerX,0,50,50);
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(px,py,50,50);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;

    sol(ctx);
    casa(ctx);

    window.requestAnimationFrame(GO);
}

function casa(ctx){
    ctx.strokeRect(470,200,200,200);
    ctx.beginPath();
    ctx.moveTo(437,230);
    ctx.lineTo(570,100);
    ctx.lineTo(700,230);
    ctx.stroke();

    //janelas
    ctx.fillStyle="#f00";
    ctx.fillRect(480,220,50,50);
    ctx.strokeRect(480,220,50,50);

    ctx.fillStyle="#0f0";
    ctx.fillRect(540,220,50,50);
    ctx.strokeRect(540,220,50,50);

    ctx.fillStyle="#00f";
    ctx.fillRect(480,280,50,50);
    ctx.strokeRect(480,280,50,50);

    ctx.fillStyle="#ff0";
    ctx.fillRect(540,280,50,50);
    ctx.strokeRect(540,280,50,50);

    //porta
    ctx.strokeRect(600,300,50,100);
    ctx.beginPath();
    ctx.arc(615,350,10,0,2*Math.PI);
    ctx.stroke();
}

function sol(ctx){
    ctx.fillStyle="#ff0";
    ctx.beginPath();
    ctx.arc(200,200,50,0,2*Math.PI);
    ctx.fill();
}

function TeclaDw(e){
    switch(e.keyCode){
        case 39:
            Direita=true;
            break;
        case 37:
            Esquerda=true;
            break;
    }
}
function TeclaUp(e){
    switch(e.keyCode){
        case 39:
            Direita=false;
            break;
        case 37:
            Esquerda=false;
            break;
    }
}


document.addEventListener("keydown",TeclaDw);
document.addEventListener("keyup",TeclaUp);
document.addEventListener("DOMContentLoaded",GO);
