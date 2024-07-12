import "./index.css";

const Link = ({ href, children }) => (
  <a className="Home__Link" href={href}>
    {children}
  </a>
);

const Home = () => (
  <div className="App">
    <header className="App-header">
      <Link href="#/squares">0. Bot Curseur</Link>
      <Link href="#/clicker">1. Bot Clic</Link>
      <Link href="#/mole">2. Bot Image</Link>
      <Link href="#/modify">3. Bot Texte</Link>
    </header>
  </div>
);

export default Home;
