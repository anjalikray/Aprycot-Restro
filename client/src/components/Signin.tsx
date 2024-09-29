import "../App.css";

const Signin = () => {
    return (
        <div className="h-screen w-screen bg-circle-login">
            <div className=" flex  gap-5 justify-center  border-2 border-red-500 h-screen w-screen">
                <div className="w-ful ">
                    <img src="logo.png" alt="logo" className="mt-10 ml-10" />
                    <h1 className="text-center m-2 text-3xl font-semibold">
                        Sign In
                    </h1>
                    <p className="text-center m-2 text-slate-500 text-lg">
                        Sign in to stay connected.
                    </p>

                    <div className="ml-10">
                        <form className="grid gap-4"> 
                          <div className="grid gap-2">
                              <label htmlFor="name" className="text-slate-500 text-base">
                                  Name<span className="text-red-500">*</span>
                              </label>
                              <input className="p-1 rounded-full border-solid border border-slate-300 focus:outline-red-300" style={{width: "450px"}} type="text"  />
                          </div>

                          <div className="grid gap-2">
                              <label htmlFor="phone" className="text-slate-500 text-base">
                                  Phone Number<span className="text-red-500">*</span>
                              </label>
                              <input className="p-1 rounded-full border-solid border border-slate-300 focus:outline-red-300" style={{width: "450px"}} type="number" />
                          </div>
                      </form>
                    </div>

                </div>

                <div className="flex justify-center items-center h-screen">
                    <img
                        src="signin_pic.png"
                        alt="food"
                        className="relative w-3/6 "
                    />
                </div>
            </div>

            
        </div>
    );
};

export default Signin;
