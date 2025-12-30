export default function handler(req, res) {
  const { key } = req.query;

  if (!key) {
    return res.json({ valid: false });
  }

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const today = new Date().toISOString().slice(0, 10);
  const raw = ip + today + "ZENITH";
  const validKey = Buffer.from(raw).toString("base64");

  res.json({ valid: key === validKey });
}
