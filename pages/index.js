import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardsData }) {
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
          <div className="small_card_container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, index) => (
              <SmallCard
                key={index}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="medium_card_container flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((item, index) => (
              <MediumCard key={index} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://dev-sachitstudio.pantheonsite.io/wp-content/uploads/2021/10/airbnb_largecard.jpg"
          title="Try Hosting"
          description="Earn extra income and unlock new opportunities by sharing your space."
          buttonText="Learn More"
        />
      </main>
      <Footer />
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
  const cardsData = await fetch("https://jsonkeeper.com/b/U9UH").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
