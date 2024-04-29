export default function SectionTitle(props) {
  return (
    <>
      <div className="sectionTitleBox">
        <h1 className="sectionTitle">{props.title}</h1>
        <div className="sectionSubLine">
          <div className="sectionLine"></div>
          <div className="FontVerySmall sectionSubTitle">{props.subtitle}</div>
          <div className="sectionLine"></div>
        </div>
      </div>
    </>
  );
}