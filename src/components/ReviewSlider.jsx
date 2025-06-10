import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import UmerFayyazImg from "../assets/reviews/umer-fayyaz.png";
import AneebRyanImg from "../assets/reviews/aneeb-ryan.png";
import ZainabTariqImg from "../assets/reviews/zainab-tariq.png";
import MoinUmarImg from "../assets/reviews/moin-umar.png";
import RiffatAfzaalImg from "../assets/reviews/riffat-afzaal.png";

// Review data
const reviews = [
  {
    name: "Umer Fayyaz",
    text: "Great platform, very efficient and works really well on both phone and web. I think this is the most easiest way of booking appointments in Pakistan as it has made the whole process much more efficient.",
    image: UmerFayyazImg,
  },
  {
    name: "Aneeb Ryan",
    text: "A very helpful app for booking appointments and searching for the required doctors. Has made my life a lot easy. I would strongly recommend this to all.",
    image: AneebRyanImg,
  },
  {
    name: "Zainab Tariq",
    text: "Literally the best website to book the appointments online for Doctors. The service is great, helpline guys are very cooperative and understanding. And I don't have to hassle through different hospitals anymore now.",
    image: ZainabTariqImg,
  },
  {
    name: "Moin Umar",
    text: "The only good healthcare website in Pakistan. The suggested doctors are good and the doctors on the forum are very responsive too.",
    image: MoinUmarImg,
  },
  {
    name: "Riffat Afzaal",
    text: "Very helpful staff. Helped me book appointment with my gastroenterologist. I do all my scheduling through oladoc now. Thanks a bunch.",
    image: RiffatAfzaalImg,
  },
];

// Star Rating Component
const StarRating = () => (
  <div className="flex justify-center mb-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar key={i} className="text-yellow-400 text-sm" />
    ))}
  </div>
);

// Single Review Card
const ReviewCard = ({ review }) => (
  <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 mx-3 shadow-md">
    <StarRating />
    <p className="text-gray-700 text-sm mb-4 text-center leading-relaxed">
      "{review.text}"
    </p>
    <div className="flex flex-col items-center mt-4">
      <img
        src={review.image}
        alt={review.name}
        className="w-14 h-14 rounded-full border-2 border-orange-400 object-cover"
      />
      <p className="mt-2 text-blue-800 font-semibold text-sm">
        {review.name}
      </p>
    </div>
  </div>
);

// Slider Container
const ReviewSlider = () => {
  const sliderRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 320;
    if (direction === "left") {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="py-12 bg-gray-50 text-center relative">
      <h2 className="text-3xl font-bold mb-2">
        Our Customers <span className="text-blue-800">love us</span>
      </h2>
      <p className="text-gray-600 mb-8">
        Check out the reviews from our satisfied customers
      </p>

      <div className="relative max-w-6xl mx-auto">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth px-6 no-scrollbar"
        >
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
