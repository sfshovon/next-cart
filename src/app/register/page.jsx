"use client"
import { useSession } from "next-auth/react";

const page = () => {
  const session = useSession();
  console.log(session)
  return (
    <div>
      <h1 className="text-center">This is sign in page</h1>
    </div>
  );
};

export default page;