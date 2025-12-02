import { createGameCard } from "../../components/gameCard";
import { fetchRandomQuote } from "../../api/quote";

export function homeView(
  onNavigate: (view: "hangman" | "memory") => void,
  stats: { hangmanOpens: number; memoryOpens: number }
): HTMLElement {
  const main = document.createElement("main");

  const quoteEl = document.createElement("p");
  quoteEl.textContent = "Hämtar dagens quote…";

  fetchRandomQuote()
    .then((quote) => {
      quoteEl.textContent = `"${quote.content}" — ${quote.author}`;
    })
    .catch(() => {
      quoteEl.textContent = "Kunde inte hämta quote just nu.";
    });

  const title = document.createElement("h2");
  title.textContent = "Välj ett spel";

  const statsText = document.createElement("p");
  statsText.textContent = `Du har öppnat Hangman ${stats.hangmanOpens} gånger och Memory ${stats.memoryOpens} gånger.`;

  const wrapper = document.createElement("div");
  wrapper.classList.add("game-wrapper");

  const hangmanCard = createGameCard("Hangman", "Gissa ordet innan du dör 😈");
  hangmanCard.addEventListener("click", () => onNavigate("hangman"));

  const memoryCard = createGameCard(
    "Memory",
    "Testa ditt minne i tre svårighetsgrader"
  );
  memoryCard.addEventListener("click", () => onNavigate("memory"));

  wrapper.append(hangmanCard, memoryCard);

  // 👇 Här är rätt ordning!
  main.append(title, statsText, quoteEl, wrapper);

  return main;
}
