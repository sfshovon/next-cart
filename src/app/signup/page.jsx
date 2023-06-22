"use client"
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const [signUpError, setSignUpError] = useState('');

 

  const handleSignUp = async (data) => {
    console.log(data.name, data.email, data.password)

    try {
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      res.status === 201 && router.push("/products?success=Account Has Been Created")
    }
    catch(error) {
      setSignUpError(error.message)
    }

  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-96 p-7 border border-zinc-900 rounded-2xl">
        <h2 className="text-2xl text-center text-primary font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text font-semibold">Name</span></label>
            <input className="input w-full max-w-xs border border-cyan-900" type="text" 
              {...register("name", { required: "Name is Required" })}  
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text font-semibold">Email</span></label>
            <input  className="input w-full max-w-xs border border-cyan-900" type="email" 
              {...register("email", { required: true })} 
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text font-semibold">Password</span></label>
            <input className="input w-full max-w-xs border border-cyan-900"type="password" 
              {...register("password", { required: "Password is required",
                minLength: { value: 6, message: "Password must be 6 characters long" },
                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must have uppercase, number and special characters" 
              }})} 
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <input className="mt-4 btn btn-accent w-full" value="Sign Up" type="submit" />
          <div className="mt-2">
            {signUpError && <p className="text-red-600 font-semibold">{signUpError}</p>}
          </div>
        </form>
        <div className="mt-4 flex justify-center items-center gap-2">
          <p className="text-center font-semibold">Already have an account?</p>
          <Link className="text-secondary" href="/login">Please Login</Link>
        </div>
        <div className="divider font-semibold">OR</div>
        <button className="btn btn-outline w-full" onClick={() => signIn("google")}>CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default page;