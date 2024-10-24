import { Link } from "react-router-dom";
import Button from "../elements/Button";
import Checkbox from "../elements/Checkbox";
import FormField from "../elements/Input";

const LoginForm = () => (
    <form className="space-y-4">
        <FormField label="Email Address" type="email" placeholder="hello@example.com" id="email" required />
        <FormField label="Password" type="password" placeholder="********" id="password" required />
        <Checkbox id="keep-signed-in" label="Keep me signed in" />
        <Button type="submit" variant="primary">Login</Button>
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
        <Link to="/register" className="block mt-4 text-sm text-center text-teal-600 cursor-pointer">Create an account</Link>
        <Link to="/forget-password" className="block mt-2 text-xs text-center text-gray-400 cursor-pointer">Forgot your password?</Link>
    </form>
);

export default LoginForm;