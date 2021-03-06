/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPACE = 32;

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600;
var kogelX = 600;
var kogelY = 500; // y-positie van speler
var vijandX = [100, 200, 400, 610, 700, 770, 950, 1050];
var vijandY = 0;
var vijandYarray = [0, 0, 0, 0, 0, 0, 0, 0];
var hp = 50;
var punten = 0;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
  vijandY = vijandY + 7;
  kogelY = kogelY - 7;

  if (vijandY > 720) {
    vijandY = 0;
  };


  // kogel
  if (keyIsDown(SPACE)) {
    kogelX = spelerX;
    kogelY = spelerY - 50;
  };

  // speler
  if (keyIsDown(RIGHT_ARROW)) {
    spelerX = spelerX + 7;
  }
  if (keyIsDown(LEFT_ARROW)) {
    spelerX = spelerX - 7;
  }
  if (keyIsDown(UP_ARROW)) {
    spelerY = spelerY - 7;
  }
  if (keyIsDown(DOWN_ARROW)) {
    spelerY = spelerY + 7;
  }

  // beperk begweging tot rand
  if (spelerX > 1280) {
    spelerX = 1280;
  }
  if (spelerX < 0) {
    spelerX = 0;
  }
  if (spelerY > 720) {
    spelerY = 720;
  }
  if (spelerY < 0) {
    spelerY = 0;
  }
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
  for (var i = 0; i < 8; i = i + 1) {
    if (vijandX[i] - spelerX > -50 && vijandY - spelerY > -50 && vijandX[i] - spelerX < 50 && vijandY - spelerY < 50) {
      console.log("botsing");
      hp = hp - 1;
      console.log(hp);
    };
  };
  for (var i = 0; i < 8; i = i + 1) {
    if (vijandX[i] - kogelX > -50 &&
      vijandY      - kogelY > -50 &&
      vijandX[i]   - kogelX < 50 &&
      vijandY      - kogelY < 50) {
      console.log("botsingkogel");
    };
  };

};


/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("turquoise")
  rect(0, 0, 1280, 720);
  // vijand
  fill("gold")
  for (var i = 0; i < 8; i = i + 1) {
    ellipse(vijandX[i], vijandY, 50, 50);
  }
  // kogel
  fill("purple");
  ellipse(kogelX, kogelY, 50, 50);

  // speler
  fill("violet");
  ellipse(spelerX, spelerY, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en health
  textSize(50);
  text(hp, spelerX - 100, spelerY);

  textSize(100);
  punten = punten + 1 / 50
  text('punten: \n' + floor(punten), 20, 100);

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (hp == 0) {
    return true
  };
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt ????n keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('lightblue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    background("black");
    textSize(160);
    fill("red");
    text('GAMEOVER', 200, 400);
    textSize(70);
    fill("white");
    text('score:' + floor(punten), 350, 520);


  }
}
