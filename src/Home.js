import "./index.css";

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
      <Link href="/squares">0. Bot Curseur</Link>
      <Link href="/clicker">1. Bot Clic</Link>
      <Link href="/mole">2. Bot Image</Link>
      <Link href="/modify">3. Bot Texte</Link>
    </header>
  </div>
);

export default Home;
