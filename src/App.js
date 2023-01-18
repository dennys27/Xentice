import LandingPage from "./Components/LandingPage/LandingPage";
import DrawerAppBar from "./Components/Navbar/Navbar";
import OptionsBar from "./Components/OptionsBar/OptionsBar";
import ServicesBar from "./Components/ServiceBar/ServicesBar";
import axios from 'axios'
import Carousel from "./Components/crousel/Carousel";
import { useEffect, useState } from "react";
import CommercialOffice from "./Components/CommercialOffice/CommercialOffice";
import CommercialLand from "./Components/CommercialLand/CommercialLand";
import CommercialBuilding from "./Components/Commercial Building/CommercialBuilding";
import IndustrialBuilding from "./Components/IndustrialBuilding/IndustrialBuilding";
import CoWorkingSpace from "./Components/CoworkingSpace/CoWorkingSpace";
import PrivateOffice from "./Components/PrivateOffice/PrivateOffice";
import MeetingRoom from "./Components/MeetingRoom/MeetingRoom";
import Footer from "./Components/Footer/Footer";



function App() {

  const [data, setData] = useState([]);
 
  useEffect(() => {

    axios.get("https://api.xentice.com/api/postadSelect")
      .then((data) => {
      
        setData(data.data)
     
    })
    
  },[])

  return (
    <div className="App">
      <DrawerAppBar />
      <OptionsBar />
      <LandingPage />
      <ServicesBar />
      <Carousel data={data} />
      <CommercialOffice data={data} />
      <CommercialLand data={data} />
      <CommercialBuilding data={data} />
      <IndustrialBuilding data={data} />
      <CoWorkingSpace data={data}/>
      <PrivateOffice data={data}/>
      <MeetingRoom data={data} />
      <Footer/>
    </div>
  );
}

export default App;
