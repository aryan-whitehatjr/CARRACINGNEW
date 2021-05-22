class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state

    });
  }

  start() {
    if (gameState === 0) {
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1 = createSprite(100, 200);
    car1.addImage("c1", c1)
    car2 = createSprite(300, 200);
    car2.addImage("c2", c2)
    car3 = createSprite(500, 200);
    car3.addImage("c3", c3)
    car4 = createSprite(700, 200);
    car4.addImage("c4", c4)
    cars = [car1, car2, car3, car4]
    passedFinish = false;

  }
  play() {
    form.hide();
    Player.getPlayerInfo();
    if (allPlayers !== undefined) {
      // var display_position = 130;
      var index = 0;
      background(rgb(198, 135, 103))
      image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 5)
      var x = 175;
      var y;
      for (var plr in allPlayers) {
        index += 1;
        x += 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;

        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60)
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth / 2;
          camera.position.y = cars[index - 1].y;

        }
        else {
          fill("black");
        }
        textAlign(CENTER);
        textSize(20);
        text(allPlayers[plr].name, cars[index - 1].x, cars[index - 1].y + 75)
      }
    }
    if (keyIsDown(UP_ARROW) && player.index !== null && passedFinish !== true) {
      player.distance += 50
      player.update()
    }
    if (player.distance > 400 && passedFinish === false) {
      Player.updatefinishedPlayers();
      player.rank = finishedPlayers;
      player.update();
      passedFinish = true;
    }

    drawSprites();
  }
  displayRanks() {
    camera.position.x = 0;
    camera.position.y = 0;
    imageMode(CENTER);
    Player.getPlayerInfo();
    image(b, displayWidth / -4, -100 + displayHeight / 9, 200, 240);
    image(s, displayWidth / 4, -100 + displayHeight / 10, 225, 270)
    image(go, 0, -100, 250, 300);
  textAlign(CENTER)
  textSize(50);
  for(var plr in allPlayers)
  {
    if(allPlayers[plr].rank===1){
      text("Winner! "+allpLayers[plr].name,0,85);
    }
    else if(allPlayers[plr].rank===2){
      text("Runnerup! "+allpLayers[plr].name,displayWidth/4,displayHeight/9+73);
    }
    else if(allPlayers[plr].rank===3){
      text("2 nd Runnerup!"+allpLayers[plr].name,displayWidth/-4,displayHeight/10+76);
    }
    else{
      text("Try again!"+allpLayers[plr].name,0,225);
      link=createA("../images/mo.png","click here to get some motivation","_self")
      link.position(0,300);

    }
  }






  }
}