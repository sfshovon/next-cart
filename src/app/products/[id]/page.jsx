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

export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return {
    title: data?.name,
    description: `Price: ${data?.mrp},
                  Discount Price: ${data?.discountPrice},
                  Rating: ${data?.rating}`
  }
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