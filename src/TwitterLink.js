import React from 'react';

const TwitterLink = (props) => {
	return (
		<a href={`https://twitter.com/intent/tweet/${props.tweet.text}`}
			id="tweet-quote"
		>
			Tweet quote
		</a>
		)
}

export default TwitterLink;