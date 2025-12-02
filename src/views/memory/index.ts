export function memoryView(): HTMLElement {
  const section = document.createElement("section");
  section.classList.add("memory-view");

  const title = document.createElement("h2");
  title.textContent = "Memory";

  const info = document.createElement("p");
  info.textContent = "Detta är Memory-spelet från Lovable inbäddat i Game Hub.";

  const iframe = document.createElement("iframe");
  // 👇 BYT DENNA URL till ditt Memory-spels-länk från Lovable
  iframe.src = "https://DIN-MEMORY-URL-HÄR.lovable.app/";
  iframe.width = "100%";
  iframe.height = "600";
  iframe.style.border = "none";

  section.append(title, info, iframe);

  return section;
}
