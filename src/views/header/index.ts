export function headerView(
  onNavigate: (view: "home" | "hangman" | "memory" | "about") => void
): HTMLElement {
  const header = document.createElement("header");

  header.innerHTML = `
    <h1>Game Hub</h1>
    <nav>
      <button data-view="home">Home</button>
      <button data-view="hangman">Hangman</button>
      <button data-view="memory">Memory</button>
      <button data-view="about">About</button>
    </nav>
  `;

  header
    .querySelectorAll<HTMLButtonElement>("button[data-view]")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        const view = btn.dataset.view as
          | "home"
          | "hangman"
          | "memory"
          | "about";
        onNavigate(view);
      });
    });

  return header;
}
