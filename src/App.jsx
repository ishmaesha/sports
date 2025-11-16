import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Shop from './components/Shop';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Explore from './components/Explore';
import Watch from './components/Watch';
import Mostloved from './components/Mostloved';
import Plainsweatsuit from './components/plainsweatsuit';
import Tracksuit from './components/tracksuit';
import Tennis from './components/tennis';
import Football from './components/football';
import Sportsshoes from './components/sportsshoes';
import Sportscaps from './components/sportscaps';
import Waterbottle from './components/Waterbottle';
import Gloves from './components/Gloves';
import Saftey from './components/Saftey';
import Helmet from './components/Helmet';
import Ziphoodie from './components/Ziphoodie';
import Cricketkit from './components/Cricketkit';
import Cricketbat from './components/Cricketbat';
import Cricketball from "./components/Cricketball"
import Basketball from "./components/Basketball"
import Hockey from "./components/Hockey"
import Payment from './components/Payment';
import Login from './components/Login'
function App() {
  

  return (
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop-here" element={<Shop Here />} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/watch" element={<Watch/>} />
        <Route path="/Mostloved" element={<Mostloved/>} />
        <Route path="/Plainsweatsuit" element={<Plainsweatsuit/>} />
        <Route path="/Tracksuit" element={<Tracksuit/>} />
        <Route path="/Tennis" element={<Tennis/>} />
        <Route path="/Football" element={<Football/>} />
        <Route path="/Sportsshoes" element={<Sportsshoes/>} />
        <Route path="/Sportscaps" element={<Sportscaps/>} />
        <Route path="/Waterbottle" element={<Waterbottle/>} />
        <Route path="/Gloves" element={<Gloves/>} />
        <Route path="/Saftey" element={<Saftey/>} />
        <Route path="/Helmet" element={<Helmet/>} />
        <Route path="/Ziphoodie" element={<Ziphoodie/>} />
        <Route path="/Cricketkit" element={<Cricketkit/>} />
        <Route path="/Cricketbat" element={<Cricketbat/>} />
        <Route path="/Cricketball" element={<Cricketball/>} />
        <Route path="/Basketball" element={<Basketball/>} />
        <Route path="/Hockey" element={<Hockey/>} />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
      
      <Footer />
    </Router>
  )
}

export default App;