window.onload = function() {
  const gamesList = document.querySelector('.games-list');
  const gamePlayer = document.getElementById('game-player');
  const gameLibrary = document.getElementById('game-library');
  const gameTitle = document.getElementById('game-title');
  const gameContainer = document.getElementById('game-container');
  const backBtn = document.getElementById('back-to-library');

  // Render game cards
  games.forEach((game, idx) => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <img src="${game.thumbnail}" alt="${game.title}" width="48" height="48" style="margin-bottom:1rem;border-radius:8px;">
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <button>Play</button>
    `;
    card.querySelector('button').onclick = () => {
      gameLibrary.style.display = 'none';
      gamePlayer.style.display = 'block';
      gameTitle.innerText = game.title;
      gameContainer.innerHTML = game.embed;
    }
    gamesList.appendChild(card);
  });

  // Back button
  backBtn.onclick = () => {
    gamePlayer.style.display = 'none';
    gameLibrary.style.display = 'block';
    gameContainer.innerHTML = '';
    gameTitle.innerText = '';
  };
};
