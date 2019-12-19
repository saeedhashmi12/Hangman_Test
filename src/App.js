import React, {  useEffect, useState } from 'react';
import { Hangman, HangmanKeyboard, RevealedLetters } from './components';

import words from './words';

import './App.css';

const App = () => {
	const [word, getRandomWord] = useState();
	let [count, setCount] = useState(0);
	let [guessWord, setGuessWord] = useState([]);
	const [lose, isLose] = useState(false);
	let [str, setStr] = useState('')
	const [won, isWon] = useState(false);

	useEffect(() => {
		const letter = words[Math.floor(Math.random() * words.length)];
		getRandomWord(letter);
	}, []);
	const onClick = (char) => {
		 if (word.toLowerCase().indexOf(char) > -1) {
		}else{
			if(!won){
				count++;
			}				
		}
			
		if (count >= 10) {
			count = 10;
		}
		let over = (count === 10);
		setCount(count)
		setStr(char);
		isLose(over)
		let wordArr = guessWord;
		
		if(!lose && !won){
		wordArr.push(char);
		setGuessWord(wordArr);
		}
		console.log(word, '48::', str);
	}
	const startNewGame = () => {
		isLose(false);
		isWon(false);
		setGuessWord([]);
		setCount(0);
		const letter = words[Math.floor(Math.random() * words.length)];
		getRandomWord(letter);
	}
	const arr = [];
	const ListItem = (char) => {
		let chars = guessWord.indexOf(char) > -1 ? char : '';
		arr.push(chars);
		let isWin = arr.join('') === word.toLowerCase();
		isWon(isWin)
		return chars;
	}
	const modalTitle = lose? 'Game Over':won? 'You Won': ''
	
  return (
    <div className="App">
      <div className="container">
        <h1> React Hangman <span>you have left: {count - 10}</span> </h1>

      	  <Hangman incorrectGuessCount={count} />

      	  {(lose || won ) && 
      	  	<div className="modal">
      	  	<div className="modeldiv">
        	 <h1>{modalTitle}</h1>
        	<button className="game-btn" onClick={startNewGame} >Start NewGame</button>
        	</div>
          </div>
      }

        <RevealedLetters 
          word={word}			
		  renderItem={(char) => ListItem(char)}
		 
		 />
        <HangmanKeyboard
         onClick={onClick}
         guessWord={guessWord} 
         />
      </div>
    </div>
  );
};

export default App;
