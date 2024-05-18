import Cards from "./components/cards";
import FeatureSection from "./components/featureSection";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import NavBar from "./components/navbar";
import Pricing from "./components/pricing";
import Workflow from "./components/workFlow";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
