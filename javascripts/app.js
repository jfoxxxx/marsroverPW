// Rover Object Goes Here
// ======================
var myRover = {
  direction: "N",
  x: 0,
  y: 0,
};
// ======================
function turnLeft(myRover){
  console.log("turnLeft was called!");
  switch(myRover.direction){
    case "N": myRover.direction = "W";
    break;
    case "W": myRover.direction = "S";
    break;
    case "S": myRover.direction = "E";
    break;
    case "E": myRover.direction = "N";
    break;
  }
}

function turnRight(myRover){
  console.log("turnRight was called!");
  switch(myRover.direction){
    case "N":myRover.direction = "E";
    break;
    case "W": myRover.direction = "N";
    break;
    case "S": myRover.direction = "W";
    break;
    case "E": myRover.direction = "S";
    break;
  }
}

function moveForward(myRover){
  console.log("moveForward was called");
  if (myRover.direction == "W") {
      myRover.x -= 1;
  }
  else if
    (myRover.direction == "N") {
      myRover.y += 1;
    }
  else if
    (myRover.direction == "S") {
      myRover.y -= 1;
  }
    else if
    (myRover.direction == "E") {
      myRover.x += 1;
    }
  // switch (myRover){
    // case "W": myRover.y = myRover.myRover.x + 1;
  //   case myRover.direction == "W" : myRover.y += 1;
  //   break;
  //   case 0: myRover.y = myRover.y - 1;
  //   break;
  //   case "S": myRover.y = myRover.y + 1;
  //   break;
  // }
}

function recieveCommand(command){
  switch (command){
  case "f": moveForward(myRover);{
//     console.log("moveForward was called");
  }
  break;
  case "r": turnRight(myRover);{
//     console.log("turnRight was called!");
    }
  break;
  case "l": turnLeft(myRover);{
//     console.log("turnLeft was called!");
  }
  }
}

// recieveCommand(f);
