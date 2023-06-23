"use client"
import OwnProduct from "@/components/OwnProduct";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

async function getData() {
  const res = await fetch("http://localhost:3000/api/products")
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export const metadata = {
  title: "Own Products",
  description: "Own Products fetched from MongoDB"
}
 
const page = async () => {
  const session = useSession();
  const router = useRouter();
  const data = await getData();

  if (session.status === "unauthenticated") {
    router?.push("/login");
  }

  if (session.status === "authenticated") {
    return (
      <div className="px-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl text-zinc-900 font-extrabold">OWN Products</h1>
          <button className="bg-gradient-to-r from-red-400 to-cyan-800 text-lg text-white font-bold py-2 px-4 rounded-full">
            Create Product
          </button>   
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 justify-around items-center gap-5">
          {data.map((product) => (
            <Link href={`/products/${product?._id}`} key={product?._id}>
              <OwnProduct product={product} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default page;