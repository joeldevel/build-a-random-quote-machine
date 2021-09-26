import React, {useState, useEffect} from 'react';

import ActionButton from './ActionButton';


const QouteBox = () => {
	const [quotes, setQuotes] = useState(null);
	const [currentQuote, setCurrentQuote] = useState(null);

	useEffect(()=> {
		fetch("https://type.fit/api/quotes")
		.then(response=>response.json())
		.then(data=>{
			setQuotes(data);
		})
		.catch(e=>console.log(e));

	}, []);

	const getRandomQuote = () => {
		const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
		setCurrentQuote(randomQuote);
	}

	const tweetQuote = () => {
		console.log("tweetig quote: ", currentQuote);
	}
	return (

		<div className="" id="quote-box" 
			style={{border: "1px dotted purple",margin: 10 }}>
			<h1>qoutes here</h1>
			<p id="text">{currentQuote? currentQuote.text:
				quotes? setCurrentQuote(quotes[0]): 
				"loading"}</p>
			<p id="author">{currentQuote? currentQuote.author: "loading"}</p>
			<ActionButton btnText="new qoute" id="new-quote" btnType="button" handleClick={getRandomQuote}/>
			<ActionButton btnText="tweet qoute" id="tweet-quote" btnType="button" handleClick={tweetQuote}/>
		</div>
		);
}

export default QouteBox;