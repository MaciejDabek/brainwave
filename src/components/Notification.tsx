import { notification1 } from "../assets";
import { notificationImages } from "../constants";
import { cn } from "../utils/utils";

type NotificationProps = {
  title: string;
  className?: string;
};

export default function Notification({ title, className = "" }) {
  return (
    <div
      className={cn(
        "flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5",
        className
      )}
    >
      <img
        src={notification1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex size-6 border-2 border-n-12 rounded-full overflow-hidden "
              >
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt="item"
                />
              </li>
            ))}
          </ul>
          <div className="text-n-13 text-sm font-light">1 min ago</div>
        </div>
      </div>
    </div>
  );
}
