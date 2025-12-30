export default function handler(req, res) {
  // cookie válido por 5 minutos (tempo suficiente pra pegar a key)
  res.setHeader("Set-Cookie",
    "passed=true; Max-Age=300; Path=/; HttpOnly; SameSite=Lax"
  );

  return res.redirect(
    "https://systemkey.vercel.app/api/getkey"
  );
}
