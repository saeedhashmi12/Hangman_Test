import React from 'react';
import PropTypes from 'prop-types';
import './HangmanKeyboard.css';

const firstRow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
const secondRow =["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 const RenderRow =({char, onClick, isDisabled}) => {
 	return(
 		<button 
 		 onClick={()=>{
 		 onClick(char);
 		}} 
 		disabled={isDisabled}>{char}</button>
 		)
 }

 const HangmanRow = ({row, onClick, guessWord}) => {
	return(
		<div>
			{row.map((char, key) =>{
			 let isDisabled = guessWord.indexOf(char)>-1?true: false;
			return(
			  <RenderRow 
				key={key}
				char={char} 
				onClick={onClick}
				isDisabled={isDisabled}
				/>)
			}
			  
			)}
		</div>
	)

}
export const HangmanKeyboard = ({onClick, guessWord})=> {
	return(
	  <div className='hangman-keyboard'>
	  		{[firstRow, secondRow].map((row, ind)=> 
	  			<HangmanRow 
	  			key={ind} 
	  			row={row}
	  			onClick={onClick}
	  			guessWord={guessWord} />
	  		   )}
	  	</div>
	  	);
}
HangmanKeyboard.propTypes = {
	onClick: PropTypes.func.isRequired,
	guessWord: PropTypes.array
  };