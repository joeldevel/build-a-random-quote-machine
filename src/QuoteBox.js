import React, {useState, useEffect} from 'react';

import ActionButton from './ActionButton';
import TwitterLink from './TwitterLink';

const QouteBox = () => {
	const [quotes, setQuotes] = useState(null);
	const [currentQuote, setCurrentQuote] = useState(null);

	useEffect(()=> {
		fetch("https://type.fit/api/quotes")
		.then(response=>response.json())
		.then(data=>{
			setQuotes(data);
		})
		.then(()=>{
			getRandomQuote();
		})
		.catch(e=>console.log(e));

	}, []);

	const getRandomQuote = () => {
		const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
		setCurrentQuote(randomQuote);
	}

	return (
		 
		<div className="quote-box" id="quote-box">
			<h1></h1>
			{currentQuote? <p id="text">{currentQuote.text}</p>: "loading"}
			{currentQuote? <p id="author">{currentQuote.author}</p>: "loading"}
			<ActionButton btnText="new quote" id="new-quote" btnType="button" handleClick={getRandomQuote}/>
			{currentQuote ? <TwitterLink tweet={currentQuote}/>: "loading"}
		</div> 
		);
}

export default QouteBox;