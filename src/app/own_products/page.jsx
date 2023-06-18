"use client"
import OwnProduct from "@/components/OwnProduct";

async function getData() {
  const res = await fetch("http://localhost:3000/api/products")
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
const page = async () => {
  const data = await getData();
  
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
          <OwnProduct key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;