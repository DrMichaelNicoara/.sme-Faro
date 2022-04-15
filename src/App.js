import React, { useState, useEffect } from "react";
import "./table.css";

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  function drawRect() {
    // Table
    context.fillRect(250, 20, 1000, 500);
    context.fillStyle = "green";
    context.beginPath();
    context.lineWidth = "20";
    context.strokeStyle = "brown";
    context.rect(250, 20, 1000, 500);
    context.stroke();
  }


function drawBall(X, Y) {
  // Ball
  context.beginPath();
  context.arc(300, 50, 10, 0, 2 * Math.PI, false);
  context.lineWidth = 10;
  context.strokeStyle = "#FF0000";
  context.stroke();
}

function App() {
  const [X, setX] = useState(300);
  const [Y, setY] = useState(50);

  useEffect(() => {
    setX = X + 10;
    setY = Y + 10;
  }, [X, Y]);

  return (
    <div>
      <header>
        <br />
        <div>
          {drawRect()} 
          {drawBall(X, Y)}

          <p className="font-face">Speed</p>
          <input type="text" />

          <p className="font-face">Diameter</p>
          <input type="text" />
        </div>
        <br />
      </header>
    </div>
  );
}

export default App;
