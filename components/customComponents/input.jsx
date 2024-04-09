const CustomInput = ({
  type,
  name,
  placeholder,
  label,
  value,
  handleInput,
}) => {
  return (
    <>
      <label htmlFor={name} className="block mb-1">
        {label}
      </label>

      <input
        type={type}
        name={name}
        id={name}
        className="rounded-md border w-full outline-none h-9 px-3 text-sm"
        placeholder={placeholder}
        value={value}
        onInput={(e) => handleInput(e.target.value)}
      />
    </>
  );
};

export default CustomInput;
