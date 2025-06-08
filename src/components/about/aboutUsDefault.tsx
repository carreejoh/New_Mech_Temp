// components/about/AboutUsDoubleImage.tsx
import React from "react";

const AboutUsDefault = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="px-6 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48 py-16 bg-base-300 text-base-content"
    >
      <h2 className="text-3xl font-bold font-LemonMilk text-center mb-12 text-base-content/80">
        About Us
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Block 1 */}
        <div className="flex flex-col gap-4">
          <img
            src="/about_imgs/shop_interior.jpg"
            alt="Interior of the shop"
            className="w-full rounded-sm object-cover shadow-md max-h-[280px]"
          />
          <p className="text-base-content">
            Our state-of-the-art facility is designed for speed, accuracy, and comfort. From diagnostics to repairs, every detail is crafted with precision and care.
          </p>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col gap-4">
          <img
            src="/about_imgs/team_photo.jpg"
            alt="Our team"
            className="w-full rounded-sm object-cover shadow-md max-h-[280px]"
          />
          <p className="text-base-content">
            We're a team of experienced, certified professionals with a passion for problem-solving and customer satisfaction. You're not just a number here — you're part of the family.
          </p>
        </div>
      </div>
    </section>
  );
});

export default AboutUsDefault;
