import quote from "../assets/images/quote.png";
import star from "../assets/images/star.svg";

export default function SectionTestimonials() {
  return (
    <>
      <div className="testimonials-box">
        <div className="stylizedBox testimonial">
          <img className="quote" src={quote} />
          <div className="testimonial-name">
            <span>Ian “Haggis” Gatens</span>
          </div>
          <div className="testimonial-stars-bar">
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
          </div>
          <div className="testimonial-content">
            Good prices, solution orientated, friendly, great service. Got me
            out of a pickle and on my way home same day. One phone call, short
            notice supply and fit of two tyres to make my towing rig safe &
            sound. Highly recommended. Thank you.
          </div>
          <div className="testimonial-source">Source: Google Maps</div>
        </div>
        <div className="stylizedBox testimonial">
          <img className="quote" src={quote} />
          <div className="testimonial-name">
            <span>Ian “Haggis” Gatens</span>
          </div>
          <div className="testimonial-stars-bar">
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
          </div>
          <div className="testimonial-content">
            Good prices, solution orientated, friendly, great service. Got me
            out of a pickle and on my way home same day. One phone call, short
            notice supply and fit of two tyres to make my towing rig safe &
            sound. Highly recommended. Thank you.
          </div>
          <div className="testimonial-source">Source: Google Maps</div>
        </div>
        <div className="stylizedBox testimonial">
          <img className="quote" src={quote} />
          <div className="testimonial-name">
            <span>Ian “Haggis” Gatens</span>
          </div>
          <div className="testimonial-stars-bar">
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
          </div>
          <div className="testimonial-content">
            Good prices, solution orientated, friendly, great service. Got me
            out of a pickle and on my way home same day. One phone call, short
            notice supply and fit of two tyres to make my towing rig safe &
            sound. Highly recommended. Thank you.
          </div>
          <div className="testimonial-source">Source: Google Maps</div>
        </div>
      </div>
    </>
  );
}
