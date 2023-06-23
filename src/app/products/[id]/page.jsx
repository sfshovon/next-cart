"use client"
import Product from "@/components/Product";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}

const SingleProduct = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="flex justify-center items-center">
      <Product product = {data} />
    </div>
  );
};

export default SingleProduct;