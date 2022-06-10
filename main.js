leftcheekx=0;
leftcheeky=0;
rightcheekx=0;
rightcheeky=0;
filter_image=[];

function preload(){
    img1= loadImage("https://i.postimg.cc/9QJbjxb5/Blushing-PNG-Image-Transparent-1.png")
    img2=loadImage("https://i.postimg.cc/YCM4xM1M/Blush-PNG-Image-1.png")
    img3=loadImage("https://i.postimg.cc/c47SQrtZ/Blush-PNG-Image-Background-2.png")


}
function setup(){
    canvas= createCanvas(600,450);
    canvas.position(470,200);
    video= createCapture(VIDEO);
    video.hide()
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotposes)
   

}
function modelLoaded(){
    console.log("working")
}
function gotposes(results){
    if(results.length > 0){
        console.log("results");
        leftcheekx=results[0].pose.leftEye.x;
        leftcheeky=results[0].pose.leftEye.y;
        rightcheekx=results[0].pose.rightEye.y;
        rightcheeky=results[0].pose.rightEye.y;


    }

}

function draw(){
image(video,0,0,600,450);
image(img1,leftcheekx-150,leftcheeky-140,195,195)

    
    
    
  
  }
  
function change(){
    images=[img1,img2,img3]

    random=Math.floor(Math.random()*2);
    filter_image=images[random]
    console.log(filter_image)
    

    
}


  

function snapshot(){
    save('myfilterimage')
}