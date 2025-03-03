import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";

import Home from "./Component/Home/Home";
import Card from "./Component/Home/Card";
import Ambassdor from "./Component/Home/Ambassdor";
import Connect from "./Component/Home/Connect";
import Footer from "./Component/Home/Footer";
import ChallengeHub from "./Component/Challenge/Banner";
import PrizePoolTable from "./Component/Challenge/PrizePool";
import BenefitsComponent from "./Component/Challenge/Benifits";
import AbesMarketplaceOnboarding from "./Component/Challenge/Onboard";
import TermsConditionsComponent from "./Component/Challenge/Terms&Condition";
import PointsRewardsSystem from "./Component/Challenge/Points";
import LeaderboardProgress from "./Component/Challenge/Leaderboard";
import BrandHeroSection from "./Component/AboutUs/AboutPage";
import ServiceCard from "./Component/AboutUs/ServiceCard";
import AchievementsComponent from "./Component/AboutUs/Achivement";
import TeamComponent from "./Component/AboutUs/Team";
import BrandAmbassadorsComponent from "./Component/AboutUs/Influencer";
import MarketplaceBanner from "./Component/AboutUs/MarketPlace";
import WhyChooseABES from "./Component/AboutUs/WhyChoose";


const ChallengeContainer = () => {
  return (
    <>
      <ChallengeHub />
      <PrizePoolTable />
      <PointsRewardsSystem />
      <LeaderboardProgress />
      <BenefitsComponent />
      <AbesMarketplaceOnboarding />
      <TermsConditionsComponent />
      <Footer />
    </>
  );
};
const AboutUS = () => {
  return (
    <>
      <BrandHeroSection />
      <ServiceCard />
      <AchievementsComponent/>
      <TeamComponent/>
      <BrandAmbassadorsComponent/>
      <MarketplaceBanner/>
      <WhyChooseABES/>
      <Footer />
    </>
  );
};


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
            <ServiceCard/>
          </>
        } />

        {/* Challenge route that displays all challenge components */}
        <Route path="/challenge" element={<ChallengeContainer />} />
        <Route path="/about-us" element={<AboutUS />} />
      </Routes>
    </Router>
  );
};

export default App;