/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 600;
var vijandY = 0;
var hp = 50;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
  vijandY = vijandY + 7;

  if (vijandY > 720){
    vijandY = 0;
  }
  // kogel

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
  if(spelerX < 0){
    spelerX = 0;
  }
  if(spelerY > 720){
    spelerY = 720;
  }
  if(spelerY < 0){
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
if(vijandX-spelerX>-50&&vijandY-spelerY>-50&&vijandX-spelerX<50&&vijandY-spelerY>50){
  console.log("botsing");
  hp=hp-1;
  console.log(hp);
};
  // botsing kogel tegen vijand

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("lightblue")
  rect(0, 0, 1280, 720);
  // vijand
  fill("gold")
  ellipse(vijandX, vijandY, 50, 50);
  // kogel

  // speler
  fill("purple");
  ellipse(spelerX, spelerY, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
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

  }
}
