export default function handler(req, res) {
  try {
    const random = Math.random().toString(36).slice(2);
    const timestamp = Date.now();

    const data = Buffer.from(random + ":" + timestamp).toString("base64");

    const lootLink =
      "https://lootdest.org/s?rokoJQbL&data=" +
      encodeURIComponent(data);

    res.writeHead(302, {
      Location: lootLink,
    });
    res.end();
  } catch (err) {
    res.status(500).send("erro interno: " + err.message);
  }
}
