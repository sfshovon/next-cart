import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loader = () => {
  return (
    <div className="flex justify-center items-center gap-8">
      <h2 className="text-5xl text-sky-700 font-bold py-2">Loading</h2>
      <AiOutlineLoading3Quarters className="text-sky-700 text-5xl font-bold animate-spin"/>
    </div>
  );
};

export default Loader;

