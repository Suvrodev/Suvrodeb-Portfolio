import React from "react";
import goLink from "../../../../JS-File/goLink";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const BlogBox = ({ blog }) => {
  const { image, title, url, date } = blog;
  return (
    <div className="border p-5 rounded-lg w-full md:w-[300px] bg-[#202226] shadow-lg shadow-slate-500 h-[400px] relative">
      <img src={image} alt="" className="w-full h-[220px]" />
      <h1 className="text-xl text-center  font-bold my-5 text-white">
        {title}
      </h1>
      <div className=" absolute bottom-[20px] px-5 w-full left-0">
        <div className="flex justify-between items-center">
          <p className="text-white flex items-center gap-2">
            <span>
              <CalendarMonthIcon />
            </span>{" "}
            <span>{date}</span>
          </p>
          <p
            className="font-bold text-[#FF014F] cursor-pointer"
            onClick={() => goLink(url)}
          >
            Read More
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
