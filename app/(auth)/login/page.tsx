import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
  <div className="bg-[url('/bgn.jpg')] object-contain w-full h-full bg-no-repeat">

    <div className="flex justify-center mt-12 ">
      <div className="flex flex-col lg:flex-row space-x-0">
        <div className="bg-darkGreen h-[600px] w-[350px] lg:w-[600px] lg:h-[650px] mx-auto my-auto text-white rounded-2xl lg:rounded-l-2xl lg:rounded-r-none flex flex-col items-center justify-center p-6 md:mb-0 mb-9">
          <h1 className="text-center font-bold text-4xl mb-8">Log In</h1>
          <form className="w-full lg:w-4/5 space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-transparent border-2 border-deepestGreen rounded-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-mediumGreen"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-transparent border-2 border-deepestGreen rounded-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-mediumGreen"
            />
            <p className="text-center">
              Don&apos;t have an account?{" "}
              <Link className="text-mediumGreen" href="/signup">
                Sign up
              </Link>
            </p>
            <Link href="/">
              <button
                type="submit"
                className="w-full mt-4 border-2 border-deepestGreen text-white font-semibold px-8 py-3 rounded-full hover:bg-mediumGreen hover:text-darkGreen transition duration-700"
              >
                Log In
              </button>
            </Link>
          </form>
        </div>
        <div className="hidden lg:flex bg-mediumGreen w-full lg:w-[360px] h-auto lg:h-[650px] mx-auto my-auto text-white text-center p-8 lg:pl-2 lg:pt-44 rounded-2xl lg:rounded-r-2xl lg:rounded-l-none">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">Welcome Back!</h1>
            <p className="text-xl font-semibold pt-4">To keep connected with us</p>
            <p className="text-xl font-semibold">Please login with your personal info!</p>
            <Link href="/signup">
              <button className="mt-6 border-2 w-full lg:w-56 border-darkGreen text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-deepestGreen transition duration-700">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
