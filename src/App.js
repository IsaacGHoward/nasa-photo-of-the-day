import React, {useState, useEffect} from "react";
import "./App.css";
const axios = require('axios').default;
//API Key: idq4GBavwG9WN9OQgxeyodtdTdmD96I8jYaOb6Hu
function App() {
  const apiKey = 'idq4GBavwG9WN9OQgxeyodtdTdmD96I8jYaOb6Hu';
  const [APOD_data, setAPOD] = useState();
  const today = new Date().toLocaleDateString();
  const formattedDay = today.slice(6)+'-'+today.slice(0,2)+'-'+today.slice(3,5);
  console.log(formattedDay);
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDay}`)
    .then(res => console.log(res));
  }, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
