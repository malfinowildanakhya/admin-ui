import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Link to="/login" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mr-4">Login</Link>
            <Link to="/register" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">Register</Link>
        </div>
    )
}

export default Home