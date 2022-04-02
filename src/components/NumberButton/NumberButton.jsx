export default function NumberButton (props) {
    return (
    <button onClick={props.funcType}>
        {props.buttonName}
    </button>
    );
}