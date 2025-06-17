import React from "react";
import { landingConfig, clientConfig } from "../../App";

interface LandingPhotoParagraphProps {
  onScrollToContact: () => void;
}

const LandingPhotoParagraph = React.forwardRef<HTMLDivElement, LandingPhotoParagraphProps>(
  ({ onScrollToContact }, ref) => {
    return (
      <section
        ref={ref}
        className="relative h-[90vh] w-full overflow-hidden bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${landingConfig.landing_img})` }}
      >
        {/* Background darkening layer */}
        <div className="absolute inset-0 bg-gray-800 opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              {landingConfig.landing_title}
            </h1>
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-lg md:text-xl text-base-content/90 leading-relaxed">
                {landingConfig.landing_subtext}
              </p>
            </div>
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

export default LandingPhotoParagraph;
