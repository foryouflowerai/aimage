/* global reactPress */

import WPAPI from "wpapi";
import { Configuration, OpenAIApi } from "openai";

const openapi = "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";
const configuration = new Configuration({
  apiKey: openapi,
});

console.log("open api",process.env.OPENAI_API_KEY);

const wp = new WPAPI(
  process.env.NODE_ENV === "development"
    ? {
        endpoint: "http://aimage.local/wp-json",
        username: "collinsruto48",
        password: "@11339134Word",
      }
    : { endpoint: reactPress.api.rest_url, nonce: reactPress.api.nonce }
);

export async function getContacts(q = "") {
  try {
    const users = await wp.users().search(q);
    console.log("wp", wp);
    return users.filter((user) => user.id !== 1); // we don't want the admin user
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getImages() {
  const images = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://aimage.local/wp-json/wp/v2/images"
      : reactPress.api.rest_url
  );
  return images;
}

export async function generateImage(prompt) {
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "512x512",
  });

  // const image = await response.json();

  console.log(response.data);
  return response.data
}

