var noseX=0;
var noseY=0;

function preload(){
mustache=loadImage("https://i.postimg.cc/VLZKmrgf/mustache-free-download-transparent-75610.png");
}
function setup(){
canvas= createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on("pose",gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(mustache,noseX-50,noseY,100,30);

}
function takeSnapshot(){
    save("Myimage.png");
}
function modelloaded(){
    console.log("Model is loaded");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX= "+noseX);
    console.log("noseY= "+noseY);

}
}