export default async function handler(req, res) {
  const LOOTLABS_API_KEY = process.env.LOOTLABS_API_KEY;

  if (!LOOTLABS_API_KEY) {
    return res.status(500).json({ error: "API key não configurada" });
  }

  // destino FINAL depois das tasks
  const destinationUrl = "https://systemkey.vercel.app/api/getkey";

  try {
    const response = await fetch(
      "https://api.lootlabs.gg/v1/redirect/encrypt",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LOOTLABS_API_KEY}`,
        },
        body: JSON.stringify({
          url: destinationUrl,
        }),
      }
    );

    const data = await response.json();

    if (!data.data) {
      return res.status(500).json({ error: "Erro ao gerar data" });
    }

    // ID do teu locker
    const LOOT_LINK_ID = "s?Ij0c7qhE"; // troca aqui

    const finalUrl = `https://lootlabs.gg/s/${LOOT_LINK_ID}?data=${encodeURIComponent(
      data.data
    )}`;

    res.json({
      url: finalUrl,
    });
  } catch (err) {
    res.status(500).json({ error: "Falha na API LootLabs" });
  }
}
