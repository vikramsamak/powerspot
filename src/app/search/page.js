"use client";
import React, { useState } from "react";
import Stationcard from "@/components/Stationcard";
import axios from "axios";

function Search() {
  const [stationData, setStationData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [emptyError, setEmptyError] = useState(false);
  const [info, setInfo] = useState(false);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const apiCall = async () => {
    if (search === "" || search === undefined || search === null) {
      setEmptyError(true);
    } else {
      setLoading(true);
      // client to server api request
      let url = "http://localhost:3000/api/getdata/" + search;
      try {
        const response = await axios.get(url);
        setStationData(response.data.data);
      } catch (error) {
        setInfo(true);
      }
      setLoading(false);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 mt-16 min-h-screen max-h-full">
      <div className=" py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 min-h-screen max-h-full">
        <div className="p-4 w-full text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Search Charging Station
            <form className="mt-4">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  value={search}
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="City,State,Country"
                  required
                  onChange={searchHandler}
                />
                <button
                  type="button"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={apiCall}
                >
                  Search
                </button>
              </div>
            </form>
          </h2>
          <p className="mb-4 font-light">Example : Pune,Maharashtra,India</p>

          {stationData.length != 0 ? (
            stationData.map((station, index) => {
              return (
                <Stationcard
                  key={index}
                  stationName={station.name}
                  address={station.formatted_address}
                  connectors={station.connectors}
                  photo_link={station.photo}
                  phone_number={station.phone_number}
                  place_link={station.place_link}
                  website={station.website}
                ></Stationcard>
              );
            })
          ) : (
            <>
              <div className="flex justify-center items-center w-full h-full p-2">
                {loading == true ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : emptyError == true ? (
                  <div
                    className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-transparent dark:text-red-400"
                    role="alert"
                  >
                    <svg
                      className="flex-shrink-0 inline w-4 h-4 mr-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                      <span className="font-medium">Alert!</span> Type the
                      location first before searching.
                    </div>
                  </div>
                ) : info == true ? (
                  <div
                    className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-transparent dark:text-red-400"
                    role="alert"
                  >
                    <svg
                      className="flex-shrink-0 inline w-4 h-4 mr-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                      <span className="font-medium">Error ! </span>
                      Something went wrong...
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-400 text-center w-full">
                    <p>Enter the desired location in the search bar.</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Search;
