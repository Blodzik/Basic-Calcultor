const tilesContainer = document.querySelector(".tiles");
const result = document.querySelector('.result');
const container = document.querySelector('.container');
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorsPicklist = [...colors, ...colors];
const tileCount = colorsPicklist.length;
let score = 0;

// Game state
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color) {
	const element = document.createElement("div");

	element.classList.add("tile");
	element.setAttribute("data-color", color);
	element.setAttribute("data-revealed", "false");

	element.addEventListener("click", () => {
		const revealed = element.getAttribute("data-revealed");

		if (
			awaitingEndOfMove
			|| revealed === "true"
			|| element == activeTile
		) {
			return;
		}

		// Reveal this color
		element.style.backgroundColor = color;

		if (!activeTile) {
			activeTile = element;

			return;
		}

		const colorToMatch = activeTile.getAttribute("data-color");

		if (colorToMatch === color) {
			element.setAttribute("data-revealed", "true");
			activeTile.setAttribute("data-revealed", "true");

			activeTile = null;
			awaitingEndOfMove = false;
			revealedCount += 2;
            score++;
            result.innerHTML = `Score: ${score}`;

			if (revealedCount === tileCount) {
				result.innerHTML = 'You win!'
                const restartBtn = document.createElement('button');
                restartBtn.classList.add('restartBtn');
                restartBtn.textContent = 'Restart Game';

                restartBtn.addEventListener('click', () => {
                    revealedCount = 0;
                    activeTile = null;
                    awaitingEndOfMove = false;

                    result.innerHTML = '';

                    tilesContainer.innerHTML = '';
                    container.removeChild(restartBtn);

                    buildTiles();

                    score = 0;
                    result.innerHTML = `Score: ${score}`;
                    
                });

                container.appendChild(restartBtn);
			}

			return;
		}

		awaitingEndOfMove = true;

		setTimeout(() => {
            activeTile.style.backgroundColor = null;
            element.style.backgroundColor = null;
    
            awaitingEndOfMove = false;
            activeTile = null;
        }, 1000);
	});

	return element;
}

// Build up tiles
function buildTiles () {
    for (let i = 0; i < tileCount; i++) {
        const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
        const color = colorsPicklist[randomIndex];
        const tile = buildTile(color);
    
        colorsPicklist.splice(randomIndex, 1);
        tilesContainer.appendChild(tile);
    }
};

buildTiles();
