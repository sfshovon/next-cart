"use client"
import APIProduct from "@/components/APIProduct";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../loading";

const getData = async (page) => {
  try {
    const limit = 10;
    const res = await fetch(`https://staging-catalog-reader.qcoom.com/api/v1/product/v2?page=${page}&limit=${limit}&type=Q_COMMERCE`, {
      cache: "no-store",
    });
    const result = await res.json();
    return result?.products;
  } 
  catch (error) {
    console.error(error);
  }
};

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const products = await getData(page);
        setAllProducts((prevProducts) => [...prevProducts, ...products]);  
      } 
      catch (error) {
        console.error("Error:", error);
      }
    };
    fetchAllProducts();
  }, [page]);

  const fetchMoreProducts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="px-10">
      <h1 className="text-2xl text-zinc-900 font-extrabold">API Products</h1>
      <InfiniteScroll
        dataLength={allProducts.length}
        next={fetchMoreProducts}
        hasMore={true}
        loader={<Loader/>}
        endMessage={
          <p className="text-red-700 text-5xl text-center font-bold py-2">
            Nothing to load
          </p>
        }
        style={{ overflowY: 'hidden' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 justify-around items-center gap-5">
          {allProducts.map((product) => (
            <APIProduct key={product?.id} product={product} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Products;