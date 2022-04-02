export default function NumberButton (props) {
    return (
    <button className= "button" onClick={props.funcType}>
        {props.buttonName}
    </button>
    );
}