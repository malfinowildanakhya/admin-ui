import FormField from '../elements/Input'
import Button from '../elements/Button'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    return (
        <form className="space-y-4">
            <FormField label="Full Name" type="text" placeholder="John Doe" id="name" required />
            <FormField label="Email Address" type="email" placeholder="hello@example.com" id="email" required />
            <FormField label="Password" type="password" placeholder="********" id="password" required />
            <Button type="submit" variant="primary">Register</Button>
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
            <p className="mt-4 text-sm text-center text-teal-600 cursor-pointer">Already have an account? <Link to="/login" className="text-teal-700 underline">Login</Link></p>
        </form>
    )
}

export default RegisterForm