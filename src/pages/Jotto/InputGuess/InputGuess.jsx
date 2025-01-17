import { useState } from "react";
import "../Jotto.css"

import './InputGuess.css';
export default function InputGuess({
  secret,
  setPlay,
  guessWords,
  setGuessWords
}) {
  const [formData, setFormData] = useState();

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleChange(evt) {
    if (evt.target.value.length < 5) {
      setFormData(evt.target.value);
    } else {
      checkWord(evt);
    }
  }

  function checkWord(evt) {
    let newWord = evt.target.value;
    newWord = newWord.toUpperCase();
    // Make sure that the new Word is in the dictionary.
    if (true) {
      setGuessWords([...guessWords, newWord]);
      setFormData("");
    }
    if (newWord === secret) {
      setPlay(false);
    }
  }

  return (
    <div className="inputWordDiv">
      <form className="inputWordForm" autoComplete="off" onSubmit={handleSubmit}>
        <input
          className="guessInput"
          placeholder="New 5 letter Word"
          value={formData}
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
}
