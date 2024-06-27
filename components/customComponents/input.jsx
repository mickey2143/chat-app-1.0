const CustomInput = ({
  type,
  name,
  placeholder,
  label,
  value,
  handleInput,
  readOnly = false,
  labelColor = "text-black"
}) => {
  return (
    <>
      <label htmlFor={name} className={`block mb-1 ${labelColor}`}>
        {label}
      </label>

      <input
        type={type}
        name={name}
        id={name}
        className="rounded-md border w-full outline-none border-blue-950 placeholder:text-blue-950 h-9 px-3 text-sm"
        placeholder={placeholder}
        value={value}
        onInput={(e) => handleInput(e.target.value)}
        readOnly={readOnly}
      />
    </>
  );
};

export default CustomInput;
