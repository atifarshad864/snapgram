import React from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupValidation } from "@/lib/validations";
import Loader from "@/components/shared/Loader";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
// import "../../globals.css";
const SigninForm = () => {
  const isLoading = false;
  const handleSubmit = () => {}; // integration here
  const initialValues = {
    email: "",
    Password: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignupValidation,
    onSubmit: handleSubmit,
  });

  return (
    <div className="sm:w-[500px] flex-center flex-col ml-12">
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
          id="email"
          placeholder="Enter Email"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500"></div>
        ) : null}
        <p className="mt-2">Password</p>
        <Input
          className="shad-input mt-2"
          value={formik.values.password}
          onChange={formik.handleChange}
          id="password"
          placeholder="Enter Password"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500">Required</div>
        ) : null}
        <Button
          type="submit"
          className="shad-button_primary w-full mt-4 sm:mt-2"
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
