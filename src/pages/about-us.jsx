import Header from "../components/header";
import PagesTelebim from "../components/pages-telebim";
import Footer from "../components/footer";
import "./about-us.css";

function Subline(props) {
  return (
    <>
      <div className="sectionSubLine">
        <div className="sectionLine"></div>
        <div className="section-line-text">{props.title}</div>
        <div className="sectionLine"></div>
      </div>
    </>
  );
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

      <div className="main-center">
        <Subline title="Our story" />
        <Subline title="Our story" />
        <Subline title="Our story" />
      </div>
      <Footer />
    </>
  );
}
