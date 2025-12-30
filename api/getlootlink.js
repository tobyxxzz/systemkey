export default async function handler(req, res) {
  const key = process.env.LOOTLABS_API_KEY;

  if (!key) {
    return res.status(500).json({ error: "API key ausente" });
  }

  const destinationUrl = "https://systemkey.vercel.app/api/getkey";

  try {
    const response = await fetch(
      "https://api.lootlabs.gg/v1/redirect/encrypt",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({ url: destinationUrl }),
      }
    );

    const text = await response.text();

    return res.status(200).json({
      status: response.status,
      lootlabsResponse: text,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Fetch crash",
      message: err.message,
    });
  }
}
