import React from "react";
import { landingConfig, clientConfig } from "../../App";

interface LandingLeftPhotoProps {
  onScrollToContact: () => void;
}

const LandingLeftPhoto = React.forwardRef<HTMLDivElement, LandingLeftPhotoProps>(
  ({ onScrollToContact }, ref) => {
    const width = 60;
    const angle = 9;

    const angleRadians = (angle * Math.PI) / 180;
    const heightFactor = Math.tan(angleRadians);
    const offset = Math.min(Math.max(width - heightFactor * 100, 0), 100);

    const clipPath = `polygon(0 0, ${width}% 0, ${offset}% 100%, 0% 100%)`;

    return (
      <section
        ref={ref}
        className="relative h-[90vh] w-full overflow-hidden bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${landingConfig.landing_img})` }}
      >
        {/* Background darkening layer */}
        <div className="absolute inset-0 bg-gray-800 opacity-80"></div>

        {/* Angled overlay — only visible on md+ */}
        <div
          className="absolute inset-0 z-0 hidden md:block"
          style={{
            clipPath,
            backgroundColor: "rgba(23, 23, 22, .9)",
          }}
        />

        {/* Optional: subtle extra overlay */}
        <div className="absolute inset-0 bg-gray-800 opacity-10"></div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48">
          <div className="w-full md:max-w-[40%] md:text-left text-center text-white">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:w-full">
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
        </div>
      </section>
    );
  }
);

export default LandingLeftPhoto;
