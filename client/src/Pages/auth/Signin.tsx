import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Checkbox } from "@/Components/ui/checkbox";
import { Input } from "@/Components/ui/input";
import { useAuth } from "@/Context/authContext";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

interface SigninFormData {
    email: string;
    password: string;
}

const Signin: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SigninFormData>({
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const [isLoading, setIsLoading] = useState(false);
    const auth = useAuth();

    const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const onSubmit = async (data: { email: string; password: string }) => {
        setIsLoading(true);
        await auth?.signin(data.email, data.password);
        setIsLoading(false);
    };

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
                        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                            <div className="flex flex-col gap-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">
                                        Email
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        style={{ width: "450px" }}
                                        id="email"
                                        type="email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message:
                                                    "Invalid email address",
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 px-3">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                <div className="grid gap-2">
                                    <div className="relative">
                                        <Label htmlFor="password">
                                            Password
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            style={{ width: "450px" }}
                                            id="password"
                                            type={
                                                passwordVisible
                                                    ? "text"
                                                    : "password"
                                            }
                                            {...register("password", {
                                                required:
                                                    "Password is required",
                                                minLength: {
                                                    value: 8,
                                                    message:
                                                        "Password must be at least 8 characters long",
                                                },
                                            })}
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 right-0 top-7 pr-3 flex items-center text-gray-600"
                                        >
                                            {passwordVisible ? (
                                                <EyeOff className="h-6 w-6" />
                                            ) : (
                                                <Eye className="h-6 w-6" />
                                            )}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="text-red-500 px-3">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>

                                <div className="flex justify-between mt-3">
                                    <div>
                                        <Checkbox id="terms" />
                                        <Label htmlFor="">Remember Me</Label>
                                    </div>

                                    <Link to="/forgot-password">
                                        <Button variant="ghost">
                                            Forgot Password?
                                        </Button>
                                    </Link>
                                </div>

                                <Button type="submit" disabled={isLoading}>
                                    {isLoading ? (
                                        <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                                    ) : (
                                        <span>Sign in</span>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div className="flex justify-center items-center">
                        <p className="text-slate-500 text-lg ml-2 ">
                            Don't have an account?
                            <Link to="/signup">
                                <Button variant="ghost">
                                    Click here to sign up.
                                </Button>
                            </Link>
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
