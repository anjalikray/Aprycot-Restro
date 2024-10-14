import React from "react";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/Components/ui/input";



const SignUp: React.FC = () => {
    return (
        <div className="h-screen w-screen bg-circle-login">
            <div className="flex gap-5 justify-center h-screen w-screen">
                <div className="w-ful">
                    <img src="logo.png" alt="logo" className="mt-10 ml-10" />
                    <h1 className="text-center m-2 text-3xl font-semibold">
                        Sign Up
                    </h1>
                    <p className="text-center m-2 text-slate-500 text-lg">
                        Create your Aprycot account.
                    </p>

                    <div className="ml-10">
                        <form className="grid gap-4">
                            <div className="flex flex-col gap-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">
                                        Name
                                        <span className="text-red-500">*</span>
                                    </Label>

                                    <Input
                                        // style={{ width: "450px" }}
                                        type="text"
                                        required
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="email">
                                        Email
                                        <span className="text-red-500">*</span>
                                    </Label>

                                    <Input
                                        style={{ width: "450px" }}
                                        type="email"
                                        required
                                    />
                                </div>

                                <Button>
                                    <Mail className="mr-2 h-4 w-4" /> Login with
                                    Email
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div className="flex justify-center items-center">
                        <p className="text-slate-500 text-lg ml-2 ">Already have an Account
                            <Link to="/signin"><Button variant="ghost">Sign In</Button></Link>
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

export default SignUp;
