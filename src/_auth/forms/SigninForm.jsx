import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { SigninValidation } from "@/lib/validations";
import Loader from "@/components/shared/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useToast } from "@/components/ui/use-toast";
import { useLoginUserAccount } from "@/lib/react-query/queries";

const SigninForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const mutation = useLoginUserAccount();
  console.log(" mutation--------------------- ", mutation);

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      await mutation.mutateAsync(values);
      formik.resetForm();
      setIsLoading(false);
      toast({ title: "Login successfully!" });
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      toast({ title: error.response.data.message });
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SigninValidation,
    onSubmit: handleSubmit,
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-full xl:w-1/2 flex-center flex-col max-xl:mt-12">
      <img src="/assets/images/logo.svg" alt="logo" />
      <h2 className="h3-bold md: h2-bold pt-8 sm:pt-4">
        Login to your account
      </h2>
      <p className="text-light-3 small-medium md:base-regular">
        Welcome back! please enter your details
      </p>

      <form onSubmit={formik.handleSubmit}>
        <p className="mt-2">Email</p>
        <Input
          className="shad-input mt-2 sm:w-[350px]" // shadcn classes here
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
              {" "}
              <Loader /> Loading...
            </div>
          ) : (
            "Login"
          )}
        </Button>
        <p className="text-small-regular text-light-2 text-center mt-2">
          Don't have an account?
          <Link
            to="/sign-up"
            className="text-primary-500 text-small-semibold ml-1"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SigninForm;
