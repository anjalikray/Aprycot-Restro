import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <div className="h-screen w-screen bg-circle-login">
            <div className="flex gap-5 justify-center h-screen w-screen">
                <div className="w-ful">
                    <img src="logo.png" alt="logo" className="mt-10 ml-10" />
                    <h1 className="text-center m-2 text-3xl font-semibold">
                        Sign In
                    </h1>
                    <p className="text-center m-2 text-slate-500 text-lg">
                        Sign in to stay connected.
                    </p>

                    <div className="ml-10">
                        <form className="grid gap-4">
                            <div className="flex flex-col gap-2">
                                <div className="grid gap-2">
                                    <label
                                        htmlFor="name"
                                        className="text-slate-500 text-lg"
                                    >
                                        Name
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="p-1 rounded-full border-solid border border-slate-300 focus:outline-red-300"
                                        style={{ width: "450px" }}
                                        type="text"
                                        required
                                    />
                                </div>

                                <label
                                    htmlFor="password"
                                    className="text-slate-500 text-lg"
                                >
                                    Password
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    className="p-1 rounded-full border-solid border border-slate-300 focus:outline-red-300"
                                    style={{ width: "450px" }}
                                    type="text"
                                    required
                                />

                                <div className="flex justify-between mt-3">
                                    <div>
                                        <input
                                            className="appearance-none w-4 h-4 mt-2 border border-slate-300 checked:bg-orange-500 focus:outline-none"
                                            type="checkbox"
                                        />
                                        <label className="text-slate-500 text-lg ml-2" htmlFor="">Remember Me</label>
                                    </div>

                                    <Link to="/forgot-password">
                                        <button className="text-lg text-orange-500">Forgot Password?</button>
                                    </Link>
                                </div>

                                <button className="bg-orange-500 self-center hover:bg-orange-700 my-5 w-fit justify-center items-center p-2.5 text-white text-md rounded">
                                    <span>Sign In</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="flex justify-center items-center">
                        <p className="text-slate-500 text-lg ml-2 ">Don't have an account?
                            <Link to="/signup"><button className="text-lg text-orange-500 ml-3">Click here to sign up.</button></Link>
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center h-screen">
                    <img
                        src="signin_pic.png"
                        alt="signin"
                        className="relative w-3/6"
                    />
                </div>
            </div>
        </div>
    );
};

export default Signin;
