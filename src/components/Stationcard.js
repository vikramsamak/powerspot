"use client";
import Image from "next/image";
import React, { useState } from "react";
import ImagePlaceholder from "@/assets/img/imgplh.jpeg";

function Stationcard(props) {
  const [expand, setExpand] = useState(false);

  const expandHandler = () => {
    setExpand(!expand);
  };

  return (
    <div className="w-full p-4 mt-4 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.stationName}
      </h5>
      <p className="inline-flex  mb-3 font-normal text-gray-700 dark:text-gray-400">
        <svg
          className="w-5 h-5 ml-2 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 21"
        >
          <g
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          >
            <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
          </g>
        </svg>
        {props.address}
      </p>
      <div className="flex justify-end w-full">
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={expandHandler}
        >
          {expand ? (
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
          )}
        </button>
      </div>
      {expand && (
        <div className="lg:flex w-full mt-4">
          <div className="flex lg:w-1/4 items-center justify-center p-2 sm:w-full">
            {props.photo_link === null ? (
              <Image
                src={ImagePlaceholder}
                width="auto"
                height="auto"
                alt="Image Placeholder"
              ></Image>
            ) : (
              <Image
                src={props.photo_link}
                width={500}
                height={500}
                alt="Photo of location"
                className="h-auto rounded-lg object-cover"
                priority={true}
              ></Image>
            )}
          </div>
          <div className="lg:w-full sm:w-full p-2 overflow-x-auto">
            <p className="text-gray-400 mt-2 mb-2">
              Phone No : {props.phone_number ? props.phone_number : "NA"}
            </p>
            <p className="text-gray-400 mt-2 mb-2">Connectors</p>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Total
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Available
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Kw
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Speed
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.connectors.map((connector, index) => {
                    return (
                      <>
                        <tr
                          key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {connector.type}
                          </th>
                          <td className="px-6 py-4 text-center">
                            {connector.total}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {connector.available}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {connector.kw}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {connector.speed}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 mt-2 mb-2">
              Website :{" "}
              <a href={props.website} target="_blank" className="text-blue-700">
                {props.website}
              </a>
            </p>
            <a
              href={props.place_link}
              target="_blank"
              className="text-blue-700 mt-8 mb-2"
            >
              View On Google Maps
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Stationcard;
