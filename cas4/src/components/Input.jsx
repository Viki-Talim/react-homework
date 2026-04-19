export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  setToggle,
  isMultiline,
  showPasswordProp,
  hidePasswordProp,
}) => {
  return (
    <p>
      {name === "comment" && isMultiline ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows="4"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      )}
      {name === "comment" && (
        <button type="button" onClick={setToggle}>
          <i className={isMultiline ? "fa fa-compress" : "fa fa-expand"}></i>
        </button>
      )}

      {name === "togglePass" && (
        <button
          type="button"
          onMouseDown={showPasswordProp}
          onMouseUp={hidePasswordProp}
          onMouseLeave={hidePasswordProp}
          className="eye-button"
        >
          <i
            className={type === "password" ? "fa fa-eye-slash" : "fa fa-eye"}
          ></i>
        </button>
      )}
    </p>
  );
};
