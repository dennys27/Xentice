import LandingPage from "./Components/LandingPage/LandingPage";
import DrawerAppBar from "./Components/Navbar/Navbar";
import OptionsBar from "./Components/OptionsBar/OptionsBar";
import ServicesBar from "./Components/ServiceBar/ServicesBar";
import axios from 'axios'
import Carousel from "./Components/crousel/Carousel";
import { useEffect, useState } from "react";



function App() {

  const [data, setData] = useState([]);
 
  useEffect(() => {

    axios.get("https://api.xentice.com/api/postadSelect")
      .then((data) => {
      
        setData(JSON.parse(data.data))
        let log = data.data.filter((item) => {
         
          return item?.name === "Commercial Office"
        })
        console.log(log)
    })
    
  },[])

  return (
    <div className="App">
      <DrawerAppBar />
      <OptionsBar />
      <LandingPage />
      <ServicesBar />
      <Carousel data={data} />
     
    </div>
  );
}

export default App;
