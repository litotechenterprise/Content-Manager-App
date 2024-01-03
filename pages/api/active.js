export default async function active(req, res) {
  if (req.method === "GET") {
    const response = await fetch("http://localhost:3001/api/resources/active");
    const data = await response.json();
    return res.send(data);
  }
}
