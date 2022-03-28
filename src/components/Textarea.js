import React, { useState } from "react";

export default function Textarea(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "Success");
  };
  const handleLowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "Success");
  };
  const capitalize = () => {
    let firstchar = text.charAt(0); // storing the first char of the string
    let newText = firstchar.toUpperCase(); // converting that to uppercase
    setText(newText + text.slice(1)); // printing it with rest excluding the first char by using slice
    props.showAlert("Converted to first letter UpperCase", "Success");
  };
  //for reverse
  const handleReverse = (event) => {
    //Convert string to array
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("All Reverse", "Success");
  };
  //convert every first letter in capital
  const CapFClick = () => {
    let CapitalizeWords = text[0].toUpperCase();
    for (let i = 1; i <= text.length - 1; i++) {
      let currentCharacter,
        previousCharacter = text[i - 1];
      if (previousCharacter && previousCharacter === " ") {
        currentCharacter = text[i].toUpperCase();
      } else {
        currentCharacter = text[i];
      }
      CapitalizeWords = CapitalizeWords + currentCharacter;
    }
    setText(CapitalizeWords);
    props.showAlert("Converted every first letter in capital", "Success");
  };
  //pragharph break per line
  const handleSPerLineClick = () => {
    let newText = text.replaceAll(".", "\n");
    setText(newText);
    props.showAlert("Paragharph break per line", "Success");
  };
  // for fontstyle change
  const [font, setFont] = React.useState(" ");

  const fontFami = () => {
    alert("make sure that the font is installed in your device");
    let input = prompt("Enter the font name");
    setFont(input);
  };
  //speak function
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Now you are listning your input", "Success");
  };
  //copy text
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "Success");
  };
  //remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/ [ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", "Success");
  };

  //clear All
  const handleClearClick = () => {
    setText("");
    props.showAlert("Clear TextBox", "Success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState(" ");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "dark"
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          ConvertUpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          ConvertLowerCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={capitalize}>
          Capital firstLetter
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleReverse}>
          ReverseAll
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={CapFClick}>
          CapsEveryFirst
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleSPerLineClick}
        >
          BreakPerLine
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={fontFami}>
          FontStyle
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={speak}>
          ClickToListen
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          CopyText
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={handleExtraSpaces}
        >
          RemoveExtraSpace
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={handleClearClick}
        >
          ClearTextArea
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="my-3">
          <h1>Text summary</h1>
          <p>
            {
              text
                .trim()
                .split(" ")
                .filter(function (element) {
                  return element !== "";
                }).length
            }{" "}
            words and {text.length} characters{" "}
          </p>

          <p>
            {0.008 *
              text.split(" ").filter(function (element) {
                return element !== "";
              }).length}{" "}
            Minutes take to Listen
          </p>

          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in textbox to preview here"}
          </p>
        </div>
      </div>
    </>
  );
}
