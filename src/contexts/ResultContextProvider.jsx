import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google.serper.dev";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("baby keem");

  // type = /videos, /news, /images
  const getResults = async (type) => {
    setIsLoading(true);

    let config = JSON.stringify({
      q: "baby keem",
      gl: "us",
      hl: "en",
      autocorrect: true,
      page: 1,
    });

    try {
      const response = await fetch(`${baseUrl}/${type}`, {
        method: "post",
        headers: {
          "X-API-KEY": import.meta.env.VITE_API_KEY,
          "Content-Type": "application/json",
        },
        data: config,
      });

      const data = await response.json();
      console.log(data);
      console.log(type)

      if(type.includes('/images')){
        setResults(data.images)
      } else {
        setResults(data.organic)
      }
      setResults(data)
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
