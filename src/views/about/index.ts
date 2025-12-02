export function aboutView(): HTMLElement {
  const section = document.createElement("section");
  section.classList.add("about-view");

  section.innerHTML = `
    <h2>Om Game Hub</h2>
    <p>Game Hub är en liten SPA byggd med Vite + TypeScript.</p>
    <p>Här samlas flera små spel, bl.a. Hangman och Memory från Lovable.</p>
    <p>En del av koden är genererad med AI och sedan anpassad manuellt.</p>
  `;

  return section;
}
