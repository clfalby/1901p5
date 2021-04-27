var seethru=255
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
	background(mouseX,216,230);
}

//The draw function happens over and over again
function draw() {
   //background is pink
  //circle
  stroke(90,255,127); // an RGB color for the circle's border
  strokeWeight(10);
  fill(255,90,127,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,height/2,100,seethru); // center of canvas, 20px dia
  fill(255,255,251,seethru);
  
  rect(50,200,400,100);
}


  function mousePressed(){
  	if (seethru<0)
  		{seethru=255;
  		}else{
  	seethru=seethru-10;}
  }
