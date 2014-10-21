
//ryonagana
var snake_tail = 3;
var max_snake_count = 243;  // 3^5
var snake = new Array(max_snake_count);
var links = new Array;
var board = new Array;
var direction = 2 // -1 = up  0 = down  ///  1 = left 2 = right
var max_cols = 12
var max_rows = 36




function initSnake(){
    var i;
    var tail = Qt.createComponent("Tail.qml")
    for(i = 0; i < 3; i++){

        var link = tail.createObject(gameCanvas)
        links[i] = link;
    }

    snake[0] = links[0]; // set the head!

    for(var j = 0; j < links.length; j++){
        snake[j] = links[j];
    }

}


function updateSnake(){

    var head_x = snake[0].x;
    var head_y = snake[0].y;

    switch(direction){
        case 2:
            head_x += 10;
            break;
        case 1:
            head_x -= 10;
            break;

        case -1:
            head_y += 10;
            break;
        case 0:
            head_y -= 10;
            break;

    }

    for(var j = 0; j < snake.length; ++j){
        //snake[j].x = head_x;
        //snake[j].y = head_y;
        console.log(snake);
    }


}



function newGame(){

    board = new Array(max_cols * max_rows);
    direction = 2;
    initSnake();

    window.isGameRunning = true;






}
