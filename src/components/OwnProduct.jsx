import { Toaster, toast } from 'react-hot-toast';
import { AiFillStar } from 'react-icons/ai';

const Product = ({ product }) => {
  const { name, productImage, mrp, discountPrice, rating } = product;
  const discountPercentage = parseInt(((mrp - discountPrice) / mrp) * 100);
  const showRatings = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className="inline-block text-yellow-500">
          <AiFillStar />
        </span>
      );
    }
    return stars;
  };

  return (
    product && (
      <div className="card h-96">
        <figure className="relative group">
          <img
            className="w-full transition-transform duration-1200 ease-in transform-gpu hover:scale-110"
            src={productImage}
            alt="Product"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            className="from-bottom w-full flex justify-center items-center bg-gradient-to-r from-green-400 to-cyan-700 text-lg text-white font-bold py-2 px-4"
            onClick={() => toast(`${name} Clicked`, {
              style: {
                background: 'aliceblue', // Customize the background color
                color: '#000', // Customize the text color
              },
            })}
          >
            Quick View
          </button>
          </div>
        </figure>
        {discountPercentage > 0 && (
          <h3 className="bg-green-600 text-white py-1 px-4 absolute top-1 left-0  rounded-xl text-sm">
            -{discountPercentage}%
          </h3>
        )}
        <div className="card-body">
          <div className="group">
            <h2 className="text-center text-lg text-zinc-500 font-semibold truncate shadow-sm">
              {name}
            </h2>
            <h3 className="absolute top-40 scale-0 rounded bg-cyan-800 p-2 text-sm text-white group-hover:scale-100">
              {name}
            </h3>
          </div>
          {discountPercentage > 0 && (
            <div className="flex justify-center items-center gap-2">
              <h3 className="text-sm text-dark">
                MRP <span className="font-semibold line-through">{mrp}</span>
              </h3>
              {discountPercentage > 0 && (
                <h3 className="text-sm text-slate-500 font-semibold">-{discountPercentage}%</h3>
              )}
            </div>
          )}
          <h3 className="text-lg text-dark text-center font-bold">BDT {discountPrice}</h3>
          <h3 className="text-sm text-center">{showRatings(parseInt(rating))}</h3>
        </div>
      <Toaster/>
      </div>
    )
  );
};

export default Product;