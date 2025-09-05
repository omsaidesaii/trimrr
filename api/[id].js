import { getUrl } from "@/db/apiUrls";

export default async function handler(req, res) {
  const { id } = req.query;
  const url = await getUrl({ id });

  if (url) {
    res.writeHead(302, { Location: url.original_url });
    res.end();
  } else {
    res.status(404).send("Not found");
  }
}
