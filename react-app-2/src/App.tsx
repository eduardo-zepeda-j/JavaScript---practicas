import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [sent, setSent] = useState(false);
  const handleClick = () => {
    setCount(count + 1);
    setSent(!sent);
    console.log("Handle Click", count, sent);
  };

  return (
    <button onClick={handleClick}>
      Enviar {count} - {sent ? "Enviado" : "No enviado"}
    </button>
  );
}

export default App;
