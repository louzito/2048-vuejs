<template>
  <div id="app">
    <h1>Bienvenue sur le jeu du 2048</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.jeu {text-align: center;}
#board-game {display: inline-block;padding: 30px;margin: 20px auto;background:#000000}
#board-game .board-line {font-size: 0;display:inline-block;vertical-align: top;}
#board-game .board-tile {display: block;width: 100px;height: 100px;line-height: 100px;font-size: 50px;color: #000;font-weight: bold;background: #FFF;border: 1px solid lightgrey;border-radius: 5px;text-align: center;margin: 2px;}
#board-game .board-tile.bt2 {background: #E1E6FA;}
#board-game .board-tile.bt4 {background: #C4D7ED;}
#board-game .board-tile.bt8 {background: #ABC8E2;}
#board-game .board-tile.bt16 {background: #96B0C7;}
#board-game .board-tile.bt32 {background: #60A2E0;}
#board-game .board-tile.bt64 {background: #528ABF;}
#board-game .board-tile.bt128 {background: #4D83B5;}
#board-game .board-tile.bt256 {background: #375D81;color: #FFF;}
#board-game .board-tile.bt512 {background: #2A4863;color: #FFF;}
#board-game .board-tile.bt1024 {background: #183152;color: #FFF;}
#board-game .board-tile.bt2048 {background: #0F1E33;color: #FFF;}
#board-game .board-tile.bt4096 {background: #08111C;color: #FFF;}
#header-game .info-game, #header-game .refresh-btn { display: inline-block; vertical-align: top; }
#header-game .refresh-btn { background: #000; color: #FFF; font-weight: bold; text-transform: uppercase; padding: 10px; margin-left:  50px; cursor: pointer;}
.game-over-form {
  width: 400px;
  padding: 30px;
  background: #000;
  margin: 70px auto;
  color: #FFF;
}
.game-over-form button {
  display: block;
  margin: 10px auto;
  height: 40px;
  width: 250px;
  text-transform: uppercase;
  font-weight: bold;
  background: #528ABF;
  color: #FFF;
  border: 0;
  cursor: pointer;
}
</style>
