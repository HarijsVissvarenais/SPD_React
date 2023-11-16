import React, { useEffect, useState } from "react";
import Quote from "./Quote";

function QuoteList() {
  const [quoteList, setQuoteList] = useState([]); // Initialize as an empty array

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://dummyjson.com/quotes');
      const data = await response.json();
      setQuoteList(data.quotes); // Set the quotes directly
      console.log(data);
    }
    getData();
  }, []);

  return (
    <>
      {quoteList.map((quote) => (
        <Quote key={quote.id} {...quote} />
      ))}
    </>
  );
}

export default QuoteList;