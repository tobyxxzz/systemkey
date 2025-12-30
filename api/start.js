export default function handler(req, res) {
  const random = Math.random().toString(36).slice(2);
  const timestamp = Date.now();

  const data = Buffer.from(random + ":" + timestamp).toString("base64");

  const lootLink =
    "https://lootdest.org/s?rokoJQbL&data=" +
    encodeURIComponent(data);

  res.redirect(lootLink);
}
