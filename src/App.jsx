import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";


import Home from "./Component/Home/Home";
import Card from "./Component/Home/Card";
import Ambassdor from "./Component/Home/Ambassdor";
import Connect from "./Component/Home/Connect";
import Footer from "./Component/Home/Footer";
import Challenge from "./Component/Challenge/Banner";  // Import Challenge component
import PrizePoolTable from "./Component/Challenge/PrizePool";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Card />
            <Ambassdor />
            <Connect />
            <Footer />
            {/* <PrizePoolTable/> */}
          </>
        } />

        {/* Use Challenge as the main component for /challenge */}
      <Route path="/challenge/*" element={<Challenge />} />
      </Routes>
    </Router>
  );
};

export default App;
