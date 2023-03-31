import React, { useEffect, useState } from "react";

const Sidebar = ({ watchTime }) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const getTimeLocalStorage = localStorage.getItem("watchTime");
    setTime(getTimeLocalStorage);
  }, [watchTime]);

  return (
    <div>
      <h1 className="font-bold text-xl my-7">Total Watched Time</h1>
      <div className="bg-slate-200 p-4 rounded-md">
        {time ? <p className=" text-lg">{time} min</p> : ""}
      </div>
    </div>
  );
};

export default Sidebar;
