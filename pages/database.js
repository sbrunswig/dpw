import Head from "next/head";
import { MongoClient } from "mongodb";
import { useState } from "react";

export default function Database(props) {
  const [filteredCountryList] = useState(props.countries.sort((a, b) => a.shortName.localeCompare(b.shortName)));

  return (
    <>
      <Head>
        <title>Database - Cornell Center on the Death Penalty Worldwide</title>
        <meta name="description" content="The Cornell Center on the Death Penalty Worldwide engages in research, advocacy, litigation and training on the death penalty and international law. Our database provides comprehensive, transparent analysis regarding death penalty laws and practices in all the countries and territories that retain capital punishment." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://deathpenaltyworldwide.org/about-us/"></link>
      </Head>

      <h1 className="text-center">database</h1>
      <div>
        {filteredCountryList.map((country) => (
          <div key={country.id} id={country.id}>
            <div>{country.shortName}</div>
            {country.q001.results.map((result) => (
              <div>
                {result.fact}: {result.answer}
              </div>
            ))}
            {country.q002.results.map((result) => (
              <div>
                {result.fact}: {result.answer}
              </div>
            ))}
            {country.q003.results.map((result) => (
              <div>
                {result.fact}: {result.answer}
              </div>
            ))}
            {country.q004.results.map((result) => (
              <div>
                {result.fact}: {result.answer}
              </div>
            ))}
            {country.q005.results.map((result) => (
              <div>
                {result.fact}: {result.answer}
              </div>
            ))}
            {country.q006.results.map((result) => (
              <div>
                {result.fact}: {result.answer}
              </div>
            ))}
            <h2>{country.q007.category}</h2>
            {country.q007.results.map((result) => (
              <div>
                {result.fact}: {result.answer}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

// executed during build process on server
export async function getStaticProps() {
  // fetch data
  const client = await MongoClient.connect("mongodb+srv://atlas:MON!jul21@cluster0.mnljr.mongodb.net/dpw?retryWrites=true&w=majority");
  const db = client.db();
  const countriesCollection = db.collection("countries");

  const countries = await countriesCollection.find().toArray();

  client.close();

  return {
    props: {
      countries: countries.map((country) => ({
        id: country._id.toString(),
        shortName: country.shortName,
        q001: country.q001,
        q002: country.q002,
        q003: country.q003,
        q004: country.q004,
        q005: country.q005,
        q006: country.q006,
        q007: country.q007,
      })),
    },
    // rebuilds data every 10 sec
    revalidate: 1,
  };
}
