let current = 0;
let fruits = [];
let imageNames = ("unnamed.jpg", "hqdefault.jpg", "circle.jpg", "star.jpg", "wave.jpg", "monalisa.jpg");
let num = 0;
let r = 0;
let image_size_x = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 720]
let image_size_y = [28, 56, 83, 111, 139, 167, 194, 222, 250, 278, 306, 333, 361, 400]
let size = 0;
let button;

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

button = createButton("click to randomize :)";
button.mousePressed(buttonPressed);

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
    		growImage(img);
  		current = current + 1;
  		setTimeout(drawImage, 200);
  	}

}

function buttonPressed() {

  
}

/*
* growImage: a function that grows the image named im.
* Input: im (an image)
*/

function growImage(im) {


//Resize the image, then display the image.
//Start with a small image size (like (100, 56)), and build up the image size (200, 111), (300, 167), (400, 222), (500, 278), (600, 333) (720, 400)

//size will change from 0 to 1 to 2 to 3 to 4….to 7
if (size < 14) {
im.resize(image_size_x[size], image_size_y[size]);
image(im, 0, 0);
size = size + 1;
setTimeout(growImage, 200, im);
}
else {
size = 0;
}
}
