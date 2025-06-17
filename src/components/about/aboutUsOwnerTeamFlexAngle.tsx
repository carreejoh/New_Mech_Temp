import React from "react";
import { aboutUsConfig } from "../../App";

const AboutUsOwnerTeamFlexAngle = React.forwardRef<HTMLDivElement>((_, ref) => {

    const width = 75;
    const angle = 26;

    const angleRadians = (angle * Math.PI) / 180;
    const heightFactor = Math.tan(angleRadians);
    const offset = Math.min(Math.max(width - heightFactor * 100, 0), 100);

    const clipPath = `polygon(0 0, ${width}% 0, ${offset}% 100%, 0% 100%)`;

    return (
        <section
            ref={ref}
            className="relative w-full overflow-hidden px-6 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48 py-16 text-base-content bg-base-100"
        >

            {/* Divider Overlay */}
            <div className="absolute inset-0 z-0 hidden md:block">
                <div
                    className="absolute inset-0"
                    style={{
                        clipPath,
                        backgroundColor: "rgba(24,24,24)",
                    }}
                />
                <div className="absolute inset-0 bg-base-300 opacity-10" />
            </div>

            <h2 className="relative z-10 text-3xl font-bold font-LemonMilk text-left mb-16 text-base-content">
                About Us
            </h2>

            <div className="relative z-10 flex flex-col-reverse md:flex-row gap-12 items-center justify-between mx-auto">
                {/* Team Section */}
                <div className="flex flex-col gap-6 text-center md:text-left md:w-1/2 items-center md:items-start">
                    <h3 className="text-2xl font-semibold text-base-content -mb-2">Meet the Team</h3>
                    <p className="text-md leading-relaxed indent-6 text-base-content/70 max-w-3xl">
                        "{aboutUsConfig.team_description}"
                    </p>
                    <img
                        src={aboutUsConfig.team_image}
                        alt="Team"
                        className="w-full max-w-xl brightness-80 rounded-sm border-2 object-cover shadow-md max-h-[300px]"
                    />
                </div>

                {/* Owner Section */}
                <div className="flex flex-col gap-6 text-center items-center md:text-right md:w-1/2 md:items-end">
                    <h3 className="text-2xl font-semibold text-base-content">Meet the Owner</h3>
                    <img
                        src={aboutUsConfig.owner_image}
                        alt="Owner"
                        className="w-[40%] max-w-sm brightness-80 rounded-sm border-2 object-cover shadow-md"
                    />
                    <p className="text-md leading-relaxed indent-6 text-base-content/70 max-w-3xl">
                        "{aboutUsConfig.owner_description}"
                    </p>
                    <p className=" text-xl text-base-content font-semibold w-full">
                        - {aboutUsConfig.owner_name}
                    </p>
                </div>
            </div>
        </section>
    );
});

export default AboutUsOwnerTeamFlexAngle;
