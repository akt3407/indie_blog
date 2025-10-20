import { getBlogList } from "../_libs/microcms";
import NikkiClient from "./NikkiClient";

export default async function Page() {
  const data = await getBlogList();

  return <NikkiClient data={data} />;
}
