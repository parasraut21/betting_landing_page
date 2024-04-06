import { notification1 , logo } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-2 sm:p-4 pr-3 sm:pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-2 sm:gap-5`}
    >
      <img
        src={logo}
        width={31}
        height={31}
        alt="image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-sm sm:text-base">{title}</h6>

        <div className="flex items-center justify-between">
       
        </div>
      </div>
    </div>
  );
};
export default Notification;
