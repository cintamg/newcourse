import React,{useState} from 'react'

export default function TextForm(props) {

  const [cboxText,setCboxTect] = useState("Enable dark mode");

  const [isChecked,setIsChecked] = useState({
    color : "white",
    backgroundColor : "black"
  })

  const handleChange = () => {
    if(isChecked.color == "white"){
      setIsChecked({
        color : "black",
        backgroundColor : "white"
      })
      setCboxTect("Enable dark mode");
    }
    else{
      setIsChecked({
        color : "white",
        backgroundColor : "black"
      })
      setCboxTect("Enable light mode");
    }
  }

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

  const handleClrClick = () => {
    let newText = "";
    setText(newText);
  }

  const [text, setText] = useState("");

  return (
  <div className="container"  style={isChecked}>
      <div className="container">
      <div className="mb-3">
          <label htmlFor="myBox" className="form-label"><b>Input your text</b></label>
          <textarea className="form-control" onChange={handleOnChange} placeholder='Enter your text' id="myBox" rows="8" value={text}></textarea>
      </div>
      <div className="btn">
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
          <button className="btn btn-primary" onClick={handleClrClick}>Clear</button>
      </div>
    </div>
    <div className="container">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} Words {text.length} Characters</p>
      <h2>Preview</h2>
      <p>{text}</p>
      <div className="form-check form-switch my-3">
        <input className="form-check-input" type="checkbox" onChange={handleChange} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">{cboxText}</label>
      </div>
    </div>
  </div>
  )
}
