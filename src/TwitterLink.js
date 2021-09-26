import React from 'react';

const TwitterLink = (props) => {
	const formatedQuote = props.tweet.text;
	formatedQuote.replaceAll(" ", "%20");

	return (
		<a href={`https://twitter.com/intent/tweet?text=${formatedQuote}`}
			id="tweet-quote"
			target="_blank"
			rel="noreferrer"
		>
			Tweet quote
		</a>
		)
}

export default TwitterLink;