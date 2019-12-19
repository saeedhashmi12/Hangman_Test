import React from 'react';
import PropTypes from 'prop-types';
import './RevealedLetters.css'

const RenderSlot = ({ char, renderItem }) => {
	let classNames = ['word-slot'];
	return (
		<div
			className={classNames.join(' ')}>
			{renderItem(char)}
		</div>
	)

}

export const RevealedLetters = ({word, renderItem})=> {
	return (
		<div className='word-slots'>
			{word && word.split('').map((char, key) =>
				<RenderSlot
					key={key}
					char={char.toLowerCase()}
					renderItem={renderItem} 
					/>)}
		</div>
	)
}

RevealedLetters.propTypes = {
	word: PropTypes.string,
	renderItem: PropTypes.func.isRequired
  };