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
import LandingDefault from "./components/landing/landingDefault";

// Service components
import ServicesDefault from "./components/services/servicesDefault";

// About components
import AboutUsDefault from "./components/about/aboutUsDefault";
import AboutUsSingleImage from "./components/about/aboutUsSingleImage";

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
      {componentSelection.landing === "default" && <LandingDefault ref={homeRef} onScrollToContact={scrollToContact} />}

      {/* Services Section */}
      {componentSelection.services === "default" && <ServicesDefault ref={serviceRef} />}

      {/* About Section */}
      {componentSelection.about === "default" && <AboutUsDefault ref={aboutRef} />}
      {componentSelection.about === "singleImage" && <AboutUsSingleImage ref={aboutRef} />}

      {/* Reviews Section */}
      {componentSelection.reviews === "default" && <ReviewsDefault />}

      {/* Contact Section */}
      {componentSelection.contact === "default" && <ContactDefault ref={contactRef} />}

      <footer className="px-8 py-6 h-16 bg-[#272627] text-neutral-content text-sm text-center">
        &copy; {new Date().getFullYear()} {clientConfig.long_name}. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
