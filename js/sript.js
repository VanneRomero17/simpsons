const requestOptions = {
  method: "GET",
  redirect: "follow"
};

const simpsonsContainer = document.getElementById("simpsons");

fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=30", requestOptions)
  .then((response) => response.json())
  .then((result) => displayCharacters(result))
  .catch((error) => console.error(error));

function displayCharacters(characters) {
  const charactersHTML = characters.map(character => `
    <div class="container">
      <div class="card">
        <div class="card__inner">
          <div class="card__front">
            <img class="card__img" src="${character.image}" alt="Imagen del personaje">
          </div>
          <div class="card__back">
            <p class="name">${character.character}</p>
            <p class="quote">${character.quote}</p>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  simpsonsContainer.innerHTML = charactersHTML;
}


