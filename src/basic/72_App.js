import { useEffect, useState } from "react";

function App() {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);
  return (
  <div>
    <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
    {loading ? (
      <strong>Loading...</strong>
    ) : (
      <select>
        {coins.map((coin) => (
        <option>
          {coin.name} ({coin.symbol}) US${coin.quotes.USD.price})
        </option>
        ))}
      </select>
    )}
  </div>
  );
}

export default App;
