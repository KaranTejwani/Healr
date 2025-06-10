import React from 'react';
import { Star } from 'lucide-react';

import umerFayyazImg from '../assets/reviews/umer-fayyaz.png';
import aneebRyanImg from '../assets/reviews/aneeb-ryan.png';
import zainabTariqImg from '../assets/reviews/zainab-tariq.png';
import moinUmarImg from '../assets/reviews/moin-umar.png';
import riffatAfzaalImg from '../assets/reviews/riffat-afzaal.png';

const ReviewsSlider = () => {
  const reviews = [
    {
      id: 1,
      name: "Umer Fayyaz",
      image: umerFayyazImg,
      rating: 5,
      text: "Great platform, very efficient and works really well on both phone and web. I think this is the most easiest way of booking appointments in Pakistan as it has made the whole process much more efficient."
    },
    {
      id: 2,
      name: "Aneeb Ryan",
      image: aneebRyanImg,
      rating: 5,
      text: "A very helpful app for booking appointments and searching for the required doctors. Has made my life a lot easy. I would strongly recommend this to all"
    },
    {
      id: 3,
      name: "Zainab Tariq",
      image: zainabTariqImg,
      rating: 5,
      text: "Literally the best website to book the appointments online for Doctors. The service is great, helpline guys are very cooperative and understanding. And I don't have to hassle through different hospitals anymore now."
    },
    {
      id: 4,
      name: "Moin Umar",
      image: moinUmarImg,
      rating: 5,
      text: "Outstanding service! The interface is user-friendly and booking appointments has never been easier. Highly recommended for everyone looking for quick medical consultations."
    },
    {
      id: 5,
      name: "Riffat Afzaal",
      image: riffatAfzaalImg,
      rating: 5,
      text: "Amazing experience using this platform. The doctors are professional and the booking process is seamless. This has definitely improved healthcare accessibility."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Our Customers <span className="text-orange-500">love us</span>
          </h2>
          <p className="text-gray-600">Check out the reviews from our satisfied customers</p>
        </div>

        {/* Horizontally Scrollable Reviews */}
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-orange-200 scrollbar-track-gray-100 py-4">
          <div className="flex gap-8 min-w-[900px] md:min-w-[1200px] lg:min-w-[1500px] px-2">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-[370px] bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center justify-between border border-gray-100"
              >
                {/* Star Rating */}
                <div className="flex justify-center mb-6">
                  <div className="bg-orange-100 px-5 py-2 rounded-xl flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                {/* Review Text */}
                <p className="text-gray-700 text-center mb-8 leading-relaxed text-base font-medium">
                  “{review.text}”
                </p>
                {/* Reviewer Info */}
                <div className="flex flex-col items-center mt-auto">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-4 border-orange-200">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=f97316&color=fff&size=64`;
                      }}
                    />
                  </div>
                  <h4 className="font-semibold text-orange-600 text-base mt-1">{review.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSlider;