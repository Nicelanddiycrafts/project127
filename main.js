song= "";

function preload(){
song = loadSound("encanto1.mp3");
}

function setup(){
canvas = createCanvas(450,300);
canvas.center();

video = createCapture(VIDEO);
video.hide();

song.play(); 

}


function draw(){
    image(video,0,0,450,300);

    
    }
    