export default function handler(req, res) {
  const { key } = req.query;

  if (!key) {
    return res.status(400).json({ valid: false });
  }

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const today = new Date().toISOString().slice(0, 10);
  const SAL = "ZENITH";
  const expected = Buffer.from(ip + today + SAL).toString("base64");

  res.status(200).json({
    valid: key === expected
  });
}
