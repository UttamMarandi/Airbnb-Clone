import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Home() {
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
        </section>
      </main>
    </div>
  );
}
