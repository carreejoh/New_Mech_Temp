// components/contact/ContactDefault.tsx
import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { clientConfig, contactConfig } from "../../App";

const ContactDefault = React.forwardRef<HTMLDivElement>((_, ref) => {

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const mapLink = isIOS
    ? contactConfig.location.appleMapLink
    : contactConfig.location.googleMapLink;

  return (
    <section
      ref={ref}
      className="px-6 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48 py-16 bg-base-300 text-base-content/80"
    >
      <h2 className="text-3xl font-bold font-LemonMilk text-center mb-12 text-base-content">
        Contact Us
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Map */}
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

        {/* Info Block */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-bold text-base-content">{clientConfig.short_name}</h3>
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
            <h4 className="text-xl font-bold text-base-content/100">Hours of Operation</h4>
            {contactConfig.hours.map(({ day, time }: { day: string; time: string }) => (
              <span key={day} className="flex justify-between mt-1">
                {day}:<span>{time}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactDefault;
