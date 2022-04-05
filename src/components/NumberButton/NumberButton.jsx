export default function NumberButton({ funcType, buttonName }) {
  return (
    <button className="button" onClick={funcType}>
      {buttonName}
    </button>
  );
}

