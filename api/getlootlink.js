export default async function handler(req, res) {
  const API_KEY = process.env.LOOTLABS_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: "API key ausente" });
  }

  const destinationUrl = "https://systemkey.vercel.app/api/getkey";
  const LOOT_LINK_ID = "s?PHUYGGsM"; // teu locker ID

  try {
    const response = await fetch(
      "https://api.lootlabs.gg/v1/redirect",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          destination: destinationUrl,
        }),
      }
    );

    const json = await response.json();

    if (!json.data) {
      return res.status(500).json({
        error: "Resposta inválida da LootLabs",
        raw: json,
      });
    }

    const finalUrl = `https://lootlabs.gg/s/${LOOT_LINK_ID}?data=${encodeURIComponent(
      json.data
    )}`;

    res.json({ url: finalUrl });
  } catch (err) {
    res.status(500).json({
      error: "Erro ao conectar com LootLabs",
      message: err.message,
    });
  }
}
