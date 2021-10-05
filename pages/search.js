import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";

const Search = () => {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuest } = router.query;

  //convert from isostring

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="search_page">
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p>
            300+ stays -{range} for {noOfGuest} guests{" "}
          </p>
          <h1 className="font-semibold text-3xl mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {/* button is a utility class */}
            <p className="button">Cancellation flexiblity</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
