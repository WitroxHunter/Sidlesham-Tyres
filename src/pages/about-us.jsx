import Header from "../components/header";
import PagesTelebim from "../components/pages-telebim";
import "./about-us.css";

function Subline(props) {
  <>
    <div className="sectionSubLine">
      <div className="sectionLine"></div>
      <div className="section-line-text">{props.title}</div>
      <div className="sectionLine"></div>
    </div>
  </>;
}

export default function AboutUs() {
  return (
    <>
      <Header />
      <PagesTelebim
        sectionName="About us"
        text="Top company in the area specializing in tire changes and other automotive services."
        background="about-us-background"
      />

      <div className="main">
        <Subline title="Our mission" />
        sdfs
      </div>
    </>
  );
}
