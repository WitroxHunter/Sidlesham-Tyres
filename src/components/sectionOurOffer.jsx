import image from "../assets/images/telebim_background.jpg";
import navigate from "../assets/icons/navigate.svg";

const OfferCard = (props) => {
  return (
    <>
      <div className="offerCard">
        <div className="stylizedBox">
          <div className={`offerImage ${props.photo}`}></div>
        </div>

        <div className="offerHyperlink">
          <div className="reachUsContactIconBack">
            <img src={navigate} className="reachUsContactIcon" />
          </div>
          <span>{props.offerText}</span>
        </div>
      </div>
    </>
  );
};

export default function SectionOurOffer() {
  return (
    <>
      <div className="leftSide">
        <OfferCard
          offerText="Wheel balancing"
          photo="wheel-balancing-background"
        />
        <OfferCard
          offerText="Puncture repairs"
          photo="puncture-repairs-background"
        />
        <OfferCard
          offerText="Tyre replacements"
          photo="tyre-replacements-background"
        />
      </div>

      <div className="rightSide">
        <OfferCard
          offerText="Tube replacements"
          photo="tube-replacements-background"
        />
        <OfferCard
          offerText="Pressure check"
          photo="pressure-check-background"
        />
        <OfferCard
          offerText="Tyre check"
          photo="tyre-check-background"
        />
      </div>
    </>
  );
}
