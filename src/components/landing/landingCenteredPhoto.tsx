import React from "react";
import {
    clientConfig, 
    landingConfig
 } from "../../App";

interface LandingCenteredPhotoProps {
    onScrollToContact: () => void;
}

const LandingCenteredPhoto = React.forwardRef<HTMLDivElement, LandingCenteredPhotoProps>(
    ({ onScrollToContact }, ref) => {
        return (
            <section
                ref={ref}
                className="relative flex items-center justify-center h-[90vh] bg-gray-800 text-white bg-cover bg-center
                            px-6 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48"
                style={{ backgroundImage: `url(${landingConfig.landing_img})` }}
            >
                <div className="absolute inset-0 bg-gray-800 opacity-80"></div>
                <div className="relative z-10 max-w-4xl text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-LemonMilk mb-4">
                        {landingConfig.landing_title}
                    </h1>
                    <p className="text-lg md:text-xl text-base-content/90 mb-6">
                        {landingConfig.landing_subtext}
                    </p>
                    <button
                        onClick={onScrollToContact}
                        className={`
                            ${clientConfig.borders}
                            btn btn-lg bg-primary border-primary text-black font-bold text-lg
                            `}
                    >
                        {landingConfig.landing_cta}
                    </button>
                </div>
            </section>
        );
    }
);

export default LandingCenteredPhoto;
