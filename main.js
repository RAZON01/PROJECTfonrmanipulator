function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.hide();

    canvas = createCanvas(550, 500);
    canvas.position(590, 100);

    poseNet = ml5.poseNet(video, modelLoaded());
    poseNet.on('pose', gotPoses);
    video.show();
}

function draw(){
    background('#76a6a8');
}

function modelLoaded(){
    console.log("POSENET MODEL IS LOADED!!")
}

function gotPoses(){
    if(result.length > 0){
        console.log(results);
    }
}