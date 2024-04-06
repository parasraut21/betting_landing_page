import { loading } from "../assets";


const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-8 sm:h-[3.5rem] px-3 sm:px-6 bg-n-8/80 rounded-[0.85rem] sm:rounded-[1.7rem] ${
        className || ""
      } text-sm sm:text-base`}
    >
      <img className="w-2.5 h-2.5 sm:w-5 sm:h-5 mr-2 sm:mr-4" src={loading} alt="Loading" />
      Play Matchodds and Sessions for the IPL in 2024  
    </div>
  );
};

export default Generating;
