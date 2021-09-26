import React from 'react';

const ActionButton = (props) => {
	return (
		<button type={props.btnType} id={props.id}>{props.btnText}</button>
		);
}

export default ActionButton;