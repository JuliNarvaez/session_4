export default function TextInput({ type, placeholder, name, val, propFunc }) {
    return (
        <input
            type={type}
            name={name}
            value={val}
            onKeyUp={propFunc}
            placeholder={placeholder}
        />
    )
}