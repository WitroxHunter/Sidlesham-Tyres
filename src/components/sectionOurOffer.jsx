import image from "../assets/images/telebim_background.jpg";
import navigate from "../assets/icons/navigate.svg";

const OfferCard = (props) => {
  return (
    <>
      <div className="offerCard">
        <div className="stylizedBox">
          <div className="offerImage"></div>
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
        <OfferCard offerText="Tyre replacements" />
        <OfferCard offerText="Tyre replacements" />
        <OfferCard offerText="Tyre replacements" />
      </div>

      <div className="rightSide">
        <OfferCard offerText="Tyre replacements" />
        <OfferCard offerText="Tyre replacements" />
        <OfferCard offerText="Tyre replacements" />
      </div>
    </>
  );
}
