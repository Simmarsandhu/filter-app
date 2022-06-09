function preload(){

}
function setup(){
    canvas= createCanvas(600,450);
    canvas.position(470,200);
    video= createCapture(VIDEO);
    video.hide()

}
function draw(){
image(video,0,0,600,450);
}
function snapshot(){
    save('myfilterimage')
}