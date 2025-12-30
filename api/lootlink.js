export default function handler(req, res) {
  const { data } = req.query;

  if (!data) {
    return res.redirect("https://lootdest.org/s?rokoJQbL");
  }

  return res.redirect(
    `https://systemkey.vercel.app/api/getkey?data=${data}`
  );
}
