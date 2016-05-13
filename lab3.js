function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

//face
ctx.beginPath();
ctx.arc(100,70,50,0,1*Math.PI);
ctx.stroke();

//right eye
ctx.beginPath();
ctx.arc(125,85,15,0,2*Math.PI);
ctx.stroke();
ctx.fill();

//left eye
ctx.beginPath();
ctx.arc(75,85,15,0,2*Math.PI);
ctx.stroke();
ctx.fill();

//mouth
ctx.rect(91,100,20,10);
ctx.stroke();
ctx.fill();
    
    //teeth
    ctx.fillStyle="blue";
    ctx.rect(70,100,20,10);
    ctx.stroke();

    
//hat
    ctx.fillStyle="black";    
    ctx.beginPath();
    ctx.moveTo(100,30);
    ctx.lineTo(150,70);
    ctx.lineTo(50,70);
    ctx.fill();

//hat top
    ctx.fillStyle="black";
    ctx.fillRect(65,30,70,30);
    
//bodytop
    ctx.rotate(178*Math.PI/180);
    ctx.beginPath();
    ctx.arc(-97,-175,50,0,1*Math.PI);
    ctx.stroke();
    
//body bottom
    ctx.rotate(0*Math.PI/0);
    ctx.beginPath();
    ctx.arc(-100,-175,50,0,1*Math.PI);
    ctx.stroke();
  }
}

