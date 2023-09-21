import ListOfProducts from "../_jsonFile.json";
export default function Products(req, res) {
  res.status(200).json(ListOfProducts);
}
