import "../index.css";

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
      onMouseEnter={handleMouseEvent}
      style={{ margin: 2, height: 60, width: 60, background: "#848484" }}
    />
  );
};

export default () => {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 60 * 5 + 10, margin: "100px auto" }}>
          {Array(8)
            .fill(0)
            .map((x) => (
              <div style={{ display: "flex" }}>
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
