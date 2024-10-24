/* eslint-disable react/prop-types */
const Label = ({ htmlFor, children }) => (
    <label
    htmlFor={htmlFor}
    className="block w-full text-sm font-medium text-gray-700 text-start"
    >
    {children}
    </label>
);

export default Label;