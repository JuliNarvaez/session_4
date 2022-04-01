// dumb component
export default function Scaffold(props) {
  return (
    <div className="main">
      <h3 className="main_subtitle">{props.subTitle}</h3>
      <h1 className="main_title">{props.mainTitle}</h1>
      <div className="main-container">
      {props.children}
      </div>
    </div>
  );
}
