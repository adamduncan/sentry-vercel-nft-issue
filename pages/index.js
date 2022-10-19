import fs from "node:fs";
import path from "node:path";

export default function Home({ data }) {
  return <pre>{JSON.stringify(data)}</pre>;
}

export function getServerSideProps() {
  return {
    props: {
      data: JSON.parse(fs.readFileSync(path.resolve("data.json"), "utf8")),
    },
  };
}
