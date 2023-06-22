import Product from "@/models/Product";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connectDB();
    const product = await Product.findById(id);
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } 
  catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};