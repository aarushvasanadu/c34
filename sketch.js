var database,position,redBall;


function setup(){
    createCanvas(500,500);
    database = firebase.database()
    redBall = createSprite(250,250,10,10);
    redBall.shapeColor = "red";
    var redBallPosition = database.ref('ball/position')
    redBallPosition.on('value',readPosition)
}

function draw(){
    background("white");
    if(position !== undefined){
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
}

function changePosition(x,y){
    database.ref('ball/position').set({
    'x' : position.x + x,
    'y' : position.y + y
    })
    
}

function readPosition(data){
    position = data.val()
    redBall.x = position.x
    redBall.y = position.y
}
