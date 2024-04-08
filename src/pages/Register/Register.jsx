import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister=(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
    }
    return (
        <div className="w-1/2 mx-auto">
        <h2 className="text-3xl my-10 text-center">Register your account</h2>
            <form onSubmit={handleRegister} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        id="name"
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        id="email"
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label htmlFor="photo">PhotoURL</label>
                    <input
                        type="url"
                        name="email"
                        placeholder="photoURL"
                        id="photo"
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        id="password"
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="btn btn-primary bg-green-500 border-none">
                        Register
                    </button>
                </div>
                <p className="text-center mt-4">
                        Already have an account?{" "}
                        <Link
                            className=" text-blue-600 font-bold"
                            to={"/login"}>
                            Login
                        </Link>{" "}
                    </p>
            </form>
        </div>
    );
};

export default Register;
