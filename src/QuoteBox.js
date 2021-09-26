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
			// getRandomQuote();
		})
		.catch(e=>console.log(e));

	}, []);

	// useEffect(()=>{
	// 	getRandomQuote()
	// },[quotes])

	const getRandomQuote = () => {
		const q = quotes[Math.floor(Math.random()*quotes.length)];
		setCurrentQuote(q);
	}
	return (

		<div className="" id="quote-box" 
			style={{border: "1px dotted purple",margin: 10 }}>
			<h1>qoutes here</h1>
			<p id="text">{currentQuote? currentQuote.text:
				quotes? quotes[0].text: 
				"loading"}</p>
			<p id="author">author here</p>
			<ActionButton btnText="new qoute" id="new-quote" btnType="button" handleClick={getRandomQuote}/>
			<ActionButton btnText="tweet qoute" id="tweet-quote" btnType="button"/>
		</div>
		);
}

export default QouteBox;