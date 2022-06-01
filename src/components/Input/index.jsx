import "./style.css"

export const Input = ({ type, placeholder, value, onChange, id, onKeyPress }) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};
