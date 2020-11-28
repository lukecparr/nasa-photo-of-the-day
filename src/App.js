import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import PhotoContainer from "./PhotoContainer";

function App() {
  const [photoData, setPhotoData] = useState('');

  useEffect(() => {
    // Had to use a specific date because API was returning 404 error "No data available for date: 2020-11-28". Maybe has to do with time zones?
    axios.get("https://api.nasa.gov/planetary/apod?api_key=Vpau7wpbxGRQMZ7Wmw8cEYIYT28YFDh8lBCeaDGh&date=2020-11-27") 
      .then(res => setPhotoData(res.data))
      .catch(err => console.log(err))
  },[]);
 
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <PhotoContainer photoData={photoData}/>
    </div>
  );
}

export default App;
