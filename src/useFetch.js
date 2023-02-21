import { useState, useEffect } from "react";

// Custom hook for fetching data from json server
// Custom hooks MUST start with word 'use..'
const useFetch = (url) => {
  // Variable to store data
  const [data, setData] = useState(null);
  // Variable to indicate to the user whether data is loading
  const [isPending, setIsPending] = useState(true);
  // Variable to store caught errors when attempting to retrieve from json server
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch() returns a promise so can use .then !
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          // Error gets 'thrown' to catch function below with message stored in err.message
          throw Error("Could not fetch the data for that resource.");
        }
        // Parses json into a js object
        // Returns another promise
        return res.json();
      })
      .then((data) => {
        // Store requested data in our data variable
        setData(data);
        // Once data loaded, get rid of 'loading...' message [see below]
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
