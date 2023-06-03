import connectMongo from "../../../database/conn";
import { getCountries, postCountry, putCountry, deleteCountry } from "../../../database/controller";

export default async function handler(req, res) {
  connectMongo().catch((error) => {
    res.status(405).json({ error: "error in connection" });
  });

  const { method } = req;

  switch (method) {
    case "GET":
      await getCountries(req, res);
      break;
    case "POST":
      await postCountry(req, res);
      break;
    case "PUT":
      await putCountry(req, res);
      break;
    case "DELETE":
      await deleteCountry(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
