export default function handler(req, res) {
  const { data } = req.query;

  if (!data) {
    return res.redirect("https://lootlabs.gg/s/rokoJQbL");
  }

  res.status(200).send("KEY AQUI");
}

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const today = new Date().toISOString().slice(0, 10);
  const SAL = "ZENITH";
  const raw = ip + today + SAL;
  const key = Buffer.from(raw).toString("base64");

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <title>Daily Key</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="background:#0f0f0f;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;">
  <div style="background:#111;padding:24px;border-radius:16px;text-align:center;max-width:420px;width:100%;">
    <h2>Sua key diária</h2>
    <div style="background:#1f1f1f;padding:12px;border-radius:8px;margin:16px 0;word-break:break-all;font-family:monospace;">
      ${key}
    </div>
    <p style="opacity:.7">Válida por 24 horas</p>
  </div>
</body>
</html>
`);
}
