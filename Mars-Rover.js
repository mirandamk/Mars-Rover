// Rover Object Goes Here

let rover = {
    x:0,
    y:0,
    direction: "N",
    path: [{x:0, y:0}]
    
  };
  
  
  // ======================
  
  function turnLeft(rover){
    let currentDirection = rover.direction;
    switch(rover.direction){
      case "N":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "E"
        break;
      case "E":
        rover.direction = "N"
        break;
    }
        console.log(`turnLeft was called! Rover is facing ${rover.direction}`);
  }
  
  
  function turnRight(rover){
    let currentDirection = rover.direction;
    switch(rover.direction){
      case "N":
        rover.direction = "E";
        break;
      case "W":
        rover.direction = "N";
        break;
      case "S":
        rover.direction = "W"
        break;
      case "E":
        rover.direction = "S"
        break;
    }
    console.log(`turnRight was called! Rover is facing ${rover.direction}`);
  }
  
  function moveForward(rover){
    
    if ((rover.y >= 0 && rover.y <10) && (rover.x >= 0 && rover.x <10)){
    
    switch(rover.direction){
      case "W":
        rover.x--;
        break;
      case "N":
        rover.y--;
        break;
      case "S":
        rover.y++;
        break;
      case "E":
        rover.x++; 
        break;
    }
        console.log(`moveForward was called. The new position is ${rover.x} and ${rover.y}`)
      
      
      let newPosition = {x: rover.x, y: rover.y};
      
      rover.path.push(newPosition);
      
  } else {
    console.log("Rover has moved outside of the field!");
  }
  }
  
  for(let i=0; i<rover.path.lenght; i++){
    console.log(`Path ${i} ==> x=${rover.path[i].x}, y=${rover.path[i].y}`)
  
  }
  function command(rover, orders){
    
    for (let i=0; i<orders.length; i++){
      let order = orders[i];
      switch(order){
        case "f":
          moveForward(rover, order);
          break;
        case "r":
          turnRight(rover, order);
          break;
        case "l":
          turnLeft(rover, order);
          break;
       
      }
    }
    console.log(rover.path);
  }
  
  
  command(rover, "rffrfflfrf");
  
  
  
  
  