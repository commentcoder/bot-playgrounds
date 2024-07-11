import "./App.css";

const Link = ({ href, children }) => (
  <a
    style={{
      background: "#121212",
      padding: "20px 30px",
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
      width: 300,
      margin: 4,
      borderRadius: 8,
      cursor: "pointer",
    }}
    href={href}
  >
    {children}
  </a>
);

const Home = () => (
  <div className="App">
    <header className="App-header">
      <Link href="/squares">Bot Souris</Link>
      <Link href="/clicker">Bot Clics Pixels</Link>
      <Link href="/mole">Bot Image</Link>
      <Link href="/modify">Bot Texte</Link>
    </header>
  </div>
);

export default Home;
