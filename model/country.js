import { Schema, models, model } from "mongoose";

const countrySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  english: {
    type: String,
  },
  french: {
    type: String,
  },
});

const Country = models.Country || model("Country", countrySchema);

export default Country;
