canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
console.log(random_number);
carwidth = 100;
carheight = 90;
background_image = "racing.gif";
carimage1 = "car1.png";
carimage2 = "car2.png";
car1_x = 10;
car1_y = 10;
car2_x = 10;
car2_y = 10;
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1image;
    car1_imgTag.src = car1image;
    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2image;
    car2_imgTag.src = car2image; 
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadimage() {
    ctx.drawImage(car_imgTag, car1_x, car1_y_, carwidth, carheight);
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) {
    keyPressed = e.keyCode; 
    console.log(keyPressed);
    if (keyPressed == "38") 
    {
        up();
        console.log("up");
    }
    if (keyPressed == "40") 
    {
        down();
        console.log("down");
    }
    if (keyPressed == "37") 
    {
        left();
        console.log("left");
    }
    if (keyPressed == "39") 
    {
        w();
        console.log("right");
    }
    if (keyPressed == "87") 
    {
        w();
        console.log("w, forward");
    }
    if (keyPressed == "68") 
    {
        d();
        console.log("d, right");
    }
    if (keyPressed == "65") 
    {
        a();
        console.log("a, left");
    }
    if (keyPressed == "83") 
    {
        a();
        console.log("s, backwards");
    }
}
function up() {
    if (car1_y >= 0){
        car1_y -= 10;
        console.log("Up arrow " + car1_x + " - " + car_y);
        uploadBackground();
        uploadRoverimage();
    }
}
function w() {
    if (car1_y >= 0){
        car2_y -= 10;
        console.log("w, forward" + car2_x + " - " + car2_y);
        uploadBackground();
        uploadRoverimage();
    }
}
function s() {
    if (car1_y >= 0){
        car2_y -= 10;
        console.log("s, backward  x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadRoverimage();
    }
}
function d() {
    if (car1_y >= 0){
        car2_y -= 10;
        console.log("d, right x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadRoverimage();
    }
}
function a() {
    if (car1_y >= 0){
        car2_y -= 10;
        console.log("d, right x = " + car2_x + " | y = " + car2_y)
        uploadBackground();
        uploadRoverimage();
    }
}
function down() {
    if (car1_y <= 500){
        car1_y = car1_y+10;
        console.log("Down Arrow,  x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadRoverimage();
    }
}
function left() {
    if (car1_x >= 0){
        car1_x = car1_x - 10;
        console.log("Left arrow " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadRoverimage();
    }
}
function right() {
    if (car1_x <= 700){
        car1_x = car1_x + 10;
        console.log("Right Arrow, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadRoverimage();
    }
}
if(car1_x > 700)
{
    console.log("Car1 Won!!!");
    document.getElementById('game_status').innerHTML = "Car 1 Won!!!";
}
if(car2_x > 700)
{
    console.log("Car2 Won!!!");
    document.getElementById('game_status').innerHTML = "Car 2 Won!!!";
}