import { useState } from "react";
import "./test.css";

function McCounter() {
  const items = ["🍔", "🍟", "🥤"]; // продукти
  const [count, setCount] = useState(0);

  const digits = ["0","1","2","3","4","5","6","7","8","9"];

  return (
    <div className="mc-counter">
      <div className="receipt">
        <div className="header">McDonald's Order</div>
        <div className="wheel-wrapper">
          <div
            className="wheel"
            style={{ transform: `translateY(-${count * 50}px)` }}
          >
            {digits.map((d, i) => (
              <div key={i} className="digit">{d}</div>
            ))}
          </div>
        </div>
        <div className="products">
          {Array.from({ length: count }, (_, i) => (
            <span key={i}>{items[i % items.length]}</span>
          ))}
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      </div>
    </div>
  );
}

// export default McCounter;




function WheelCounter() {
  const digits = ["0","1","2","3","4","5","6","7","8","9"];
  const [count, setCount] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (spinning) return; // не можна крутити поки крутиться
    setSpinning(true);
    // випадкове число 0-9
    const next = Math.floor(Math.random() * 10);
    setCount(next);
    // закінчення анімації через 1 сек
    setTimeout(() => setSpinning(false), 1000);
  };

  return (
    <div className="wheel-container">
      <div className={`wheel ${spinning ? "spin" : ""}`} style={{ '--rotate-to': count * 36 }}>
        {digits.map((d, i) => (
          <div key={i} className="digit" style={{ transform: `rotate(${i*36}deg)` }}>
            {d}
          </div>
        ))}
      </div>
      <button onClick={spin}>Spin</button>
    </div>
  );
}
export default WheelCounter;