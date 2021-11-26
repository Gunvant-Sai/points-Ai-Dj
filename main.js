Song1 = "";
Song2 = "";
leftWristx = "";
leftWristy = "";
rightWristx = "";
rightWristy = "";

function setup()
{
    canvas = createCanvas(750,600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on("pose",gotPoses);
}

function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(result);
        leftWristx = result[0].pose.leftWrist.x;
        leftWristy = result[0].pose.leftWrist.y;
        console.log(leftWristx+"  "+leftWristy);

        rightWristx = result[0].pose.rightWrist.x;
        rightWristy = result[0].pose.rightWrist.y;
        console.log(rightWristx+"  "+rightWristy);
    }
}

function modelLoaded()
{
    console.log("Pose Initialized");
}

function preload()
{
   Song1 = loadSound("music.mp3");
   Song2 = loadSound("music2.mp3");
}

function draw()
{
    image(video,0,0,750,600);
}

function play()
{
    Song1.play();
}