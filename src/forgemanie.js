import React from 'react';

const item = [
  "+350 en vie",
  "+50 en dommages terre",
  "+50 en dommages eau",
  "+50 en dommages air",
  "+50 en dommages feu",
  "+3 aux coups critiques",
  "+2 invocations",
  "+10 résistance à la terre",
  "+10 résistance à l'eau",
  "+10 résistance à l'air",
  "+10 résistance au feu",
]

const Line = ({i, children}) => <div style={{color: '#300aaa', fontWeight: 600, padding: "6px 12px", background: i % 2 ? "#bbbccc" : "#cccddd"}}>{children}</div>

  const LignesItems = () => {
    return (
      <div>
      {item.map((line, i) => <Line i={i}>{line}</Line>)}
      </div>);
  }

export default LignesItems

