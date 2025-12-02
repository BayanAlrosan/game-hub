export function createGameCard(
  title: string,
  description: string
): HTMLElement {
  const card = document.createElement("article");
  card.classList.add("game-card");

  card.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
  `;

  return card;
}
