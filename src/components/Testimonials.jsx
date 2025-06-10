// Import images
import UmerFayyazImg from "../assets/reviews/umer-fayyaz.png";
import AneebRyanImg from "../assets/reviews/aneeb-ryan.png";
import ZainabTariqImg from "../assets/reviews/zainab-tariq.png";
import MoinUmarImg from "../assets/reviews/moin-umar.png";
import RiffatAfzaalImg from "../assets/reviews/riffat-afzaal.png";
import React from "react";
import "./Testemonial.css";

// Import your images here
// import UmerFayyazImg from '../assets/images/umer-fayyaz.jpg';
// import AneebRyanImg from '../assets/images/aneeb-ryan.jpg';
// import ZainabTariqImg from '../assets/images/zainab-tariq.jpg';
// import MoinUmarImg from '../assets/images/moin-umar.jpg';
// import RiffatAfzaalImg from '../assets/images/riffat-afzaal.jpg';

const reviews = [
  {
    name: "Umer Fayyaz",
    text: "Great platform, very efficient and works really well on both phone and web. I think this is the most easiest way of booking appointments in Pakistan as it has made the whole process much more efficient.",
    image: UmerFayyazImg, // Replace with UmerFayyazImg
    date: "March 2025",
  },
  {
    name: "Aneeb Ryan",
    text: "A very helpful app for booking appointments and searching for the required doctors. Has made my life a lot easy. I would strongly recommend this to all.",
    image: AneebRyanImg,
    date: "February 2025",
  },
  {
    name: "Zainab Tariq",
    text: "Literally the best website to book the appointments online for Doctors. The service is great, helpline guys are very cooperative and understanding. And I don't have to hassle through different hospitals anymore now.",
    image: ZainabTariqImg,
    date: "January 2025",
  },
  {
    name: "Moin Umar",
    text: "The only good healthcare website in Pakistan. The suggested doctors are good and the doctors on the forum are very responsive too.",
    image: MoinUmarImg,
    date: "December 2025",
  },
  {
    name: "Riffat Afzaal",
    text: "Very helpful staff. Helped me book appointment with my gastroenterologist. I do all my scheduling through HEALR now. Thanks a bunch.",
    image: RiffatAfzaalImg,
    date: "November 2025",
  },
];
const shuffledReviews = [...reviews].sort(() => 0.5 - Math.random());
const selectedReviews = shuffledReviews.slice(0, 3);
const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <h2>What Our Users Say</h2>
        {/* <p>
          Explore the experiences of our users as they enjoy the convenience of
          booking appointments on HEALR.
        </p> */}
      </div>

      <div className="testimonial-cards">
        {selectedReviews.length > 0 ? (
          selectedReviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <div className="user-info">
                <img
                  src={review.image}
                  alt={`${review.name} profile`}
                  className="profile-image"
                />
                <div className="user-details">
                  <h5 className="user-name">{review.name}</h5>
                  <p className="review-date">{review.date}</p>
                </div>
              </div>
              <p className="review-text">"{review.text}"</p>
            </div>
          ))
        ) : (
          <p className="no-reviews">
            No feedback yet. Be the first to share your experience!
          </p>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
