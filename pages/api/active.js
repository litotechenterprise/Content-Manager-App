export default async function active(req, res) {
  if (req.method === "GET") {
    const response = await fetch(`${process.env.API_URL}/resources/active`);
    const data = await response.json();
    return res.send(data);
  }
}
