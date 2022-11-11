import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const links = [
  { url: "/search", text: "Results" },
  { url: "/images", text: "Images" },
];

const Links = () => {
    const [value, setValue] = useState(0)
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }, index) => {
        return (
          <NavLink
            to={url}
            key={index}
            onClick={() => setValue(index)}
            className={`p-3 ${index === value && 'border-blue-700 border-b-2 dark:border-white'} pb-2`}
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Links;
