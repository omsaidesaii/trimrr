import { getUrl } from "../src/db/apiUrls.js";  // adjust path if needed

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    // fetch the short link record from DB
    const url = await getUrl({ id });

    if (url?.original_url) {
      res.writeHead(302, { Location: url.original_url });
      res.end();
    } else {
      res.status(404).send("Short link not found in DB");
    }
  } catch (err) {
    console.error("Redirect error:", err);
    res.status(500).send("Server error");
  }
}
