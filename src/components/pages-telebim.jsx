export default function PagesTelebim(props) {
  return (
    <>
      <div className={`pages-telebim stylizedBox ${props.background}`}>
        <div className="pages-telebim-box">
          <h1 className="colorUIorange">{props.sectionName}</h1>
          <span className="fontSizeMid">{props.text}</span>
        </div>
      </div>
    </>
  );
}
