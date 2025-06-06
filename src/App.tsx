import { useEffect, useRef } from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { useLocation } from "react-router-dom";

import {
  componentSelection,
  clientConfig,
  landingConfig,
  contactConfig
} from "./client-config";

import HeaderDefault from "./components/global/HeaderDefault"
import HeaderWithContact from "./components/global/HeaderWithContact";

function App() {


  // Each section div ref
  const homeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

  // Scroll to location
  const location = useLocation()
  useEffect(() => {
    if (location.hash === "") { scrollToHome() }
    if (location.hash === "#services") { scrollToService() }
    if (location.hash === "#contact") { scrollToContact() }
  }, [location])

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToService = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Is device IOS? Switch which map / phone to open
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const mapLink = isIOS
    ? contactConfig.location.appleMapLink
    : contactConfig.location.googleMapLink;


  return (
    <main className="min-h-screen w-full pt-24  overflow-x-hidden bg-[#171716] text-base-content font-sans">

      {componentSelection.header === "default" && <HeaderDefault />}
      {componentSelection.header === "contact" && <HeaderWithContact />}

      {/* Hero Section */}
      <section
        ref={homeRef}
        className="relative flex items-center justify-center h-[90vh] bg-gray-800 text-white bg-cover bg-center
         px-6
      sm:px-6    /* 1.5rem on ≥640px */
      md:px-8    /* 2rem on ≥768px */
        lg:px-24   /* 8rem on ≥1024px */
        xl:px-28   /* 10rem on ≥1280px */
        2xl:px-48 "
        style={{ backgroundImage: `url(${landingConfig.landing_img})` }}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-80"></div>
        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold font-LemonMilk mb-4">{landingConfig.landing_title}</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            {landingConfig.landing_subtext}
          </p>
          <button
            onClick={scrollToContact}
            className="btn btn-lg bg-primary border-primary text-lg"
          >
            Give Us A Call
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={serviceRef}
        className="
      px-6
      sm:px-6    /* 1.5rem on ≥640px */
      md:px-8    /* 2rem on ≥768px */
        lg:px-24   /* 8rem on ≥1024px */
        xl:px-28   /* 10rem on ≥1280px */
        2xl:px-48 
        py-16 bg-[#171716] text-base-content border-t-[2px] border-primary">
        <h2 className="text-3xl font-bold font-LemonMilk text-base-100 text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {[
            {
              title: "Tire Services",
              image: "/tireBalance.jpg",
              bullets: ["Tire repair", "Tire balancing", "Tire swapping"]
            },
            {
              title: "Engine Repair",
              image: "/engineRepair.jpg",
              bullets: ["Diagnostics", "Timing belt replacement", "Engine rebuild"]
            },
            {
              title: "Scheduled Maintainence",
              image: "/oilChange.jpeg",
              bullets: ["Oil change", "Battery testing", "Fluid change"]
            },
            {
              title: "Brakes",
              image: "/brakeJob.jpg",
              bullets: ["Brake pad replacement", "Rotor resurfacing", "Fluid bleed"]
            },
          ].map((service, index) => (
            <div key={index} className="card bg-[#272627] w-full shadow-md">
              <figure>
                <img
                  src={service.image}
                  alt={service.title}
                  className="brightness-60 w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-base-100 text-2xl font-bold">{service.title}</h2>
                <ul className="list-disc list-inside text-sm text-base-200">
                  {service.bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="px-6 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48 py-16 bg-[#171716] text-base-100">
        <h2 className="text-3xl font-bold font-LemonMilk text-center mb-12">Contact Us</h2>
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="w-full lg:w-1/2">
            <iframe
              src={contactConfig.location.googleMapEmbedLink}
              width="100%"
              height="350"
              loading="lazy"
              className="rounded-sm"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Left: Info block (appears on top in mobile) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold">{clientConfig.short_name}</h3>
              <div className="flex items-center mt-2">
                <MapPin size={24} color={clientConfig.logo_color} />
                <a href={mapLink} className="ml-2 underline">
                  {contactConfig.location.address}
                  <br />
                  {contactConfig.location.addressSecondary}
                </a>
              </div>
              <div className="flex items-center mt-3">
                <Phone size={24} color={clientConfig.logo_color} />
                <a href={`tel:+1${contactConfig.phoneLink}`} className="ml-2 hover:text-primary">
                  {contactConfig.phone}
                </a>
              </div>
              <div className="flex items-center mt-3">
                <Mail size={24} color={clientConfig.logo_color} />
                <a href={`mailto:${contactConfig.email}`} className="ml-2 hover:text-primary">
                  {contactConfig.email}
                </a>
              </div>
            </div>

            <div className="w-56">
              <h4 className="text-xl font-bold">Hours of Operation</h4>
              {contactConfig.hours.map(({ day, time }) => (
                <span key={day} className="flex justify-between mt-1">
                  {day}:<span>{time}</span>
                </span>
              ))}
            </div>
          </div>


        </div>

      </section>

      <footer className="px-8 py-6 h-16 bg-[#272627] text-neutral-content text-sm text-center">
        &copy; {new Date().getFullYear()} {clientConfig.long_name}. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
