import data from "./data.json";

export default async function resources(req, res) {
  if (req.method === "GET") {
    const response = await fetch("http://localhost:3001/api/resources");
    const data = await response.json();
    res.send(data);
  } else if (req.method === "POST") {
    const response = await fetch("http://localhost:3001/api/resources");
    const data = await response.json();
  }
}
