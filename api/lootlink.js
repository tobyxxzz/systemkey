export default function handler(req, res) {
  const { data } = req.query;

  // se não veio do lootlabs, volta pro locker
  if (!data) {
    return res.redirect("https://lootlabs.gg/s/PHUYGGsM");
  }

  // veio certinho → manda pro getkey
  return res.redirect(`/api/getkey?data=${data}`);
}
