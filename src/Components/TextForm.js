import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const [text, setText] = useState("Enter the text");

  return (
    <>
    <div className="container">
      <div className="mb-3">
          <label htmlFor="myBox" className="form-label"><b>Input your text</b></label>
          <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="8" value={text}></textarea>
      </div>
      <div className="btn">
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary" onClick={handleLoClick}>Convert to LowerCase</button>
      </div>
    </div>
    <div className="container">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} Words {text.length} Characters</p>
    </div>
    </>
  )
}
