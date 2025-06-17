// components/about/AboutUsSingleImage.tsx
import React from "react";
import { aboutUsConfig } from "../../App";

const AboutUsSingleImage = React.forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section
            ref={ref}
            className="px-6 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48 py-16 bg-base-300 text-base-content"
        >
            <h2 className="text-3xl font-bold font-LemonMilk text-center mb-12 text-base-content">
                Our Story
            </h2>
            <div className="flex flex-col gap-10 items-center">
                <p className="text-base-content lg:w-1/2 text-lg leading-relaxed indent-10">
                    "{aboutUsConfig.description}"
                </p>
                <img
                    src={aboutUsConfig.team_image}
                    alt="Wide view of garage"
                    className="w-full lg:w-2/3 brightness-70 rounded-sm object-cover shadow-md max-h-[400px]"
                />
            </div>
        </section>
    );
});

export default AboutUsSingleImage;
