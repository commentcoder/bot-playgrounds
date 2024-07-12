import React from "react";
import "../index.css";

const items = [
  { name: "Plante A ", score: 5 },
  { name: "Plante B ", score: 5 },
  { name: "Plante C ", score: 5 },
  { name: "Plante D ", score: 5 },
  { name: "Plante E ", score: 5 },
  { name: "Plante F ", score: 5 },
  { name: "Plante G ", score: 5 },
];

const Line = ({ name, score, onChangeLanguage }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          justifyContent: "space-between",
          margin: "0 20px",
        }}
      >
        {score < 20 ? "🥀" : "🌹"}

        <div style={{ marginLeft: 10, marginRight: 10 }}>{name}</div>
        <div style={{ marginLeft: 10 }}>
          Soif : {score < 10 ? "0" : null}
          {score} / 20
        </div>
      </div>
      <button onClick={onChangeLanguage} style={{ fontSize: 28 }}>
        💦
      </button>
    </div>
  );
};

function App() {
  const [languages, setLanguages] = React.useState(items);
  const [log, setLog] = React.useState([]);

  const onChangeLanguage = (language) => {
    if (language.score > 19) return;
    const index = languages.findIndex((item) => item === language);
    const updatedItems = [...languages];

    const randomIndex = Math.floor(Math.random() * languages.length);
    const rnJesus = Math.floor(Math.random() * 5);

    console.log(randomIndex);

    const newScore =
      updatedItems[index].score + (updatedItems[index].score < 20 ? 1 : 0);

    let log = "";
    if (rnJesus !== 4) {
      updatedItems[index] = { ...updatedItems[index], score: newScore };

      log = `${updatedItems[index].name} gagne 1 ✅.`;
      if (rnJesus === 2) {
        updatedItems[randomIndex] = {
          ...updatedItems[randomIndex],
          score: (updatedItems[randomIndex].score -= 1),
        };
        log = log.substring(log, log.length - 1);
        log += ` mais ${updatedItems[randomIndex].name} perd 1 ❌.`;
      }
      setLog((oldLogs) => [log, ...oldLogs]);
    } else {
      setLog((oldLogs) => [
        `${updatedItems[index].name} n'a pas pris 1 🟰.`,
        ...oldLogs,
      ]);
    }

    setLanguages(updatedItems);
  };

  const WIDTH = 520;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Plantes à arroser</h1>

        <div style={{ display: "flex" }}>
          <div
            style={{
              width: WIDTH,
              display: "flex",
              flexDirection: "column",
              margin: 10,
            }}
          >
            <div
              style={{
                background: "#121212",
                marginBottom: 10,
                borderRadius: 8,
                padding: 12,
              }}
            >
              {languages.map((language) => (
                <Line
                  key={language.name}
                  name={language.name}
                  score={language.score}
                  onChangeLanguage={() => onChangeLanguage(language)}
                />
              ))}
            </div>
            <div
              style={{
                textAlign: "left",
                margin: "1rem 0",
                backgroundColor: "#121212",
                borderRadius: 8,
                padding: 12,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Taux de réussite total : </div>
                <div>80%</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Taux de réussite partiel : </div>
                <div>10%</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Taux d&apos;échec : </div>
                <div>10%</div>
              </div>
            </div>
          </div>

          <div
            style={{
              margin: 10,
              backgroundColor: "#121212",
              borderRadius: 8,
              padding: 12,
            }}
          >
            <h3 style={{ margin: 5, fontSize: 20 }}>Logs</h3>
            <div
              style={{
                textAlign: "left",
                height: 400,
                width: WIDTH,
                overflowY: "scroll",
              }}
            >
              {log.map((l, i) => (
                <div style={{ fontSize: "1.6rem" }} key={i}>
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
