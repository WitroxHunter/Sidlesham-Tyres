export default function SectionTitle(props) {
  return (
    <>
      <div className="sectionTitleBox">
        <h1 className="sectionTitle">{props.title}</h1>
        <span className="FontVerySmall sectionSubTitle">{props.subtitle}</span>
      </div>
    </>
  );
}
