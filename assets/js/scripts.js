let char = new Knight("Nícolas");
let monster = new LittleMonster();

const stage = new Stage(
  char,
  monster,
  document.getElementById("hero"),
  document.getElementById("enemy"),
);

stage.start();
