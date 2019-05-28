// Rover Object Goes Here
// ======================
var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog:[]
}

// Rovers' map
// ======================
var map = [
  ['O', 'O', 'O', 'X', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X'],
  ['O', 'O', 'X', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'O'],
  ['X', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X'],
  ['O', 'O', 'X', 'O', 'X', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'O', 'O'],
  ['X', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X']
]

// Rovers' Behaviour(f)
// ======================
function turnLeft() {
  switch(rover.direction) {
    case 'N': 
      rover.direction = 'W';
      break;
    case 'W': 
      rover.direction = 'S';
      break;
    case 'S': 
      rover.direction = 'E';
      break;
    case 'E': 
      rover.direction = 'N';
      break;
  } 
  //console.log('rover direction after turning left is: ' + this.rover.direction);
  //console.log('turnLeft was called!');
}

function turnRight() {
  switch (rover.direction) {
    case 'N':  
      rover.direction = 'E';
      break;
    case 'E': 
      rover.direction = 'S';
      break;
    case 'S': 
      rover.direction = 'W';
      break;
    case 'W': 
      rover.direction = 'N';
      break;
  }
  //console.log('rover direction after turning right is: ' + this.rover.direction);
  //console.log('turnRight was called!');
}

function moveForward() {
  switch (rover.direction) {
    case 'N':
      if (rover.y <= 0) {
        console.log('Roam off the map');
        return false;
      } else {
        rover.y -=1; 
      }
    break;
    case 'W':
      if (rover.x <= 0) {
        console.log('Roam off the map');
        return false;
      } else {
        rover.x -=1;
      }
    break;
    case 'S':
      if (rover.y >= 9) {
        console.log('Roam off the map');
        return false;
      } else {
        rover.y +=1;
      }
    break;
    case 'E':
      if (rover.x > 9) {
        console.log('Roam off the map');
        return false;
      } else {
        rover.x +=1;
      }
    break;
  }
  rover.travelLog.push('x:' + rover.x + ' y:' + rover.y);
  //console.log('moveForward was called');
  console.log('rover position is x:' + rover.x + ' y:' + rover.y);
}

function moveBackward() {
  switch(rover.direction) {
    case 'S':
      if (rover.y <= 0) {
        console.log('Roam off the map');
        return false;
      } else {
        rover.y -= 1;
      }
    break;
    case 'E':
      if (rover.x <= 0) {
        console.log('Roam off the map');
        return false;
      } else {
        rover.x -= 1;
      }
    break;
    case 'N':
      if (rover.y >= 9) {
        console.log('Roam off the map');
        return false;
      } else {
        rover.y += 1;
      }
    break;
    case 'W':
      if (rover.x > 9) {
        console.log('Roam off the map');
        return false;
      } else {
        rover.x += 1;
      }
    break;
  }
  rover.travelLog.push('x:' + rover.x + ' y:' + rover.y);
  //console.log('moveBackward was called');
  console.log('rover position is x:' + rover.x + ' y:' + rover.y);
}

function commands(orders) {
  for (var i = 0; i < orders.length && checkPosition(true); i++) {
    if (orders[i] === 'l') {
      turnLeft();
    } else if (orders[i] === 'r') {
      turnRight();
    } else if (orders[i] === 'f') {
      moveForward();
    } else if (orders[i] === 'b') {
      moveBackward();
    } else {
      console.log('Provide some valid orders to move the rover please!');
      return false;
    }
  }
}

function checkPosition() {
  for (let i = rover.x; i < map.length; i++) {
    var row = map[i];
    for (let j = rover.y; j < row.length; j++) {
      var column = row[j];
      if (column === 'X') {
        console.log(i, j, 'BOOM');
        return false;
      } else {
        console.log(i, j, 'Now you are here');
        return true;
      }
    }
  }
}

// Some Testing
// ======================
//turnLeft();
//turnRight();
//moveForward();
//commands('rffrfflfr');
//commands('rffrfflfrffy');
//commands('rffrfflfrffffffffffff');
//commands('rrrbbbfflfffffbbbbbbbb');
//commands('ups');
commands(prompt('enter your orders'));
console.log(rover);