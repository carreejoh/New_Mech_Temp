// components/about/AboutUsSingleImage.tsx
import React from "react";
import { aboutUsConfig } from "../../App";

const AboutUsOwnerTeamFlex = React.forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div ref={ref} className="relative px-6 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48 py-16 text-base-content">
            <h2 className="text-3xl font-bold font-LemonMilk text-center mb-12 text-base-content">
                About Us
            </h2>

            <section className="w-full px-6 sm:px-8 md:px-12 py-16 text-base-content">
                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start justify-center">

                    {/* Owner Block */}
                    <div className="flex flex-col lg:w-1/3 items-center lg:items-start gap-6">
                    <h3 className="text-2xl font-semibold">Meet the Owner</h3>
                        <img
                            src={aboutUsConfig.owner_image}
                            alt="Owner"
                            className="bg-[#7C7C7C] brightness-80 rounded-sm border-[2px] object-cover shadow-md h-64 w-64"
                        />
                        <div className="space-y-3 text-center lg:text-left">
                            <p className="text-base-content/70 text-md leading-relaxed indent-10">
                                "{aboutUsConfig.owner_description}"
                            </p>
                            <p className="text-right text-xl font-semibold">– {aboutUsConfig.owner_name}</p>
                        </div>
                    </div>

                    {/* Team Block */}
                    <div className="flex flex-col lg:w-2/3 items-center lg:items-start gap-6">
                    <h3 className="text-2xl font-semibold">Meet the Mechanics</h3>
                        <img
                            src={aboutUsConfig.team_image}
                            alt="Team"
                            className="w-full max-w-md bg-[#7C7C7C] brightness-80 rounded-sm border-[2px] object-cover shadow-md max-h-[400px]"
                        />
                        <div className="space-y-3 text-center lg:text-left">
                            <p className="text-base-content/70 text-md leading-relaxed indent-10">
                                "{aboutUsConfig.team_description}"
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
});

export default AboutUsOwnerTeamFlex;
