import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { SignupValidation } from "@/lib/validations";
import Loader from "@/components/shared/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useCreateNewUserAccount } from "@/lib/react-query/queries";
import { useToast } from "@/components/ui/use-toast";

const SignupForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const mutation = useCreateNewUserAccount();
  console.log(" mutation--------------------- ", mutation);
  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      await mutation.mutateAsync(values);
      formik.resetForm();
      setIsLoading(false);
      toast({ title: "Create Account Successfully" });
      navigate("/sign-in");
    } catch (error) {
      setIsLoading(false);
      toast({ title: error.response.data.message });
    }
  };

  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignupValidation,
    onSubmit: handleSubmit,
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-full xl:w-1/2 flex-center flex-col max-xl:mt-12">
      <img src="/assets/images/logo.svg" alt="logo" />
      <h2 className="h3-bold md: h2-bold pt-8 sm:pt-4">Create a new account</h2>
      <p className="text-light-3 small-medium md:base-regular">
        To use snapgram, please enter your details
      </p>

      <form onSubmit={formik.handleSubmit}>
        <p className="mt-2">Name</p>
        <Input
          className="shad-input mt-2 sm:w-[350px]"
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          placeholder="Enter Name"
        />

        <div className="validation_messages">{formik.errors.name}</div>

        <p className="mt-2">Username</p>
        <Input
          className="shad-input mt-2"
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
          placeholder="Enter Username"
        />

        <div className="validation_messages">{formik.errors.username}</div>

        <p className="mt-2">Email</p>
        <Input
          className="shad-input mt-2" // shadcn classes here
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          placeholder="Enter Email"
        />
        <div className="validation_messages">{formik.errors.email}</div>
        <p className="mt-2">Password</p>
        <div className="relative">
          <Input
            className="shad-input mt-2"
            type={passwordVisible ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="********"
            id="password"
            name="password"
          />
          <div className="validation_messages">{formik.errors.password}</div>
          <Button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-[5%]  right-0 text-white"
          >
            {passwordVisible ? <FiEyeOff /> : <FiEye />}
          </Button>
        </div>

        <Button
          type="submit"
          className="shad-button_primary w-full mt-4 sm:mt-4"
        >
          {isLoading ? (
            <div className="flex-center gap-2">
              <Loader /> Submitting...
            </div>
          ) : (
            "Submit"
          )}
        </Button>
        <p className="text-small-regular text-light-2 text-center mt-2">
          Already have an account?
          <Link
            to="/sign-in"
            className="text-primary-500 text-small-semibold ml-1"
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
