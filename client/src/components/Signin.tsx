import "../App.css";
import { useState } from "react";
import { BsFillShieldLockFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "otp-input-react";

const Signin = () => {
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);

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
                                {showOTP ? (
                                    <>
                                        <div className="bg-white text-emerald-500 w-fit mx-auto p-2 rounded-full">
                                            <BsFillShieldLockFill size={20} />
                                        </div>
                                        <label
                                            htmlFor="otp"
                                            className="font-bold text-xl text-black text-center"
                                        >
                                            Enter your OTP
                                        </label>
                                        <OtpInput
                                            value={otp}
                                            onChange={setOtp}
                                            OTPLength={6}
                                            otpType="number"
                                            disabled={false}
                                            autoFocus
                                            className="opt-container my-3"
                                        ></OtpInput>
                                        <button className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
                                            {loading && (
                                                <CgSpinner
                                                    size={20}
                                                    className="mt-1 animate-spin"
                                                />
                                            )}
                                            <span>Verify OTP</span>
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <div className="grid gap-2">
                                            <label
                                                htmlFor="name"
                                                className="text-slate-500 text-base"
                                            >
                                                Name
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                className="p-1 rounded border-solid border border-slate-300 focus:outline-red-300"
                                                style={{ width: "350px" }}
                                                type="text"
                                            />
                                        </div>

                                        <label
                                            htmlFor=""
                                            className="text-slate-500 text-base"
                                        >
                                            Verify your phone number<span className="text-red-500">
                                                    *
                                                </span>
                                        </label>
                                        <PhoneInput
                                            country={"in"}
                                            value={ph}
                                            onChange={setPh}
                                        />
                                        <button className="bg-emerald-600 w-full flex gap-1 my-5 items-center justify-center py-2.5 text-white rounded">
                                            {loading && (
                                                <CgSpinner
                                                    size={20}
                                                    className="mt-1 animate-spin"
                                                />
                                            )}
                                            <span>Send code via SMS</span>
                                        </button>
                                    </>
                                )}
                                
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
