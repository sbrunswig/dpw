// controller
import { data } from "autoprefixer";
import Country from "../model/country";

// get all countries
export async function getCountries(req, res) {
  try {
    const countries = await Country.find({});

    if (!countries) return res.status(404).json({ error: "No countries found" });
    res.status(200).json(countries);
  } catch (error) {
    res.status(404).json({ error: "error while fetching data" });
  }
}

// post a country
export async function postCountry(req, res) {
  try {
    const formData = req.body;
    if (!formData) return res.status(404).json({ error: "No data found" });
    console.log(formData);
    const country = Country.create(formData);
    // THE RETURN OF THE COUNTRY IS NOT FUNCTIONING???????? ***********************************
    res.status(200).json(country);
  } catch (error) {
    res.status(404).json({ error });
  }
}

// put a country
export async function putCountry(req, res) {
  const countryId = req.body.id;
  const formData = req.body.formData;

  try {
    if (countryId && formData) {
      console.log(countryId, formData);
      const country = await Country.findByIdAndUpdate(countryId, { english: formData });
      //   THIS IS NOT RETURNING THE UPDATED DATA ****************************************************
      res.status(200).json(country);
    } else {
      res.status(404).json({ error: "No data found" });
    }
  } catch (error) {
    res.status(404).json({ error });
  }
}

// delete a country
export async function deleteCountry(req, res) {
  try {
    const { countryId } = req.query;
    if (countryId) {
      const country = await Country.findByIdAndDelete(countryId);
      res.status(200).json("country deleted");
    } else {
      res.status(404).json({ error: "No data found" });
    }
  } catch (error) {
    res.status(404).json({ error });
  }
}
