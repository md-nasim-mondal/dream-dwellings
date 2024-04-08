import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="w-1/2 mx-auto">
            <h2 className="text-3xl my-10 text-center">Login your account</h2>
            <form className="flex flex-col gap-4">
                <div>
                <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        className="input input-bordered w-full"
                        
                    />
                </div>
                <div>
                <label htmlFor="password">Password </label>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        className="input input-bordered w-full"
                        
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
                <p className="text-center mt-4">Don&apos;t have an account? <Link className=" text-blue-600 font-bold" to={"/register"}>Register</Link> </p>
            </form>
        </div>
    );
};

export default Login;