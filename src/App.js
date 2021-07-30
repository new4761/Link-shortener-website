import { useState } from "react";
import './App.css';
import { Home } from "./pages/Home"
import { getShotenLink } from "./services/ShortenService"
function App() {
  const [url, seturl] = useState("");
  const setUrl = async () => {
    seturl(await getShotenLink(document.getElementById("url").value));
  }
  return (
    <div className="App">
      <input id="url"></input>
      <input type="submit" onClick={setUrl}></input>
      <Home url={url} />
    </div>
  );
}

export default App;
