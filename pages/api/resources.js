import axios from "axios";

export default async function resources(req, res) {
  if (req.method === "GET") {
    const response = await fetch("http://localhost:3001/api/resources");
    const data = await response.json();
    return res.send(data);
  } else if (req.method === "POST" || req.method === "PATCH") {
    const { title, description, link, timeToFinish, priority, id } = req.body;
    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send("Data is missing");
    }
    const url =
      req.method === "POST"
        ? "http://localhost:3001/api/resources"
        : "http://localhost:3001/api/resources/" + id;
    try {
      const axiosRes = await axios[req.method.toLowerCase()](url, req.body);
      return res.send(axiosRes.data);
    } catch (e) {
      return res.status(422).send("Data cannot be stored");
    }
  }
}
