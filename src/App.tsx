import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import {
  componentSelection,
  clientConfig,
} from "./client-config";

// Header components
import HeaderDefault from "./components/global/HeaderDefault"
import HeaderWithContact from "./components/global/HeaderWithContact";

// Landing components
import LandingCenteredPhoto from "./components/landing/landingCenteredPhoto";
import LandingLeftPhoto from "./components/landing/landingLeftPhoto";

// Service components
import ServiceCards from "./components/services/serviceCards";
import ServiceCardsPrimary from "./components/services/serviceCardsPrimary";

// About components
import AboutUsSingleImage from "./components/about/aboutUsSingleImage";
import AboutUsOwnerTeam from "./components/about/aboutUsOwnerTeam";
import AboutUsOwnerTeamFlex from "./components/about/aboutUseOwnerTeamFlex";
import AboutUsOwnerTeamFlexAngle from "./components/about/aboutUsOwnerTeamFlexAngle";

// Reviews
import ReviewsDefault from "./components/reviews/reviewsDefault";

// Contact components
import ContactDefault from "./components/contact/contactDefault";

function App() {


  // Each section div ref
  const homeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

  // Scroll to location from header
  const location = useLocation()
  useEffect(() => {
    if (location.hash === "") { scrollToHome() }
    if (location.hash === "#services") { scrollToService() }
    if (location.hash === "#about") { scrollToAbout() }
    if (location.hash === "#contact") { scrollToContact() }
  }, [location])

  // Each location to scroll to 
  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToService = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <main className="min-h-screen w-full pt-24  overflow-x-hidden bg-[#171716] text-base-content font-sans">

      {/* Header */}
      {componentSelection.header === "default" && <HeaderDefault />}
      {componentSelection.header === "contact" && <HeaderWithContact />}

      {/* Hero Section */}
      {componentSelection.landing === "centeredPhoto" && <LandingCenteredPhoto ref={homeRef} onScrollToContact={scrollToContact} />}
      {componentSelection.landing === "leftPhoto" && <LandingLeftPhoto ref={homeRef} onScrollToContact={scrollToContact} />}

      {/* BORDER */}
      <div className="w-full h-[2px] bg-primary"></div>

      {/* Reviews Section */}
      {componentSelection.reviews === "default" && <ReviewsDefault />}

      {/* BORDER */}
      <div className="w-full h-[2px] bg-primary"></div>

      {/* Services Section */}
      {componentSelection.services === "default" && <ServiceCards ref={serviceRef} />}
      {componentSelection.services === "primary" && <ServiceCardsPrimary ref={serviceRef} />}

      {/* BORDER */}
      <div className="w-full h-[2px] bg-primary"></div>

      {/* About Section */}
      {componentSelection.about === "singleImage" && <AboutUsSingleImage ref={aboutRef} />}
      {componentSelection.about === "ownerTeam" && <AboutUsOwnerTeam ref={aboutRef} />}
      {componentSelection.about === "ownerTeamFlex" && <AboutUsOwnerTeamFlex ref={aboutRef} />}
      {componentSelection.about === "ownerTeamFlexAngle" && <AboutUsOwnerTeamFlexAngle ref={aboutRef} />}

      {/* BORDER */}
      <div className="w-full h-[2px] bg-primary"></div>


      {/* Contact Section */}
      {componentSelection.contact === "default" && <ContactDefault ref={contactRef} />}

      <footer className="px-8 py-6 h-16 bg-[#272627] text-neutral-content text-sm text-center">
        &copy; {new Date().getFullYear()} {clientConfig.long_name}. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
