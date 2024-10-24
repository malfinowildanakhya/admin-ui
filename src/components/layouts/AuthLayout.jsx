/* eslint-disable react/prop-types */
const AuthLayout = ({ children }) => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 bg-white rounded-lg">
        <h2 className="text-4xl font-bold text-center text-teal-600 mb-10">FINEbank.IO</h2>
            {children}
        </div>
    </div>
);

export default AuthLayout;