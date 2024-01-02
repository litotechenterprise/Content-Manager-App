import axios from "axios";

export default async function resources(req, res) {
  if (req.method === "GET") {
    const response = await fetch("http://localhost:3001/api/resources");
    const data = await response.json();
    res.send(data);
  } else if (req.method === "POST") {
    const { title, description, link, timeToFinish, priority } = req.body;
    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send("Data is missing");
    }

    try {
      const axiosRes = await axios.post(
        "http://localhost:3001/api/resources",
        req.body
      );
      return res.send(axiosRes.data);
    } catch (e) {
      return res.status(422).send("Data cannot be stored");
    }
  }
}
