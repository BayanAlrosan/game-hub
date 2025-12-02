export function hangmanView(): HTMLElement {
  const section = document.createElement("section");
  section.classList.add("hangman-view");

  const title = document.createElement("h2");
  title.textContent = "Hangman";

  const info = document.createElement("p");
  info.textContent =
    "Detta är Hangman-spelet från Lovable inbäddat i Game Hub.";

  const iframe = document.createElement("iframe");
  iframe.src = "https://hangman-for-game-hub.lovable.app/";
  iframe.width = "100%";
  iframe.height = "600";
  iframe.style.border = "none";

  section.append(title, info, iframe);

  return section;
}
