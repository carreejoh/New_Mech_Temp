// components/about/AboutUsSingleImage.tsx
import React from "react";
import { aboutUsConfig, aboutUsCardConfig } from "../../App";

const AboutUsOwnerTeam = React.forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div ref={ref} className="relative px-6 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48 py-16 text-base-content">
            <h2 className="text-3xl font-bold font-LemonMilk text-center mb-12 text-base-content">
                About Us
            </h2>

            {/* Meet owner */}

            <section
                className="flex items-center justify-center"
            >
                <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl">
                    <div className="lg:w-3/4 gap-4 flex flex-col">
                        <h3 className="text-2xl font-semibold">Meet the owner</h3>
                        <p className="text-base-content text-md leading-relaxed indent-10 text-base-content/70 text-center lg:text-left">
                            "{aboutUsConfig.owner_description}"
                        </p>
                        <p className="text-right text-xl text-base-content font-semibold">
                            -{aboutUsConfig.owner_name}
                        </p>
                    </div>

                    <img
                        src={aboutUsConfig.owner_image}
                        alt="Owner"
                        className="w-[70%] sm:w-[50%] bg-[#7C7C7C] lg:w-1/4 brightness-80 rounded-sm border-[2px] object-cover shadow-md max-h-[400px]"
                    />
                </div>
            </section>


            {/* Meet the team */}

            {/* One picture */}

            {/* <section
                className="flex items-center justify-center mt-12"
            >
                <div className="flex flex-col items-center gap-10 max-w-5xl">

                    <div className="gap-4 flex flex-col">
                        <h3 className="text-2xl text-center font-semibold">Meet the team</h3>
                        <p className="text-base-content text-md leading-relaxed indent-10 text-base-content/70 text-center lg:text-left">
                            "{aboutUsConfig.team_description}"
                        </p>
                    </div>

                    <img
                        src={aboutUsConfig.team_image}
                        alt="Owner"
                        className="w-[70%] sm:w-[50%] bg-[#7C7C7C] lg:w-3/4 brightness-80 rounded-sm border-[2px] object-cover shadow-md max-h-[400px]"
                    />
                </div>
            </section> */}

            {/* Mutliple pictures */}

            <section
                className="flex items-center justify-center mt-12"
            >
                <div className="flex flex-col items-center gap-10 max-w-8xl">

                    <div className="gap-4 flex flex-col">
                        <h3 className="text-2xl text-center font-semibold">Meet the team</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mb-8">
                        {aboutUsCardConfig.map((person: any, index: number) => (
                            <div key={index} className="card bg-base-100 w-full shadow-md">
                                <figure>
                                    <img
                                        src={person.image}
                                        alt={person.fullName}
                                        className="brightness-80 w-full h-48 object-cover"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-base-content text-2xl font-bold">
                                        {person.fullName}
                                    </h2>
                                    <p className="text-sm text-base-content/80 mb-2">{person.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
});

export default AboutUsOwnerTeam;
