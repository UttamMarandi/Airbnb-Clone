import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);

  // router
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection", //this key is the one that will be mapped to ranges.selection in handleSelect
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  // reset input
  const resetInput = () => {
    setSearchInput("");
  };
  // search
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(), //query cannot take Date() value , it need to be a string
        endDate: endDate.toISOString(),
        noOfGuest,
      },
    });
  };

  return (
    <header className="header sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer"
      >
        <Image
          src="https://raw.githubusercontent.com/UttamMarandi/Airbnb-Clone/main/public/images/airbnb_logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600"
          type="text"
          placeholder={placeholder || "Start your search"}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          {/* css trick to center an item  */}
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()} //in airbnb the rooms can be booked for future only , so min date is set to Today
            rangeColors={["#fd5b61"]}
            onChange={handleSelect} //custom function
          />
          <div className="flex items-center">
            <h2 className="text-2xl flex-grow font-semibold ">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuest}
              onChange={(e) => setNoOfGuest(e.target.value)}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              min={1} //minimum should be 1
            />
          </div>
          <div className="flex pt-3">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-500">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
