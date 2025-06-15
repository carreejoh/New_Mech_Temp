import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { SquareArrowOutUpRight } from "lucide-react";

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

 // Get subdomain for link to revup
  function getVercelSubdomain(url: string): string | null {
    const match = url.match(/^https?:\/\/([^.]+)\.vercel\.app/);
    return match ? match[1] : null;
  }
  const subdomain = getVercelSubdomain(window.location.href);

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

      {/* Buy now link */}

      <div className="bg-[#1C1C1C] fixed p-4 rounded-md bottom-4 right-4 z-[2000] shadow-xl">
        <div className="flex items-center space-x-3">
          <img src="/Base_Logo.png" className="h-10" />
          <h2 className="text-lg font-semibold text-[#CDCDCD]">Like what you see?</h2>
        </div>
        <Link to={`https://revupwebsites.com/first-step/${clientConfig.short_name}/${subdomain}`} className="flex items-center space-x-2 btn bg-[#D8161A] mt-2">
          <p>Purchase Now</p>
          <SquareArrowOutUpRight size={16} />
        </Link>
      </div>

      <footer className="px-8 py-6 h-16 bg-[#272627] text-neutral-content text-sm text-center">
        &copy; {new Date().getFullYear()} {clientConfig.long_name}. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
