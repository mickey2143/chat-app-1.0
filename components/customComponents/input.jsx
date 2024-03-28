const CustomInput = ({ type, name, placeholder, label }) => {
  return (
    <>
      <label htmlFor={name} className="block mb-1">
        {label}
      </label>

      <input
        type={type}
        name={name}
        id={name}
        className="rounded-md border w-full outline-none h-9 px-3"
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomInput;
