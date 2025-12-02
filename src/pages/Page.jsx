import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

function LoginPage() {
    useEffect(() => {
        console.log('Login')
    }, [])

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");

        const loginData = {
            email: email,
            password: password
        }

        console.log(loginData)
        navigate('/todo')
    }

    return (
        <div className="container mx-auto w-full">
            <div className="flex items-center justify-center h-screen">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <form onSubmit={handleLogin}>
                        <legend className="fieldset-legend">Login</legend>

                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name="email" />

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name="password" />

                        <button type="submit" className="btn btn-neutral mt-4">Login</button>
                    </form>
                <Link to={'/signup'}>Signup </Link>
                </fieldset>
            </div>
        </div>
    )
}

export default LoginPage