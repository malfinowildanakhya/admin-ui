/* eslint-disable react/prop-types */
const Button = ({ type, onClick, children, variant }) => {
    const baseClasses = "w-full py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500";
    const variantClasses = variant === "primary"
        ? "text-white bg-teal-600 hover:bg-teal-700"
        : "text-gray-700 bg-gray-100 border border-gray-300 hover:bg-gray-200";

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${ baseClasses } ${ variantClasses }`}
        >
            {children}
        </button>
    );
};

export default Button