import quote from "../assets/images/quote.png";
import star from "../assets/images/star.svg";

function Testimonial(props) {
  return (
    <>
      <div className={`stylizedBox testimonial ${props.class}`}>
        <img className="quote" src={quote} />
        <div className="testimonial-name">
          <span>{props.name}</span>
        </div>
        <div className="testimonial-stars-bar">
          <img src={star} className="star" />
          <img src={star} className="star" />
          <img src={star} className="star" />
          <img src={star} className="star" />
          <img src={star} className="star" />
        </div>
        <div className="testimonial-content">{props.content}</div>
        <div className="testimonial-source">
          Source:{" "}
          <a href="https://www.google.com/maps/place/Sidlesham+Tyres/@50.7945549,-0.8002914,17z/data=!4m8!3m7!1s0x487453b0fc85be59:0x2fa5e8ff333cd02a!8m2!3d50.7945515!4d-0.7977111!9m1!1b1!16s%2Fg%2F11b7hsfmb2?authuser=0&entry=ttu">
            <span>Google Maps</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default function SectionTestimonials() {
  return (
    <>
      <div className="testimonials-box">
        <Testimonial
          name="Ian “Haggis” Gatens"
          content="Good prices, solution orientated, friendly, great service. Got me out of a pickle and on my way home same day. One phone call, short notice supply and fit of two tyres to make my towing rig safe & sound. Highly recommended. Thank you."
          class="testimonial1"
        />
        <Testimonial
          name="Mark Davis"
          content="Visited Sidlesham tyres with a possible slow picture problem. The problem was identified and sorted out in a thorough and professional manner. The cost was very competitive and I was very happy with the service and care taken to my car. I would happily recommend Sidlesham Tyres and will not hesitate to use them in the future."
          class="testimonial2"
        />
        <Testimonial
          name="Richard Sells"
          content="Once again Joel and Kristy and their team did a wonderful job for us. Four new tyres fitted to my wife's car, at cheaper prices than the high street brands. I recommend these guys!"
          class="testimonial3"
        />
      </div>
    </>
  );
}
