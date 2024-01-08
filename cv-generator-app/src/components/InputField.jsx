import "../styles/InputField.css";

export default function InputField({
  /* eslint-disable react/prop-types */
  id,
  placeholder,
  type,
  labelText,
  onChange,
  value,
  "data-key": dataKey,
}) {
  return (
    <div className="input-field">
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        data-key={dataKey}
      />
    </div>
  )
}