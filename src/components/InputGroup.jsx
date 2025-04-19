import PropTypes from "prop-types";

export function InputGroup({
  id,
  placeholder,
  type,
  labelText,
  onChange,
  value,
  optional,
  recommended,
  "data-key": dataKey, // Using bracket notation for special prop names
}) {
  return (
    <div className="input-group">
      <label htmlFor={id}>
        <span className="label-text">{labelText}</span>
        {optional && <span className="optional-text">optional</span>}
        {recommended && <span className="recommended-text">recommended</span>}
      </label>

      {type === "text-area" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        />
      )}
    </div>
  );
}

// Add PropTypes for validation
InputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  optional: PropTypes.bool,
  recommended: PropTypes.bool,
  "data-key": PropTypes.string, // Since it's a special prop name, use quotes
};

// Define default props 
InputGroup.defaultProps = {
  placeholder: "",
  value: "",
  optional: false,
  recommended: false,
  "data-key": "",
};

