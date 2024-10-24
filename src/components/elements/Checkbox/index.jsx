/* eslint-disable react/prop-types */

const Checkbox = ({ id, label }) => (
    <div className="flex items-center">
        <input
            type="checkbox"
            id={id}
            className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
        />
        <label htmlFor={id} className="ml-2 text-sm text-gray-700">
            {label}
        </label>
    </div>
);

export default Checkbox;