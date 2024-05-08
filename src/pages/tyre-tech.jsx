import Header from "../components/header";
import PagesTelebim from "../components/pages-telebim";
import TireMarks from "../components/splitterTireMarks";
import Footer from "../components/footer";

import "./tyre-tech.css";

export default function TyreTech() {
  return (
    <>
      <Header />
      <PagesTelebim
        sectionName="Tyre tech"
        text="Top company in the area specializing in tire changes and other automotive services."
        background="tyre-tech-background"
      />

      <TireMarks />

      <div className="main-center">

      </div>

      <Footer />
    </>
  );
}
