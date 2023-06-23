"use client"
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const session = useSession();
  const router = useRouter();
  console.log(session)
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    if (session.status === "authenticated") {
      router?.push("/products?success=Account Has Successfully Logged In");
    }
  }, [session]);

  const handleLogin = async (data) => {
    const email = data?.email;
    const password = data?.password;
    try {
      signIn("credentials", { email, password });
      
    } 
    catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-96 p-7 border border-zinc-900 rounded-2xl">
        <h2 className="text-2xl text-center text-success font-bold">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text font-semibold">Email</span></label>
            <input className="input w-full max-w-xs border border-cyan-900" type="email"
              {...register("email", { required: "Email Address is required"})}
            />
          {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text font-semibold">Password</span></label>
            <input className="input w-full max-w-xs border border-cyan-900" type="password"
              {...register("password", { required: "Password is required",
                  minLength: { value: 6, message: "Password must be 6 characters or longer" }
              })}
            />
            {/* <label className="label"> <span className="mt-1 label-text font-semibold">Forget Password?</span></label> */}
            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
          </div>
          <input className="mt-2 btn btn-accent w-full" value="Login" type="submit" />
          <div className="mt-2">
            {loginError && <p className="text-red-600 font-semibold">{loginError}</p>}
          </div>
        </form>
        <div className="mt-4 flex justify-center items-center gap-2">
          <p className="text-center font-semibold">New to Health Hub?  </p>
          <Link className="text-primary" href="/signup">Create new account</Link>
        </div>
        <div className="divider font-semibold">OR</div>
        <button className="btn btn-outline w-full" onClick={() => signIn("google")}> <FcGoogle size={20}/> CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;