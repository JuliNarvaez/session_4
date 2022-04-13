export default function NumberButton({ onClick, buttonName }) {
  return (
    <button className="button" onClick={onClick}>
      {buttonName}
    </button>
  );
}
