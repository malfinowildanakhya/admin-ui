import FormField from '../elements/Input'
import Button from '../elements/Button'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const AuthForm = ({title}) => {
    return (
        <form className="space-y-4">
            {
                title === "register" &&
                <FormField label="Full Name" type="text" placeholder="John Doe" id="name" required />
            }
            <FormField label="Email Address" type="email" placeholder="hello@example.com" id="email" required />
            <FormField label="Password" type="password" placeholder="********" id="password" required />
            <Button type="submit" variant="primary">{title}</Button>
            <div className="text-center py-2 grid grid-cols-3 items-center">
                <hr className="border-gray-300" />
                <span className="inset-x-0 inline-block w-full text-sm text-gray-400 -top-3 bg-white px-2">or sign in with</span>
                <hr className="border-gray-300" />
            </div>
            <button className="w-full flex items-center justify-center my-10 bg-slate-200 p-4 rounded-lg" >
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" className="mr-2" />
                <div className="text-gray-600">
                    Continue with Google
                </div>
            </button>
            <p className="mt-4 text-sm text-center text-teal-600 cursor-pointer">{title === "register" ? "Already" : "Don't"} have an account? <Link to={title === "register" ? "/login" : "/register"} className="text-teal-700 underline">{title === "register" ? "Login" : "Register"}</Link></p>
            {
                title === "login" &&
                <Link to="/forget-password" className="block mt-2 text-xs text-center text-gray-400 cursor-pointer">Forgot your password?</Link>
            }
        </form>
    )
}

export default AuthForm