import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { SquareArrowOutUpRight } from "lucide-react";

import configData from "./config.json";

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

// Helper function to get the appropriate value based on included flag
const getValue = (field: any) => {
  if (!field) return "";
  return field.included ? (field.customValue || field.defaultValue) : field.defaultValue;
};

// Helper function to encode URLs for CSS background-image
const encodeImageUrl = (url: string) => {
  if (!url) return "";
  // If it's a relative path, return as-is
  if (url.startsWith('/')) return url;
  // For external URLs, check if already encoded
  try {
    // If the URL is already encoded, decoding and re-encoding should give the same result
    const decoded = decodeURI(url);
    const reEncoded = encodeURI(decoded);
    // If they're the same, the URL was already properly encoded
    if (reEncoded === url) {
      return url;
    }
    // Otherwise, encode it
    return encodeURI(url);
  } catch (e) {
    console.warn('Failed to encode URL:', url, e);
    return url;
  }
};

// Helper function to format phone number
const formatPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) return "";
  const cleaned = phoneNumber.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phoneNumber;
};

// Create configuration objects from JSON data
export const clientConfig = {
  // Themes / Colors
  daisy_theme: (configData.theme as any).daisy_theme || "business",
  logo_color: getValue(configData.theme.primary_color),
  borders: (configData.theme as any).borders || "rounded-none",

  // General
  short_name: getValue(configData.branding.short_name),
  long_name: getValue(configData.branding.long_name),
  phone: getValue((configData.contact as any).phone) || formatPhoneNumber(getValue(configData.contact.phoneLink)),
  phoneLink: getValue(configData.contact.phoneLink),
  email: getValue(configData.contact.email),
  address: getValue(configData.location.address),
  addressSecondary: getValue(configData.location.addressSecondary),
  addressFull: getValue(configData.location.addressFull),

  // Header
  logo: getValue(configData.branding.logo),
};

export const componentSelection = {
  // Default selections - these could be made configurable later
  header: "contact",
  landing: "leftPhoto",
  services: "default",
  about: "ownerTeamFlexAngle",
  reviews: "default",
  contact: "default"
};

export const landingConfig = {
  landing_img: encodeImageUrl(getValue(configData.landing.image)),
  landing_title: getValue(configData.landing.title),
  landing_subtext: getValue(configData.landing.subtext),
  landing_cta: (configData.landing as any).cta || "GIVE US A CALL",
  landing_type: (configData.landing as any).type || 0,
};

export const serviceConfig = {
  bg: "bg-base-300" // Default background, could be made configurable
};

export const serviceCardConfig = configData.services.cards.included 
  ? (configData.services.cards.customValue && configData.services.cards.customValue.length > 0 
      ? configData.services.cards.customValue 
      : configData.services.cards.defaultValue)
  : configData.services.cards.defaultValue;

export const aboutUsConfig = {
  description: getValue(configData.about.description),
  team_image: getValue(configData.about.team_image),
  team_description: getValue(configData.about.team_description),
  owner_image: getValue(configData.about.owner_image),
  owner_name: getValue(configData.about.owner_name),
  owner_description: getValue(configData.about.owner_description)
};

export const aboutUsCardConfig = [
  {
    fullName: "John Martinez",
    yearsOfExperience: 18,
    image: "/about_imgs/owner.png",
    description: "ASE-certified master technician with nearly two decades of experience in engine diagnostics and repair."
  },
  {
    fullName: "Alex Brooks",
    yearsOfExperience: 12,
    image: "/about_imgs/owner.png",
    description: "Brake system specialist with a strong focus on clear communication."
  },
  {
    fullName: "Leo Nguyen",
    yearsOfExperience: 9,
    image: "/about_imgs/owner.png",
    description: "Expert in electrical diagnostics and hybrid systems."
  },
  {
    fullName: "Emily Chavez",
    yearsOfExperience: 6,
    image: "/about_imgs/owner.png",
    description: "Skilled in oil systems, tire work, and general maintenance."
  }
];

// Convert hours format
const convertHours = (hoursData: any) => {
  if (!hoursData.included) {
    return hoursData.defaultValue;
  }
  
  const customHours = hoursData.customValue;
  
  // If customValue is an array (simple format), return it directly
  if (Array.isArray(customHours)) {
    return customHours;
  }
  
  // If customValue is an object (complex format), convert it
  if (customHours && typeof customHours === 'object') {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    return Object.keys(customHours).map((dayKey, index) => {
      const dayData = customHours[dayKey];
      const dayName = days[index];
      
      if (!dayData.isOpen) {
        return { day: dayName, time: "Closed" };
      }
      
      // Convert 24-hour to 12-hour format
      const formatTime = (time: string) => {
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${ampm}`;
      };
      
      return {
        day: dayName,
        time: `${formatTime(dayData.openTime)} - ${formatTime(dayData.closeTime)}`
      };
    });
  }
  
  // Fallback to default
  return hoursData.defaultValue;
};

export const contactConfig = {
  phone: getValue((configData.contact as any).phone) || formatPhoneNumber(getValue(configData.contact.phoneLink)),
  phoneLink: getValue(configData.contact.phoneLink),
  email: getValue(configData.contact.email),
  location: {
    address: getValue(configData.location.address),
    addressSecondary: getValue(configData.location.addressSecondary),
    googleMapEmbedLink: getValue(configData.location.googleMapEmbedLink),
    googleMapLink: getValue(configData.location.googleMapLink),
    appleMapLink: getValue(configData.location.appleMapLink)
  },
  hours: convertHours(configData.hours)
};

// Default reviews - could be made configurable later
export const reviewsConfig = [
  {
    fullName: "Jessica Taylor",
    reviewValue: 5,
    timePosted: "06/01/2025",
    reviewText:
      "Absolutely incredible service. They diagnosed and fixed my car faster than I expected, and the staff was super friendly and professional. Highly recommended!",
  },
  {
    fullName: "Marcus Bennett",
    reviewValue: 4,
    timePosted: "05/28/2025",
    reviewText:
      "Great work on my brakes. Fair pricing and clear communication. The only reason I'm not giving 5 stars is the slightly long wait time, but the quality was excellent.",
  },
  {
    fullName: "Elena Rodriguez",
    reviewValue: 5,
    timePosted: "05/20/2025",
    reviewText:
      "This shop has exceeded my expectations every single time. Friendly staff, clean facility, and flawless service. I won't take my car anywhere else.",
  },
  {
    fullName: "David Chen",
    reviewValue: 5,
    timePosted: "05/15/2025",
    reviewText:
      "Everything from the check-in process to the final result was smooth and professional. My car runs perfectly now. Definitely a 5-star experience.",
  },
  {
    fullName: "Amanda Greene",
    reviewValue: 5,
    timePosted: "05/10/2025",
    reviewText:
      "They went above and beyond. Explained every step, finished ahead of schedule, and even offered a courtesy ride. Easily one of the best shops I've worked with.",
  },
];

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
