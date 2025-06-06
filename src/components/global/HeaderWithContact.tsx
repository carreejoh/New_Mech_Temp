import React from "react";
import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
import { clientConfig } from "../../client-config";

const links = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/#services" },
    { name: "About", to: "/#about" },
    { name: "Contact", to: "/#contact" },
];

const HeaderWithContact: React.FC = () => {
    // const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="w-full bg-base-100 border-b-[2px] border-primary shadow-sm fixed top-0 z-50">
            <div className="grid grid-cols-3 px-4 py-2 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48 h-auto md:h-24">
                <Link to="/" className="flex items-center space-x-2 col-span-1">
                    <img src={clientConfig.logo} alt="logo" className="h-12" />
                </Link>

                <div className="flex items-center justify-center gap-6 col-span-1">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            // onClick={() => setMobileOpen(false)}
                            className="text-md font-medium hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:block text-right text-sm col-span-1">
                    <p className="font-medium text-base-content">{clientConfig.address}<br></br> {clientConfig.addressSecondary}</p>
                    <p className="font-medium text-base-content mt-2">{clientConfig.phone}</p>
                </div>
            </div>

            {/* <nav className={`md:flex ${mobileOpen ? "block" : "hidden"} bg-base-100 md:bg-transparent`}>
                <div className="flex flex-col md:flex-row items-center md:justify-center space-y-2 md:space-y-0 md:space-x-6 py-3 md:py-0 px-4 md:px-0">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            onClick={() => setMobileOpen(false)}
                            className="text-md font-medium hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav> */}
        </header>
    );
};

export default HeaderWithContact;
