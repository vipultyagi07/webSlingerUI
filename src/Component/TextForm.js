import React, { useState } from 'react';

export default function TextForm() {
  const handleUpCase = () => {
    console.log("text is changed to upper case" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoChange = () => {
    console.log("text is change to lower case " + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleToDelete = ()=> {
    console.log("delete the text present in the area");
    let DeText = text.replace(text,"");
    setText(DeText);
  }

  const handleChangeUp = (evt) => {
    console.log("handle text change");
    setText(evt.target.value);
  }

  const [text, setText] = useState("enter the value ");

  return (
    <>
      <div className="container"></div>
      <div>
        <h1> Enter the text below to analyze </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleChangeUp} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpCase}>Convert into Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLoChange}>convert it into lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleToDelete}>delete all the text present in the text area</button>
      </div>
      <div className="container">
        <p>{text.split(" ").length - 1} Word</p>
        <p>{text.length} character </p>
      </div>
    </>
  );
}