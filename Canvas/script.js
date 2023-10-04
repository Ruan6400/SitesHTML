var px=0;
var pxSmoke=[];
var pySmoke=[];
var timer=0;
var quant=5;
for(var i=0;i<quant;i++){
    pxSmoke.push(Math.round((Math.random()*40)+500));
    pySmoke.push(75-(i*10));
}
 var dir=1; 
 var py=0; 
 var dy=1; 
 var Direita=false; 
 var Esquerda=false; 
  
 var playerX = 0; 
  
 function GO(){ 
     var canvas = document.getElementById("Tela"); 
     var ctx = canvas.getContext("2d");
     var TelaW=canvas.offsetWidth; 
     var TelaH=canvas.offsetHeight;  
     px+=dir; 
     py+=dy; 
     if(px>700||px<0){ 
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
     ctx.clearRect(0,0,TelaW,TelaH); 
     ctx.fillStyle = "#00ffff"; 
     ctx.fillRect(0,0,TelaW,TelaH); 
     ctx.fillStyle = "#005"; 
     ctx.fillRect(px,py,50,50); 
     ctx.strokeStyle = "#000"; 
     ctx.lineWidth = 1; 
     sol(ctx); 
     casa(ctx);
     Grama(ctx);
     ctx.fillStyle = "#ff0000"; 
     ctx.fillRect(playerX,300,50,50); 
  
     window.requestAnimationFrame(GO); 
 } 
  
 function casa(ctx){
     ctx.fillStyle= "#f9f";
     ctx.beginPath();
     ctx.moveTo(470,197);
     ctx.lineTo(470,400);
     ctx.lineTo(670,400);
     ctx.lineTo(670,199);
     ctx.lineTo(570,100)
     ctx.fill();
     ctx.stroke();
     

     ctx.fillStyle="#ff0";
     ctx.beginPath(); 
     ctx.moveTo(437,230); 
     ctx.lineTo(570,100); 
     ctx.lineTo(698,228);
     ctx.lineTo(700,210);
     ctx.lineTo(570,80);
     ctx.lineTo(427,220);
     ctx.fill();
     ctx.beginPath();
     ctx.moveTo(700,210);
     ctx.lineTo(570,80);
     ctx.lineTo(427,220);
     ctx.stroke();
     ctx.beginPath();
     ctx.arc(432,225,7.5,1.27*Math.PI,2.23*Math.PI,true);
     ctx.fill();
     ctx.stroke();
     ctx.beginPath();
     ctx.arc(698,218,7.5,1.6*Math.PI,2.78*Math.PI,false);
     ctx.fill();
     ctx.stroke();
     ctx.beginPath(); 
     ctx.moveTo(437,230); 
     ctx.lineTo(570,100); 
     ctx.lineTo(693,223);
     ctx.stroke();

     //chamine
     timer+=1;
     if(timer==200){
        for(var i=0;i<quant;i++){
            pxSmoke[i]=Math.round((Math.random()*30)+500);
            pySmoke[i]=75-(i*10);
        }
        timer=0;
     }
     ctx.fillStyle="#ddd";
    for(var i=0;i<5;i++){
        ctx.beginPath();
        ctx.arc(pxSmoke[i],pySmoke[i],20,0,2*Math.PI);
        ctx.fill();
    }
     ctx.fillStyle= "white";
     ctx.beginPath();
     ctx.moveTo(500,149);
     ctx.lineTo(500,100);
     ctx.lineTo(530,100);
     ctx.lineTo(530,120);
     ctx.lineTo(500,149);
     ctx.fill();
     ctx.stroke();
     ctx.fillStyle="#bb0";
     ctx.beginPath();
     ctx.arc(500,95,5,0.5*Math.PI,1.5*Math.PI);
     ctx.fill();
     ctx.stroke();
     ctx.beginPath();
     ctx.arc(530,95,5,0.5*Math.PI,1.5*Math.PI,true);
     ctx.fill();
     ctx.stroke();
     ctx.fillRect(500,90,30,10);
     ctx.beginPath();
     ctx.moveTo(500,100);
     ctx.lineTo(530,100);
     ctx.stroke();
     ctx.beginPath();
     ctx.moveTo(500,90);
     ctx.lineTo(530,90);
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
     ctx.fillStyle="#0de";
     ctx.fillRect(600,300,50,100); 
     ctx.strokeRect(600,300,50,100); 
     ctx.beginPath(); 
     ctx.arc(610,350,5,0,2*Math.PI); 
     ctx.stroke(); 
 } 
  
 function sol(ctx){ 
     ctx.fillStyle="#ff0"; 
     ctx.beginPath(); 
     ctx.arc(60,60,50,0,2*Math.PI); 
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
  
  
function Grama(ctx){
    ctx.fillStyle = "#0f0";
    for(var i=0;i<25;i++){
        ctx.beginPath();
        ctx.moveTo((i*30)-40,425);
        ctx.lineTo((i+1)*30,360);
        ctx.lineTo((i+2)*30,425);
        ctx.fill();
    }
} 
document.addEventListener("keydown",TeclaDw); 
document.addEventListener("keyup",TeclaUp); 
document.addEventListener("DOMContentLoaded",GO);
