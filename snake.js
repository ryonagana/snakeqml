
//ryonagana
var snake_tail = 3;
var max_snake_count = 243;  // 3^5
var snake = new Array(max_snake_count)
var tail_img;
var direction = 2 // -1 = up  0 = down  ///  1 = left 2 = right

function createSnake(){
        tail_img = Qt.createComponent("Tail.qml");
        var i = 0;

         for(i = 0; i < snake_tail;i++){
                snake[i] = tail_img;

         }


}

function snakeMove(){
    var i;
    var jmp = 10;

    snake[0].x += 10;
    for(i = 0; i < snake.length; i++){

        snake[i].x[i] = snake[i-1].x

    }

}

function newGame(){
    createSnake();
    heartbeat.start();


}
