
import Product from '@/models/Product';
import connectDB from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  try {
    await connectDB();
    const products = await Product.find({});
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } 
  catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};

