class Player {
  constructor() {
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
  }

  getCount() {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    })
  }

  updateCount(count) {
    console.log(" i am from player updateCount "+count )
    database.ref('/').update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance,
      rank: this.rank
    });
  }
  getFinishedPlayers() {
    console.log(" im from get")
    var finishedPlayersRef = databse.ref("finishedPlayers");
    finishedPlayersRef.on("value", (data) => {
      finishedPlayers = data.val();
    });
  }
  static updatefinishedPlayers() {
    console.log("i am from update")
    database.ref('/').update({
      finishedPlayers: finishedPlayers + 1
    });
    this.rank += 1;
  }

  static getPlayerInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val()
    });
  }
}
