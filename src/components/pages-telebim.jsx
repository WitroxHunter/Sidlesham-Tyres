import AnimatedComponent from "./Reveal";

export default function PagesTelebim(props) {
  return (
    <>
      <div className={`pages-telebim-background ${props.background}`}>
        <div className="pages-telebim">
          <div className="pages-telebim-darkening" />
          <div className="pages-telebim-box">
            <AnimatedComponent>
              <h1 className="colorUIorange">{props.sectionName}</h1>
              <div className="fontSizeMid">{props.text}</div>
            </AnimatedComponent>
          </div>
        </div>
      </div>
    </>
  );
}
