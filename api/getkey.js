export default function handler(req, res) {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const today = new Date().toISOString().slice(0, 10);

  const raw = ip + today + "ZENITH";
  const key = Buffer.from(raw).toString("base64");

  res.status(200).send(`
    <h1>Sua key diária</h1>
    <p>${key}</p>
    <p>Válida por 24h</p>
  `);
}
