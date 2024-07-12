// src/WhacAMole.js
import React, { useState, useEffect, useRef } from "react";
import "./imagebot.css";
import "./App.css";

const MOLE_SHOW_TIME = 2000; // Mole appears for 1 second

const WhacAMole = () => {
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState({ top: "0px", left: "0px" });
  const [activeMole, setActiveMole] = useState(false);
  const gameZoneRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameZoneRef.current) {
        const { width, height } = gameZoneRef.current.getBoundingClientRect();
        const randomTop = Math.floor(Math.random() * (height - 50));
        const randomLeft = Math.floor(Math.random() * (width - 50));
        setMolePosition({ top: `${randomTop}px`, left: `${randomLeft}px` });
        setActiveMole(true);

        setTimeout(() => {
          setActiveMole(false);
        }, MOLE_SHOW_TIME);
      }
    }, 2500); // Mole appears every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleMoleClick = () => {
    if (activeMole) {
      setScore(score + 1);
      setActiveMole(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="whac-a-mole">
          <h2 style={{ margin: 0, marginTop: -50 }}>Jeu de la taupe</h2>
          <h3 style={{ margin: 10 }}>Score: {score}</h3>
          <div className="game-zone" ref={gameZoneRef}>
            {activeMole && (
              <div
                className="mole"
                style={{ top: molePosition.top, left: molePosition.left }}
                onClick={handleMoleClick}
              >
                🐹
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default WhacAMole;
