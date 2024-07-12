import "../index.css";
import "./cursorbot.css";

const Case = () => {
  const handleMouseEvent = (e) => {
    e.persist();
    e.target.style.backgroundColor = "orange";

    setTimeout(() => {
      e.target.style.backgroundColor = "";
    }, 500);
  };

  return (
    <div
      className="square"
      style={{ background: "#848484" }}
      onMouseEnter={handleMouseEvent}
    />
  );
};

const CursorBot = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          {Array(8)
            .fill(0)
            .map((x) => (
              <div className="column">
                {Array(5)
                  .fill(0)
                  .map((y) => (
                    <Case />
                  ))}
              </div>
            ))}
        </div>
      </header>
    </div>
  );
};

export default CursorBot;
