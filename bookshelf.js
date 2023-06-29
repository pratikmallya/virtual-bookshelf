import booksMap from "./books.json";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let spines = Object.values(document.getElementsByClassName("spine"));
let covers = Object.values(document.getElementsByClassName("cover"));
let tops = Object.values(document.getElementsByClassName("top"));

let availablePatterns = ["argyle", "tartan"]; // we could probably get these programatically
let availableColours = [
  "maroon",
  "darkgreen",
  "darkolivegreen",
  "brown",
  "saddlebrown",
  "sienna",
  "midnightblue",
];

// assign a random height, pattern and colour to each book
spines.map(function (s, i) {
  let randomHeight = getRandomInt(220, 290);
  s.style.height = `${randomHeight}px`;
  s.style.top = `${280 - randomHeight}px`;

  let randomPattern = randomChoice(availablePatterns);
  s.style.backgroundImage = `var(--${randomPattern})`;

  let randomColor = randomChoice(availableColours);
  s.style.backgroundColor = randomColor;

  covers[i].style.height = `${randomHeight}px`;
  covers[i].style.top = `${280 - randomHeight}px`;

  tops[i].style.top = `${280 - randomHeight}px`;
});

function generateBooks(isbn) {

}

for (year in booksMap) {

}

<div style="margin-top: 32px;" >
  <h2>2017</h2>

  <body>
    <div class="bookshelf">
      <div class="book">
        <div class="side spine">
          <span class="spine-title"> The Origins of Political Order</span>
          <span class="spine-author"> FF </span>
        </div>
        <div class="side top"></div>
        <div class="side cover"
          onclick="location.href='https://www.goodreads.com/en/book/show/9704856-the-origins-of-political-order'"
          style="background-image: url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1317064084l/9704856.jpg)">
        </div>
      </div>
      <div class="book">
        <div class="side spine">
          <span class="spine-title"> Vodka Politics</span>
          <span class="spine-author"> MLS </span>
        </div>
        <div class="side top"></div>
        <div class="side cover" onclick="location.href='https://www.goodreads.com/book/show/17847507-vodka-politics'"
          style="background-image: url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373997133l/17847507.jpg)">
        </div>
      </div>
    </div>
    <hr>
  </body>
</div >
