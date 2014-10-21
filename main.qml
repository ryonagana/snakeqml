import QtQuick 2.3
import QtQuick.Window 2.2
import QtQuick.Controls 1.2

import "snake.js" as Logic

Window {
    id: window
    visible: true
    width: 470
    height: 320

    property bool isGameRunning: false;


    Rectangle {
        width: parent.width
        height: parent.height

        SystemPalette { id: activePalette }

        Timer {
            id: heartbeat
            interval: 500; running: window.isGameRunning ; repeat:true
            onTriggered: { Logic.updateSnake() }
        }

        Timer {
            id: timer
            interval: 250; running: true; repeat: true
        }

        Item {
            width: parent.width
            anchors { top: parent.top; bottom: toolbar.bottom }

            Image{
                source: "data/bg.jpg"
                anchors.fill: parent
                fillMode: Image.PreserveAspectCrop

            }
        }

        Item {

            id: gameCanvas

            property int score: 0
            property int gameStarted: 0

            width: parent.width
            height: parent.height
            anchors.centerIn: parent.Center
        }

        Rectangle {
            id: toolbar
            width: parent.width
            height: 50
            color: activePalette.window
            anchors.bottom: parent.bottom

            Button {
                text: "New Game"
                anchors { right: parent.right; rightMargin: 3; verticalCenter: parent.verticalCenter }
                onClicked: Logic.newGame();
            }


            Text {
                id: textscore
                anchors { right: parent.Center  ; rightMargin: 3; verticalCenter: parent.verticalCenter }
                text: "Score: " + gameCanvas.score
                font.bold: true
                font.pixelSize: 30
            }

        }


    }

}
