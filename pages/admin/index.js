import Head from "next/head";
import { useReducer } from "react";

const formReducer = (state, event) => {
  const uglyJson = event.target.value;
  const obj = JSON.parse(uglyJson);
  const prettyJson = JSON.stringify(obj, undefined, 4);
  return {
    ...state,
    [event.target.name]: prettyJson,
  };
};

export default function ADmin() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    console.log(formData.english);
    console.log(JSON.parse(formData.english));
  };

  const prettyJson = (event) => {
    const uglyJson = document.getElementById("english").value;
    const obj = JSON.parse(uglyJson);
    const prettyJson = JSON.stringify(obj, undefined, 4);
    document.getElementById("english").value = prettyJson;
    console.log(prettyJson);
    const stringed = JSON.stringify(prettyJson);
    console.log("string", stringed);
    const parsed = JSON.parse(stringed);
    console.log("parsed", parsed);
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
