/* eslint-disable react/prop-types */
const Input = ({ type, placeholder, id, required }) => (
    <input
    type={type}
    id={id}
    placeholder={placeholder}
    required={required}
    className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
    />
);

export default Input;