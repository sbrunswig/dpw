import Head from "next/head";

import { useReducer, useState } from "react";

const formReducer = (state, event) => {
  const uglyJson = event.target.value;
  return {
    ...state,
    [event.target.name]: uglyJson,
  };
};

export default function ADmin() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("formData", formData);
    console.log(".English", JSON.stringify(formData.english));
    console.log("jsonParsed", JSON.parse(formData.english));

    try {
      const english = JSON.stringify(formData.english);
      // Fetch is erroring out with a 404.

      await fetch("http://localhost:3000/api/countries", {
        method: "PUT",
        body: { id: "646d155bd67f9dd406430adc", formData: "this is text" },
      });
      // ********************
    } catch (err) {
      console.log(err);
    }
  };

  const prettyJson = (event, res) => {
    const uglyJson = document.getElementById("english").value;
    try {
      const obj = JSON.parse(uglyJson);
      const id = obj._id.$oid;
      console.log(formData);
      const pretty = JSON.stringify(obj, undefined, 4);
      document.getElementById("english").value = pretty;
    } catch (err) {
      return console.log("Not valid JSON!");
    }
  };

  return (
    <>
      <Head>
        <title>Admin - Cornell Center on the Death Penalty Worldwide</title>
        <meta name="description" content="The Cornell Center on the Death Penalty Worldwide engages in research, advocacy, litigation and training on the death penalty and international law. Our database provides comprehensive, transparent analysis regarding death penalty laws and practices in all the countries and territories that retain capital punishment." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://deathpenaltyworldwide.org/about-us/"></link>
      </Head>

      <h1 className="md:text-center">admin</h1>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={prettyJson}>Pretty</button>
      <form className="flex flex-col">
        <label htmlFor="english" className="font-bold text-primary">
          English
        </label>
        <textarea id="english" name="english" rows="50" cols="50" onChange={setFormData}></textarea>
      </form>
    </>
  );
}
