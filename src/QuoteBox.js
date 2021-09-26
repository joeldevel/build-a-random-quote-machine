import React, {useState, useEffect} from 'react';

import ActionButton from './ActionButton';
import TwitterLink from './TwitterLink';

const QouteBox = () => {
	const [quotes, setQuotes] = useState(null);
	const [currentQuote, setCurrentQuote] = useState(null);
	const [dataIsReady, setDataIsReady] = useState(false);

	useEffect(()=> {
		fetch("https://type.fit/api/quotes")
		.then(response=>response.json())
		.then(data=>{
			setQuotes(data);
			return data;
		})
		.then((data)=>{
			const randomQuote = data[Math.floor(Math.random()*data.length)];
			setCurrentQuote(randomQuote);
			// getRandomQuote();
		})
		.then(()=> {
			setDataIsReady(true);
			console.log("data is ready ? ", dataIsReady);
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
			{dataIsReady? <p id="text">{currentQuote.text}</p>: "loading"}
			{dataIsReady? <p id="author">{currentQuote.author}</p>: "loading"}
			<ActionButton btnText="new quote" id="new-quote" btnType="button" handleClick={getRandomQuote}/>
			{dataIsReady ? <TwitterLink tweet={currentQuote}/>: "loading"}
		</div> 
		);
}

export default QouteBox;