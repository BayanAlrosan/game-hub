export type Quote = {
  content: string;
  author: string;
};
export async function fetchRandomQuote(): Promise<Quote> {
  const res = await fetch("https://api.adviceslip.com/advice");
  if (!res.ok) {
    throw new Error("Failed to fetch quote");
  }
  const data = await res.json();
  return {
    content: data.slip.advice,
    author: "Okänd",
  };
}
 