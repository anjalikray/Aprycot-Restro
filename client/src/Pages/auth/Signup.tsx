import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
// import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/Components/ui/input";
import  toast  from "react-hot-toast";
import { useAuth } from "@/Context/authContext";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Loader2 } from "lucide-react";

interface SignupFormData {
    email: string;
    name: string;
    mobile: string;
    password: string;
    confirmPassword: string;
    company?: string; // Optional field
}

const SignUp: React.FC = () => {
    const auth = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setError,
    } = useForm<SignupFormData>();
    
    const [isLoading, setIsLoading] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State for confirm password visibility

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    // Watch the password field to validate confirmPassword
    const password = watch("password");

    const onSubmit = async (data: SignupFormData) => {
        setIsLoading(true);
        try {
            await auth?.signup(
                data.email,
                data.password,
                data.name,
                data.mobile,
                // data.company
            );
        } catch (error: any) {
            // Handle error and set field-level errors
            if (
                error.response &&
                error.response.data &&
                error.response.data.additional_message
            ) {
                const additionalMessage = error.response.data.additional_message;

                if (typeof additionalMessage === "string") {
                    // For email already exists error
                    if (additionalMessage.includes("email")) {
                        setError("email", {
                            type: "server",
                            message: additionalMessage,
                        });
                    } else {
                        // General error
                        toast.error(additionalMessage);
                    }
                } else if (Array.isArray(additionalMessage)) {
                    // For field-specific errors
                    additionalMessage.forEach((fieldError: any) => {
                        const fieldName = Object.keys(fieldError)[0];
                        const message = fieldError[fieldName];
                        if (fieldName === "email") {
                            setError("email", { type: "server", message });
                        } else {
                            // Handle other fields if needed
                            toast.error(message);
                        }
                    });
                }
            } else {
                // General error handling
                toast.error("An error occurred during signup.");
            }
        }
        setIsLoading(false);
    };

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
                        <form
                            className="grid gap-4"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="flex flex-col gap-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">
                                        Name
                                        <span className="text-red-500">*</span>
                                    </Label>

                                    <Input
                                        style={{ width: "450px" }}
                                        type="text"
                                        id="name"
                                        {...register("name", {
                                            required: "Name is required",
                                        })}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm px-3">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="email">
                                        Email
                                        <span className="text-red-500">*</span>
                                    </Label>

                                    <Input
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
                                        <p className="text-red-500 text-sm px-3">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                <div className="grid gap-2 ">
                                    <div className="relative grid gap-2">
                                        <Label htmlFor="password">
                                            Password
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            id="password"
                                            type={
                                                passwordVisible
                                                    ? "text"
                                                    : "password"
                                            } // Toggle input type based on visibility state
                                            {...register("password", {
                                                required:
                                                    "Password is required",
                                                minLength: {
                                                    value: 8,
                                                    message:
                                                        "Password must be at least 8 characters long",
                                                },
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/,
                                                    message:
                                                        "Password must contain at least one [a-z], [A-Z], [0-9], and one special character [@$!%*?#&]",
                                                },
                                            })}
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 right-0 top-9 pr-3 flex items-center text-gray-600"
                                        >
                                            {passwordVisible ? (
                                                <EyeOff className="h-6 w-6" />
                                            ) : (
                                                <Eye className="h-6 w-6" />
                                            )}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="text-red-500 text-sm px-3">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <div className="relative grid gap-2">
                                        <Label htmlFor="confirmPassword">
                                            Confirm Password
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            id="confirmPassword"
                                            type={
                                                confirmPasswordVisible
                                                    ? "text"
                                                    : "password"
                                            }
                                            {...register("confirmPassword", {
                                                required:
                                                    "Please confirm your password",
                                                validate: (value) =>
                                                    value === password ||
                                                    "Passwords do not match",
                                            })}
                                        />
                                        <button
                                            type="button"
                                            onClick={
                                                toggleConfirmPasswordVisibility
                                            }
                                            className="absolute inset-y-0 right-0 top-9 pr-3 flex items-center text-gray-600"
                                        >
                                            {confirmPasswordVisible ? (
                                                <EyeOff className="h-6 w-6" />
                                            ) : (
                                                <Eye className="h-6 w-6" />
                                            )}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && (
                                        <p className="text-red-500 text-sm px-3">
                                            {errors.confirmPassword.message}
                                        </p>
                                    )}
                                </div>

                                <Button
                                    // className="w-full"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                                    ) : (
                                        <span>Sign Up</span>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div className="flex justify-center items-center">
                        <p className="text-slate-500 text-lg ml-2 ">
                            Already have an Account
                            <Link to="/signin">
                                <Button variant="ghost">Sign In</Button>
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

export default SignUp;
