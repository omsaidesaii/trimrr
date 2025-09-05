export default async function handler(req, res) {
  const {
    query: { id },
  } = req;

  // Replace this with your DB lookup (Supabase, etc.)
  // For now, just test with a dummy redirect:
  const db = {
    abc123: "https://google.com",
    xyz789: "https://github.com",
  };

  const url = db[id];

  if (url) {
    res.writeHead(302, { Location: url });
    res.end();
  } else {
    res.status(404).send("Short link not found");
  }
}
