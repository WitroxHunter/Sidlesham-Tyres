export default function PagesTelebim(props) {
  return (
    <>
      <div className={`pages-telebim-background stylizedBoxNoBG ${props.background}`}>
        <div className={`pages-telebim`}>
          <div className="pages-telebim-box">
            <h1 className="colorUIorange">{props.sectionName}</h1>
            <div className="fontSizeMid">{props.text}</div>
          </div>
        </div>
      </div>
    </>
  );
}
