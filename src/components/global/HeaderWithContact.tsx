import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";

import { clientConfig, contactConfig } from "../../App";

const HeaderWithContact: React.FC = () => {
    const [selectedLocation, setSelectedLocation] = useState("home");
    const [mobileOpen, setMobileOpen] = useState(false);

    const links = [
        { name: "Home", to: "/", key: "home" },
        { name: "Services", to: "/#services", key: "services" },
        { name: "About Us", to: "/#about", key: "about" },
        { name: "Contact", to: "/#contact", key: "contact" },
    ];

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const mapLink = isIOS
        ? contactConfig.location.appleMapLink
        : contactConfig.location.googleMapLink;

    return (
        <header className="w-full fixed top-0 z-50 bg-base-100 shadow-sm border-b-[2px] border-primary">
            <div className={`w-full flex md:flex-row flex-col md:p-2 pt-2 pb-2 md:items-center justify-end gap-4 bg-primary bg-opacity-100 px-4 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48`}>
                <a href={`tel:+1${contactConfig.phoneLink}`} className="ml-2 flex items-center gap-1 font-medium italic text-base-100 hover:text-black">
                    <Phone size={16} className="rotate-45 " />
                    {contactConfig.phone}
                </a>
                <a href={mapLink} className="ml-2 md:mt-0 -mt-3 flex items-center gap-1 font-medium italic text-base-100 hover:text-black">
                    <MapPin size={19} />
                    {clientConfig.addressFull}
                </a>
            </div>
            <div className="h-24 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48">
                <Link to="/" className="">
                    <img className="" alt="logo" src={clientConfig.logo} />
                </Link>
                {/* Desktop nav */}
                <nav className="hidden md:flex space-x-4">
                    {links.map(({ name, to, key }) => (
                        <Link
                            key={key}
                            to={to}
                            className="tab"
                            onClick={() => setSelectedLocation(key)}
                        >
                            <p className={`text-lg font-medium font-LemonMilk ${selectedLocation === key ? "text-primary" : "text-base-content"}`}>
                                {name}
                            </p>
                        </Link>
                    ))}
                </nav>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 rounded-md bg-primary text-black focus:outline-none focus:ring"
                    onClick={() => setMobileOpen((o) => !o)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile nav dropdown */}
            {mobileOpen && (
                <nav className="md:hidden bg-base-100 shadow-md">
                    <div className="flex flex-col items-center py-4 space-y-4">
                        {links.map(({ name, to, key }) => (
                            <Link
                                key={key}
                                to={to}
                                className="w-full text-center"
                                onClick={() => {
                                    setSelectedLocation(key);
                                    setMobileOpen(false);
                                }}
                            >
                                <p className={`text-lg font-medium ${selectedLocation === key ? "text-primary" : "text-base-content"}`}>
                                    {name}
                                </p>
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
};

export default HeaderWithContact;
