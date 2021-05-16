let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();


  // Do all of your work inside the document.addEventListener

  // Part 1
  const redoTitle  = function () {
    document.getElementById('main-title').innerHTML = 'DOM\'s Beats';
  };

  redoTitle();

  // Part 2
  const changeBackgroundColor = function () {
    document.querySelector('body').style.backgroundColor = 'pink';
  };

  changeBackgroundColor();

  // Part 3
  const domsFavoriteThings = function() {
    const listBoy = document.getElementById('favorite-things');
    listBoy.removeChild(listBoy.lastElementChild)
  }
  domsFavoriteThings()

  // Part 4
  const special = function() {
    const specialTitle = document.querySelectorAll('special-title');
    for (let title of specialTitle) {
      title.style.fontSize = '2rem';
    }
  }

  special();

  // Part 5
  const past = function() {
    const pastList = document.getElementById('past-races');
    pastList.removeChild(pastList.children[3]);
  };

  past();

  // Part 6
  const addRace = function() {
    const newRace = document.createElement('li');
    const pastRaces = document.querySelector('#past-races');
    newRace.innerHTML = 'Seattle';
    pastRaces.append(newRace);
  }

  addRace();

  // Part 7
  const newPost = function(title, subtitle) {
    const blogPosts = document.querySelector('.main');

    const newDiv = document.createElement('div');
    newDiv.classList.add('blog-post');
    newDiv.classList.add('purple');

    const newTitle = document.createElement('h1');
    newTitle.innerHTML = title;

    const newSubTitle = document.createElement('p');
    newSubTitle.innerHTML = subtitle;

    newDiv.append(newTitle);
    newDiv.append(newSubTitle);

    console.log(newDiv);
    console.log(blogPosts);
    blogPosts.insertAdjacentElement('beforeend',newDiv);
  }

  newPost('Seattle', 'THIS RACE WAS THE BOMB!');

  // Part 8
  document.getElementById('quote-title').addEventListener('click', (e) => {
    randomQuote();
  });

  // Part 9
  const blogPosts = document.querySelectorAll('.blog-post');

  blogPosts.forEach(function(item) {
    item.addEventListener('mouseenter', (e) => {
      item.classList.toggle("red");
      // item.classList.toggle("purple");
    });

    item.addEventListener('mouseout', (e) => {
      item.classList.toggle("red");
      // item.classList.toggle("purple");
    });
  });



});
