class Quotes {
  constructor() {
    this.url = "http://quotes.stormconsultancy.co.uk/random.json";
  }

  const response = fetch(this.url).then((response) => {
    return response.json();
  });

  const quote = response.quote;
  const author = response.author;

  return {
    quote,
    author
  }  
}