import "./style.css"

export const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
