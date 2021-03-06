const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* ctx.font = "48px sans-serif";
ctx.fillStyle = "black";
ctx.fillText("Click enter", 400, 50);
ctx.fillText("Click space to restart", 400, 100); */

//fazer loop para passar para outro objeto
let words = [
  {
    answer: "mind",
    hint: "./docs/assets/images/hint1.png",
    sentence: "Hey, ironhacker! What's on your",
  },
  {
    answer: "alone",
    hint: "./docs/assets/images/hint2.png",
    sentence: " || Don't code all ",
  },
  {
    answer: "parties",
    hint: "./docs/assets/images/hint3-removebg-preview.png",
    sentence: " || We know you are missing the summer and the ",
  },
  {
    answer: "lisbon",
    hint: "./docs/assets/images/hint4.png",
    sentence: " || Are you enjoying the beautiful ",
  },
  {
    answer: "around",
    hint: "./docs/assets/images/hint5.png",
    sentence: " || Now that you have learned javascript there is no turn ",
  },
];

let game = new Game(words, ctx);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !game.isRunning) {
    game.start();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Space" && game.isRunning) {
    game.restart();
  }
});

window.addEventListener("keydown", (e) => {
  if (game && game.isRunning) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      if (game.currentAnswer.indexOf(e.key.toString()) >= 0) {
        game.currentAnswer.splice(game.currentAnswer.indexOf(e.key), 1);
        game.acertos++;
        game.tentativas.push(e.key);
      } else {
        game.errors++;
        game.tentativas.push(e.key);
      }
    }
  }
});
