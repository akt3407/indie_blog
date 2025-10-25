import { createClient } from "microcms-js-sdk";
import {
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSQueries,
} from "microcms-js-sdk";

export type Category = {
  name: string;
} & MicroCMSListContent;

export type Blog = {
  title: string;
  description: string;
  content: string;
  category: Category;
  thumbnail: MicroCMSImage;
} & MicroCMSListContent;

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const getBlogList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: "blog",
    queries,
  });
  return listData;
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId,
    queries,
    customRequestInit: {
      next: {
        revalidate: queries?.draftKey === undefined ? 60 : 0,
      },
    },
  });
  return detailData;
};

export const getContentCount = async (endpoint: string) => {
  const listData = await client.getList({
    endpoint,
    queries: { limit: 0 },
  });
  return listData.totalCount;
};
