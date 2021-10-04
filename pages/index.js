import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData }) {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto p-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* pull data */}
          {exploreData?.map((item, index) => (
            <SmallCard
              key={index}
              img={item.img}
              distance={item.distance}
              location={item.location}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

//use getStaticProps when the data is not much changing.
//use getServerSideProps when data is constantly changing b.c in ssr for every request it sends data from the server.
//in static props the data generated during build time is rendered for every request
export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/DMNG").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}
