canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

c1_W = 120;
c1_H = 60;
c1_I = "car1.png"
c1_X = 10;
c1_Y = 10;

c2_W = 120;
c2_H = 60;
c2_I = "car2.png"
c2_X = 10;
c2_Y = 100;


bg_I = "racing.jpg"

function add(){
    bg_tag = new Image();
    bg_tag.onload = uploadbg;
    bg_tag.src =  bg_I;

    c1_tag = new Image();
    c1_tag.onload = uploadc1;
    c1_tag.src =  c1_I;

    c2_tag = new Image();
    c2_tag.onload = uploadc2;
    c2_tag.src =  c2_I;
}

function uploadbg() {
    ctx.drawImage(bg_tag, 0, 0, canvas.width, canvas.height);
}
function uploadc1() {
    ctx.drawImage(c1_tag, c1_X, c1_Y, c1_W, c1_H);
}

function uploadc2() {
    ctx.drawImage(c2_tag, c2_X, c2_Y, c2_W, c2_H);
}


window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        car1_up();
        console.log("Up");
    }

    if (keyPressed == "40") {
        car1_down();
        console.log("Down");
    }

    if (keyPressed == "37") {
        car1_left();
        console.log("Left");
    }

    if (keyPressed == "39") {
        car1_right();
        console.log("Right");
    }

    if (keyPressed == "39") {
        car2_up();
        console.log("Up");
    }

    if (keyPressed == "39") {
        car2_down();
        console.log("Down");
    }

    if (keyPressed == "39") {
        car2_left();
        console.log("Left");
    }

    if (keyPressed == "39") {
        car2_right();
        console.log("Right");
    }
}