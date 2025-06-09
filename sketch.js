let img;

function preload(){
  img = loadImage('img/cat.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  img.resize(width,height);

}

function draw() {
    if (frameCount === 1) {
    const capture = P5Capture.getInstance();
    capture.start({
      format: "mp4",
      duration: 100,
    });
  }  for(let i = 0;i<3000;i++){
    let x = int(random(width));
    let y = int(random(height));
    let col = img.get(x,y);
    noStroke();
    fill(red(col),green(col),blue(col),10);
    push();
    translate(x,y);
    let length = map(saturation(col),0,255,0,120);
    let angle = map(hue(col),0,255,0,180);
    rotate(radians(angle));
    rect(0,0,2,length/8);
    pop();
  }
}