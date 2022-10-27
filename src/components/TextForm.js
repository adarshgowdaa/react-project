import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");
  const handelUpClick = () => {
    let upperCase = text.toUpperCase();
    settext(upperCase);
  };
  const handelOnChange = (event) => {
    settext(event.target.value);
  };
  const handelLowClick = () => {
    let lowercase = text.toLowerCase();
    settext(lowercase);
  };
  const handelClearClick = () => {
    settext("");
  };
  const handelRemoveClick = () => {
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const capitalize = () => {
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const updatedText = arr.join(" ");
    settext(updatedText);
  };

  const copy = (e) => {
    navigator.clipboard.writeText(text);
  };


  return (
    <div className="container">
      <h1 className="my-4">{props.title}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          placeholder="Start Typing..."
          value={text}
          onChange={handelOnChange}
        />
        <button className="btn btn-dark mx-1 my-2" onClick={handelUpClick}>
          Uppercase
        </button>
        <button className="btn btn-dark mx-1 my-2" onClick={handelLowClick}>
          Lowercase
        </button>
        <button className="btn btn-dark mx-1 my-2" onClick={capitalize}>
          Capitalize
        </button>
        <button className="btn btn-dark mx-1 my-2" onClick={handelRemoveClick}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-dark mx-1 my-2" onClick={speak}>
          Speak Text
        </button>
        <button className="btn btn-dark mx-1 my-2" onClick={copy}>
          Copy
        </button>
        <button className="btn btn-dark mx-1 my-2" onClick={handelClearClick}>
          Clear Text
        </button>
        <h1 className="my-3">Text Analysis</h1>
        <div className="container">
        <p>Words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
        <br />
        Characters: {text.length}
        <br />
        Read Time: {Math.ceil(0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} Min.
        </p>
        </div>
      </div>
    </div>
  );
}
