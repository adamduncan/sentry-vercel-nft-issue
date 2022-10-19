// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "node:fs";
import path from "node:path";

export default function handler(req, res) {
  res
    .status(200)
    .json(JSON.parse(fs.readFileSync(path.resolve("data.json"), "utf8")));
}
