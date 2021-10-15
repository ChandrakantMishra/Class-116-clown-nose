noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('download__1_-removebg-preview.png');
}

function setup(){
    canvas= createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 400, 400);
    image(clown_nose, noseX, noseY, 30, 30);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.X;
        noseY = results[0].pose.nose.Y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}



function take_snapshot(){
    save('myFilterImage.png');
}