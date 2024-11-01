import AuthForm from "../components/fragments/AuthForm";
import AuthLayout from "../components/layouts/AuthLayout";


const AuthPage = () => {
const urlPath = window.location.pathname

return (
    <AuthLayout>
    <AuthForm title={urlPath.slice(1, urlPath.length)}/>
    </AuthLayout>
)
};

export default AuthPage;