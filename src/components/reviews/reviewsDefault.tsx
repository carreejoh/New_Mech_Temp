import React from "react";
import { reviewsConfig } from "../../App";
import { getRelativeTime } from "../functions/functions";

const ReviewsDefault: React.FC = () => {
    return (
        <section
            className="px-6 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48 py-16 bg-base-300 text-base-content"
        >
            <h2 className="text-3xl font-bold font-LemonMilk text-center mb-12 text-base-content">
                What Our Customers Are Saying:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8">
                {reviewsConfig.map((review, index) => (
                    <div key={index} className="card bg-base-100 w-full shadow-md p-6 space-y-4">
                        {/* Reviewer Name and Date */}
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-base-content/90">{review.fullName}</h3>
                            <span className="text-sm text-base-content/60">{getRelativeTime(review.timePosted)}</span>
                        </div>

                        {/* Star Rating */}
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <input
                                    key={star}
                                    type="radio"
                                    name={`rating-${index}`}
                                    className="mask mask-star-2 bg-primary"
                                    checked={review.reviewValue === star}
                                    readOnly
                                />
                            ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-base-content text-sm">{review.reviewText}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ReviewsDefault;
