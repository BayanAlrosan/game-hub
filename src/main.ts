import "./style.css";
import { headerView } from "./views/header";
import { homeView } from "./views/home";
import { hangmanView } from "./views/hangman";
import { memoryView } from "./views/memory";
import { aboutView } from "./views/about";

// vilken sida som är aktiv (state)
type ViewName = "home" | "hangman" | "memory" | "about";

type AppState = {
  currentView: ViewName;
  hangmanOpens: number;
  memoryOpens: number;
};

const state: AppState = {
  currentView: "home",
  hangmanOpens: 0,
  memoryOpens: 0,
};

const app = document.querySelector<HTMLDivElement>("#app")!;

// ändra vilken sida som ska visas
function setView(view: ViewName) {
  state.currentView = view;

  if (view === "hangman") {
    state.hangmanOpens++;
  } else if (view === "memory") {
    state.memoryOpens++;
  }

  renderApp();
}

// rendera hela appen
function renderApp() {
  app.innerHTML = ""; // tömmer allt

  // Header med navigation
  app.append(headerView(setView));

  // Visa rätt view
  if (state.currentView === "home") {
    app.append(
      homeView((view) => setView(view), {
        hangmanOpens: state.hangmanOpens,
        memoryOpens: state.memoryOpens,
      })
    );
  } else if (state.currentView === "hangman") {
    app.append(hangmanView());
  } else if (state.currentView === "memory") {
    app.append(memoryView());
  } else if (state.currentView === "about") {
    app.append(aboutView());
  }
}

// första renderingen
renderApp();
