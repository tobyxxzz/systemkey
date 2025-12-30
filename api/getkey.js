export default function handler(req, res) {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const today = new Date().toISOString().slice(0, 10);
  const SAL = "ZENITH"; // usa o mesmo do checkkey
  const raw = ip + today + SAL;
  const key = Buffer.from(raw).toString("base64");

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Daily Key</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      box-sizing: border-box;
      font-family: Inter, Arial, sans-serif;
    }
    body {
      margin: 0;
      background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
      color: #fff;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card {
      background: #111;
      padding: 24px;
      border-radius: 16px;
      width: 100%;
      max-width: 420px;
      box-shadow: 0 0 40px rgba(0,0,0,.6);
      text-align: center;
    }
    h1 {
      margin-top: 0;
      font-size: 24px;
    }
    .key-box {
      background: #1f1f1f;
      border-radius: 12px;
      padding: 14px;
      margin: 16px 0;
      word-break: break-all;
      font-family: monospace;
      font-size: 14px;
    }
    button {
      width: 100%;
      padding: 14px;
      border: none;
      border-radius: 12px;
      background: #4f46e5;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
    button:hover {
      background: #4338ca;
    }
    .info {
      margin-top: 12px;
      font-size: 13px;
      opacity: 0.7;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>🔑 Sua key diária</h1>

    <div class="key-box" id="key">${key}</div>

    <button onclick="copyKey()">Copiar key</button>

    <div class="info">
      ⏰ Válida por 24 horas<br>
      Volte amanhã para gerar outra
    </div>
  </div>

  <script>
    function copyKey() {
      const text = document.getElementById("key").innerText;
      navigator.clipboard.writeText(text).then(() => {
        alert("Key copiada 😎");
      });
    }
  </script>
</body>
</html>
`);
}
