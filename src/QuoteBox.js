import React from 'react';

import ActionButton from './ActionButton';


const QouteBox = () => {

	return (

		<div className="" id="quote-box" 
			style={{border: "1px dotted purple",margin: 10 }}>
			<h1>qoutes here</h1>
			<p id="text">text here</p>
			<p id="author">author here</p>
			<ActionButton btnText="new qoute" id="new-quote" btnType="button"/>
			<ActionButton btnText="tweet qoute" id="tweet-quote" btnType="button"/>
		</div>
		);
}

export default QouteBox;