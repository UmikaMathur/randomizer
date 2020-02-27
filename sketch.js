let current = 0;
let fruits = [];
let imageNames = ("unnamed.jpg", "hqdefault.jpg", "circle.jpg", "star.jpg", "wave.jpg", "monalisa.jpg");
let num = 0;
let r = 0;

function preload() {
   img1 = loadImage("unnamed.jpg");
   img2 = loadImage("hqdefault.jpg");
   img3 = loadImage("circle.jpg");
   img4 = loadImage("star.jpg");
   img5 = loadImage("wave.jpg");
   img6 = loadImage("monalisa.jpg");
}

function mousePressed(){
  r = int(random(18, 24));
  current = 0;
  setTimeout(drawImage, 200);
}



function setup() {
  createCanvas(720, 400);
  textFont('Courier New');
  textSize(30);
  text("click to randomize :)", 130, 200);
  fruits [0] = img1;
  fruits [1] = img2;
  fruits [2] = img3;
  fruits [3] = img4;
  fruits [4] = img5;
  fruits [5] = img6;
}

function draw() {
  //image(fruits[0], 0, 0);
 
 // image(fruits[1], 0, 0);
}

function drawImage(){
  if (current < r){
    img = fruits[current%6];
    img.resize(720, 400);
    image(img, 0, 0);
  current = current + 1;
  setTimeout(drawImage, 200);
  }
 
}

