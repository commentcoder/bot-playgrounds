import React from 'react';
import './cookie.css';
import './App.css';
import cursorplus from './cursor-plus.svg'
import cursorgold from './cursor-gold.svg'

const Clicker = () => {
  const [animate, setAnimate] = React.useState(false);
  const [cookies, setCookies] = React.useState(0);

  const [cpc, setCpc] = React.useState(1);
  const [cps, setCps] = React.useState(1);

  const [upgrades, setUpgrades] = React.useState([
    { emoji: '👵', name: 'Grand-mère', cps: 1, cost: 10, type: 'cps' },
    { cursor: cursorplus, name: 'Super curseur', cpc: 1, cost: 15, type: 'cpc' },
    { emoji: '🏭', name: 'Magasin de jouets', cps: 5, cost: 50, type: 'cps' },
    { cursor: cursorgold, name: 'Curseur en or', cpc: 5, cost: 100, type: 'cpc' },
  ]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCookies(cookies + cps);
    }, 1000);
    return () => clearInterval(interval);
  }, [cookies, cps]);

  const handleUpgradePurchase = (index) => {
    const upgrade = upgrades[index];
    if (cookies >= upgrade.cost) {
      setCookies(cookies - upgrade.cost);
      setUpgrades(u => {
        u[index].cost = parseInt(u[index].cost * 1.2);
        return u;
        })
      if (upgrade.type === 'cps') {
        setCps(cps + upgrade.cps);
      } else if (upgrade.type === 'cpc') {
        setCpc(cpc + upgrade.cpc);
      }
    }
  };

  const buttonClicked = (e) => {
    setAnimate(true);
    setCookies(g => g + cpc);
    setTimeout(() => setAnimate(false), 300); // duration of the animation
  }

  const WIDTH = 520;

  return (
    <div className="App">
    <header className="App-header">
    <h1>Gift Clicker</h1>

    <div style={{display:'flex'}}>
    <div style={{width: WIDTH, display: 'flex', flexDirection: 'column', margin: 10}}>
    <div style={{background: '#121212', marginBottom: 10, borderRadius: 8, padding: 12}}>
      <div className={`cookie ${animate ? 'animate' : ''}`}  onClick={buttonClicked}>🎁</div>
    </div>
    <div style={{textAlign: 'left', margin: '1rem 0', backgroundColor: '#121212', borderRadius: 8, padding: 12}}>
    <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: 'bold'}}>
    <div>Cadeaux : </div><div>{cookies}</div>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <div>Par seconde : </div><div>+{cps}</div>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <div>Par clic : </div><div>+{cpc}</div>
    </div>
    </div>
    </div>

    <div style={{margin: 10, backgroundColor: '#121212', borderRadius: 8, padding: 12}}>
    <h3 style={{margin: 5, fontSize: 20}}>Upgrades</h3>
    <div style={{textAlign: 'left', height: 400, width: WIDTH}}> 
    <div className="upgrades">
        {upgrades.map((upgrade, index) => (
          <div
            key={index}
            onClick={() => handleUpgradePurchase(index)}
            disabled={cookies < upgrade.cost}
            className={`upgrade-btn ${cookies < upgrade.cost ? 'disabled' : ''}`}
          >
          <div style={{fontSize: 50}}>
          {upgrade.emoji || <img src={upgrade.cursor} style={{ width: 50}} />} 
          </div>
          <div style={{fontHeight: 60, justifyContent: 'center', fontSize: 20, margin: 'auto 20px'}}>
          <b>{upgrade.name}</b> &bull; Coût : {upgrade.cost} &bull; {upgrade.type === 'cps' ? `+${upgrade.cps} CPS` : `+${upgrade.cpc} CPC`}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
    </header>
    </div>
  )
}
// style={{fontSize: 200, border: 0, background: 'inherit'}}

export default Clicker;
