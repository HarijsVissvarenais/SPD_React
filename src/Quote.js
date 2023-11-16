import QuoteList from "./QuoteList";


function Quote(props) {

    return (
        <>
        <article>

    <h2>{props.author}</h2>
    <p>{props.quote}</p>
    
    </article>
        </>
    );
}
export default Quote;