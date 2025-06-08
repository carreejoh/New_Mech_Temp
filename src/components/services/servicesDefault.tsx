// components/services/servicesDefault.tsx
import React from "react";
import { servicesConfig } from "../../client-config";

const ServicesDefault = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="px-6 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48 py-16 bg-base-300 text-base-content border-t-[2px] border-primary"
    >
      <h2 className="text-3xl font-bold font-LemonMilk text-base-content text-center mb-12">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {servicesConfig.map((service, index) => (
          <div key={index} className="card bg-base-100 w-full shadow-md">
            <figure>
              <img
                src={service.image}
                alt={service.title}
                className="brightness-60 w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base-content text-2xl font-bold">
                {service.title}
              </h2>
              <p className="text-sm text-base-content/80 mb-2">{service.description}</p>
              <ul className="list-disc list-inside text-sm text-base-content/80">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default ServicesDefault;
