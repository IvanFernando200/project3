import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import LocationInfo from "./components/LocationInfo";
import getRandomNum from "./services/getRandomNum";
import ResidentCard from "./components/ResidentCard";
import SearchLocation from "./components/SearchLocation";
import Loading from "./components/Loading";
import ErrorCards from "./components/ErrorCards";

function App() {
  const randomLocation = getRandomNum(126);
  const [locationNum, setLocationNum] = useState(randomLocation);

  const url = `https://rickandmortyapi.com/api/location/${
    locationNum || getRandomNum(126)
  }`;
  const [location, getLocation, isLoading, hasError] = useFetch(url);

  useEffect(() => {
    getLocation();
  }, [locationNum]);

  return (
    <div className="app">
      <div className="app__poster">
        <img
          className="app__img"
          src="/rick-and-morty-background.png"
          alt="rick and morty background"
        />
      </div>
      <SearchLocation setLocationNum={setLocationNum} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {hasError ? (
            <ErrorCards />
          ) : (
            <>
              <LocationInfo location={location} />
              <div className="container-resident">
                {location?.residents.map((url) => (
                  <ResidentCard key={url} url={url} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
