class Quotes {
  constructor() {
    this.url = "http://quotes.stormconsultancy.co.uk/random.json";
  };

  async getQuote (){
    const res = await fetch(this.url);


  });

  let quote = res.quote;
  let author = res.author;

  return {
    quote,
    author
  }  
}
}