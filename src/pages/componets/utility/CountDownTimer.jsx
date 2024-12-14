/* eslint-disable react/prop-types */
import { useTimer } from "react-timer-hook";

export default function CountDownTimer({ expiryTimestamp }) {
  const { minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <>
      <div className="count_down d-flex gap-2 align-items-center ">
        <span title="Minutes" className="time_box day">
          {minutes}
        </span>
        {/* <span className="label">Minutes</span> */}
      </div>
    </>
  );
}
