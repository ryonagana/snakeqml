import QtQuick 2.3

Rectangle {
    width: 16
    height: 16

    Image {
       width: parent.width
       height: parent.width
       source: "data/tail.png"
       fillMode:  Image.PreserveAspectCrop
    }

}
