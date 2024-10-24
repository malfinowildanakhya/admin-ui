import { Link } from "react-router-dom"
import Button from "../elements/Button"
import FormField from "../elements/Input"


const ForgetPasswordForm = () => {
    return (
        <div className="space-y-4">
            <p className="text-center text-sm text-gray-600">Enter your email address and we&apos;ll send you a link to reset your password</p>
            <form className="space-y-4">
                <FormField label="Email Address" type="email" placeholder="hello@example.com" id="email" required />
                <Button type="submit" variant="primary">Reset Password</Button>
            </form>
            <Link to="/login" className="block text-center text-sm text-gray-600">Remember your password? <p className="text-teal-600 hover:text-teal-700">Back to Login</p></Link>
        </div>
    )
}

export default ForgetPasswordForm
