import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  console.log("term", searchTerm);
  console.log("path", location?.pathname);

  useEffect(() => {
    if(searchTerm) {
       getResults(`${location.pathname}?q=${searchTerm}`);
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  console.log(location.pathname);

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.organic?.map(
            ({ title, link, snippet }, index) => {
              return (
                <div className="md:w-2/5 w-full" key={index}>
                  <a target="_blank" rel="noreferrer" href={link}>
                    <p className="text-sm">{link.length > 30 ? link.substring(0,30) : link}</p>
                    <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">{title}</p>
                    <p className="text-sm">{snippet}</p>
                  </a>
                </div>
              );
            }
          )}
        </div>
      );
      case "/images":
        return(
          <div className="flex flex-wrap justify-center items-center">
            {results?.images?.map(({ title, imageUrl, link, source, thumbnailHeight, thumbnailWidth }, index) => {
              return (
                <div className="md:w-2/5 w-full">
                  <a className="sm:p-3 p-5" href={link} key={index} target="_blank" rel="noreferrer">
                    <img height={thumbnailHeight} width={thumbnailWidth} src={imageUrl} alt={title} loading="lazy" />
                    <p className="w-36 break-words text-sm mt-2">{title}</p>
                    <p className="text-blue-900 text-sm mt-2">{source}</p>
                  </a>
                </div>
              )
            })}
          </div>
        )

    default:
      return "ERROR";
  }
};

export default Results;
